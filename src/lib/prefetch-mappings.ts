import { useCtfTextBlockQuery } from '@src/components/features/ctf-components/ctf-text-block/__generated/ctf-text-block.generated';
import { useCtfBannerQuery } from '@src/components/features/ctf-components/ctf-banner/__generated/ctf-banner.generated';
import { useCtfCarouselQuery } from '@src/components/features/ctf-components/ctf-carousel/__generated/ctf-carousel.generated';
/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */

export const prefetchMap = {
  ComponentTextBlock: useCtfTextBlockQuery,
  ComponentBanner: useCtfBannerQuery,
  ComponentCarousel: useCtfCarouselQuery,
};
