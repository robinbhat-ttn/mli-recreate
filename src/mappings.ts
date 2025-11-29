import dynamic from 'next/dynamic';

export const componentMap = {
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block').then(module => module.CtfTextBlock),
  ),
};

export const componentGqlMap = {
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
};
