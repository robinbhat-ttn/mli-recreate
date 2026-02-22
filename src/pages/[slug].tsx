import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { useCtfHeaderQuery } from '@src/components/features/ctf-components/ctf-header/__generated/ctf-header.generated';
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array';

import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/ctf-page-gql';

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

    // Dynamic queries
    const pageData = await useCtfPageQuery.fetcher({ slug, locale, preview })();

    const page = pageData.pageCollection?.items[0];
    const header = page?.template?.header;
    const contentCollection = page?.contentCollection?.items;
    const footer = page?.template?.footer;

    // Default queries
    const prefetchPromises = [
      header &&
        queryClient.prefetchQuery(
          useCtfHeaderQuery.getKey({ id: header.sys.id, locale, preview }),
          useCtfHeaderQuery.fetcher({ id: header.sys.id, locale, preview }),
        ),
      queryClient.prefetchQuery({
        queryKey: useCtfPageQuery.getKey({ slug, locale, preview }),
        queryFn: useCtfPageQuery.fetcher({ slug, locale, preview }),
      }),
      footer &&
        queryClient.prefetchQuery(
          useCtfFooterQuery.getKey({ id: footer.sys.id, locale, preview }),
          useCtfFooterQuery.fetcher({ id: footer.sys.id, locale, preview }),
        ),
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

export default SlugPage;
