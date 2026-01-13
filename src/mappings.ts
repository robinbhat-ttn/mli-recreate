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
  Link: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-link/ctf-link').then(
      module => module.CtfLink,
    ),
  ),
  Accordion: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-accordion/ctf-accordion').then(
      module => module.CtfAccordion,
    ),
  ),
  VideoSection: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-video-v2/ctf-video-v2').then(
      module => module.CtfVideoV2,
    ),
  ),
  TabbedFormContainer: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-tabbed-form/ctf-tabbed-form').then(
      module => module.CtfTabbedForm,
    ),
  ),
  Form: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-form/ctf-form').then(
      module => module.CtfForm,
    ),
  ),
  FormWrapper: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-form-wrapper/ctf-form-wrapper').then(
      module => module.CtfFormWrapper,
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
  Link: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-link/ctf-link-gql').then(
      module => module.CtfLinkGql,
    ),
  ),
  Accordion: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-accordion/ctf-accordion-gql').then(
      module => module.CtfAccordionGql,
    ),
  ),
  VideoSection: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-video-v2/ctf-video-v2-gql').then(
      module => module.CtfVideoV2Gql,
    ),
  ),
  TabbedFormContainer: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-tabbed-form/ctf-tabbed-form-gql').then(
      module => module.CtfTabbedFormGql,
    ),
  ),
  Form: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-form/ctf-form-gql').then(
      module => module.CtfFormGql,
    ),
  ),
  FormWrapper: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-form-wrapper/ctf-form-wrapper-gql').then(
      module => module.CtfFormWrapperGql,
    ),
  ),
};
