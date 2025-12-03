import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

//import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
//import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';
// import { ComponentReferenceFieldsFragment } from '@src/lib/__generated/graphql.types';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
// import { prefetchMap, /* PrefetchMappingTypeFetcher */ } from '@src/lib/prefetch-mappings';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

const SlugPage: NextPage = () => {
  const router = useRouter();
  const slug = (router?.query.slug as string) || '';

  return <CtfPageGgl slug={slug} />;
};

export interface CustomNextPageContext extends NextPageContext {
  params: {
    slug: string;
  };
  id: string;
}

export const getServerSideProps = async ({ locale, params, query }: CustomNextPageContext) => {
  const slug = params.slug;
  const preview = Boolean(query.preview);

  try {
    const queryClient = new QueryClient();

    // Default queries
    const prefetchPromises = [
      queryClient.prefetchQuery({
        queryKey: useCtfPageQuery.getKey({ slug, locale, preview }),
        queryFn: useCtfPageQuery.fetcher({ slug, locale, preview }),
      }),
    ];
    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug, locale, preview })();
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

export default SlugPage;
