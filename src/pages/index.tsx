import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

//import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
//import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import {
  useCtfPageQuery,
  ReducedFooterFieldsFragment,
  ReducedHeaderFieldsFragment,
} from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';
import { useCtfHeaderQuery } from '@src/components/features/ctf-components/ctf-header/__generated/ctf-header.generated';
import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

const templateTypeToHeaderTypeMap = {
  'Home Page Template': 'Home Page Header',
  'Default Template': 'Default Header',
};
const templateTypeToFooterTypeMap = {
  'Home Page Template': 'Home Page Footer',
};

const findHeaderEntry = (
  headerCollection: Array<ReducedHeaderFieldsFragment | null>,
  templateType: string,
) => {
  const headerType = templateTypeToHeaderTypeMap[templateType];
  const requiredHeader = headerCollection?.find((entry: ReducedHeaderFieldsFragment | null) =>
    entry?.headerTemplateType?.includes(headerType),
  );
  return requiredHeader;
};

const findFooterEntry = (
  footerCollection: Array<ReducedFooterFieldsFragment | null>,
  templateType: string,
) => {
  const footerType = templateTypeToFooterTypeMap[templateType];
  const requiredFooter = footerCollection?.find((entry: ReducedFooterFieldsFragment | null) =>
    entry?.footerTemplateType?.includes(footerType),
  );
  return requiredFooter;
};

export const getServerSideProps = async ({ locale, query }: NextPageContext) => {
  const preview = Boolean(query.preview);

  try {
    const queryClient = new QueryClient();

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })();
    const templateType = pageData?.pageCollection?.items[0]?.templateType;
    const headerCollection = pageData.headerCollection;
    const footerCollection = pageData.footerCollection;
    //Find Appropriate Header for the page using templateType
    const headerEntry: any =
      headerCollection && templateType && findHeaderEntry(headerCollection?.items, templateType);
    //Clear the headerCollection Array and add the Appropriate header
    pageData?.headerCollection?.items.splice(0);
    headerEntry && pageData?.headerCollection?.items.push(headerEntry);

    //Find Appropriate Footer for the page using templateType
    const footerEntry: any =
      footerCollection && templateType && findFooterEntry(footerCollection?.items, templateType);
    //Clear the footerCollection Array and add the Appropriate footer

    pageData?.footerCollection?.items.splice(0);
    footerEntry && pageData?.footerCollection?.items.push(footerEntry);

    // Default queries
    const prefetchPromises = [
      headerEntry &&
        queryClient.prefetchQuery(
          useCtfHeaderQuery.getKey({ id: headerEntry.sys.id, locale, preview: false }),
          useCtfHeaderQuery.fetcher({ id: headerEntry.sys.id, locale, preview: false }),
        ),
      queryClient.setQueryData(useCtfPageQuery.getKey({ slug: 'home', locale, preview }), pageData),
      footerEntry &&
        queryClient.prefetchQuery(
          useCtfFooterQuery.getKey({ id: footerEntry.sys.id, locale, preview: false }),
          useCtfFooterQuery.fetcher({ id: footerEntry.sys.id, locale, preview: false }),
        ),
    ];

    const page = pageData.pageCollection?.items[0];
    const contentCollection = page?.contentCollection?.items;

    await Promise.all([
      ...prefetchPromises,
      ...prefetchPromiseArr({ inputArr: headerCollection?.items, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: contentCollection, locale, queryClient }),
      ...prefetchPromiseArr({ inputArr: footerCollection?.items, locale, queryClient }),
    ]);

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default LangPage;
