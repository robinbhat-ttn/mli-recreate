import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

//import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
//import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

const LangPage: NextPage = () => {
  return <CtfPageGgl slug="/" />;
};

export const getServerSideProps = async ({ locale, query }: NextPageContext) => {
  const preview = Boolean(query.preview);

  try {
    const queryClient = new QueryClient();

    // Default queries
    const prefetchPromises = [
      queryClient.prefetchQuery({
        queryKey: useCtfPageQuery.getKey({ slug: 'home', locale, preview }),
        queryFn: useCtfPageQuery.fetcher({ slug: 'home', locale, preview }),
      }),
    ];

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })();
    const page = pageData.pageCollection?.items[0];

    const contentCollection = page?.contentCollection?.items;
    
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
