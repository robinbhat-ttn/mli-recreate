import { GetServerSideProps } from 'next';

import { useSitemapPagesQuery } from '@src/lib/__generated/sitemap.generated';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

  const sitemapData = await useSitemapPagesQuery.fetcher({ locale })();
  const pages = sitemapData.pageCollection?.items || [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          if (!page?.slug) return null;
          return `
            <url>
              <loc>${baseUrl}/${locale === 'en-US' ? '' : locale + '/'}${page.slug === '/' ? '' : page.slug}</loc>
              <lastmod>${page.sys.publishedAt}</lastmod>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
