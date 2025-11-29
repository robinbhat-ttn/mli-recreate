import { useCtfTextBlockQuery } from '@src/components/features/ctf-components/ctf-text-block/__generated/ctf-text-block.generated';

/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */

export const prefetchMap = {
  ComponentTextBlock: useCtfTextBlockQuery,
};
