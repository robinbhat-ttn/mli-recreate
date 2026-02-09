import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

//import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
//import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';
import { useCtfHeaderQuery } from '@src/components/features/ctf-components/ctf-header/__generated/ctf-header.generated';
import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale, query }: NextPageContext) => {
  const preview = Boolean(query.preview);

  try {
    const queryClient = new QueryClient();

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })();

    const page = pageData.pageCollection?.items[0];
    const header = page?.template?.header;
    const contentCollection = page?.contentCollection?.items;
    const footer = page?.template?.footer;

    // Default queries
    const prefetchPromises = [
      header &&
        queryClient.prefetchQuery({
          queryKey: useCtfHeaderQuery.getKey({ id: header.sys.id, locale, preview }),
          queryFn: useCtfHeaderQuery.fetcher({ id: header.sys.id, locale, preview }),
        }),
      queryClient.prefetchQuery({
        queryKey: useCtfPageQuery.getKey({ slug: 'home', locale, preview }),
        queryFn: useCtfPageQuery.fetcher({ slug: 'home', locale, preview }),
      }),
      footer &&
        queryClient.prefetchQuery({
          queryKey: useCtfFooterQuery.getKey({ id: footer.sys.id, locale, preview }),
          queryFn: useCtfFooterQuery.fetcher({ id: footer.sys.id, locale, preview }),
        }),
    ];

    await Promise.all([
      ...prefetchPromises,
      ...prefetchPromiseArr({ inputArr: contentCollection, locale, queryClient }),
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
