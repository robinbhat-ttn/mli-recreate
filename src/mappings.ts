import dynamic from 'next/dynamic';

export const componentMap = {
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block').then(
      module => module.CtfTextBlock,
    ),
  ),
  Banner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-banner/ctf-banner').then(
      module => module.CtfBanner,
    ),
  ),
  Carousel: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-carousel/ctf-carousel').then(
      module => module.CtfCarousel,
    ),
  ),
};

export const componentGqlMap = {
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
  Banner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-banner/ctf-banner-gql').then(
      module => module.CtfBannerGql,
    ),
  ),
  Carousel: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-carousel/ctf-carousel-gql').then(
      module => module.CtfCarouselGql,
    ),
  ),
};
