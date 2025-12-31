import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_Accordion_Fragment, ComponentReferenceFields_Banner_Fragment, ComponentReferenceFields_Button_Fragment, ComponentReferenceFields_ButtonWithLinks_Fragment, ComponentReferenceFields_Card_Fragment, ComponentReferenceFields_Carousel_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Disclaimer_Fragment, ComponentReferenceFields_Footer_Fragment, ComponentReferenceFields_Form_Fragment, ComponentReferenceFields_FormField_Fragment, ComponentReferenceFields_FormTab_Fragment, ComponentReferenceFields_HamburgerMenu_Fragment, ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Link_Fragment, ComponentReferenceFields_NavigationItems_Fragment, ComponentReferenceFields_OptionSet_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Question_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_SubNavigationItem_Fragment, ComponentReferenceFields_TabbedFormContainer_Fragment, ComponentReferenceFields_VideoSection_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type DisclaimerSectionFieldsFragment = { __typename: 'Disclaimer', heading?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'DisclaimerContent', json: any, links: { __typename?: 'DisclaimerContentLinks', entries: { __typename?: 'DisclaimerContentEntries', block: Array<
          | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ButtonWithLinks', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Card', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Disclaimer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'DisclaimerContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type FooterInformationFieldsFragment = { __typename: 'FooterFooterInformation', json: any, links: { __typename?: 'FooterFooterInformationLinks', entries: { __typename?: 'FooterFooterInformationEntries', block: Array<
        | (
          { __typename?: 'Accordion' }
          & ComponentReferenceFields_Accordion_Fragment
        )
        | (
          { __typename?: 'Banner' }
          & ComponentReferenceFields_Banner_Fragment
        )
        | (
          { __typename?: 'Button' }
          & ComponentReferenceFields_Button_Fragment
        )
        | (
          { __typename?: 'ButtonWithLinks' }
          & ComponentReferenceFields_ButtonWithLinks_Fragment
        )
        | (
          { __typename?: 'Card' }
          & ComponentReferenceFields_Card_Fragment
        )
        | (
          { __typename?: 'Carousel' }
          & ComponentReferenceFields_Carousel_Fragment
        )
        | (
          { __typename?: 'ComponentTextBlock' }
          & ComponentReferenceFields_ComponentTextBlock_Fragment
        )
        | (
          { __typename?: 'Disclaimer' }
          & ComponentReferenceFields_Disclaimer_Fragment
        )
        | (
          { __typename?: 'Footer' }
          & ComponentReferenceFields_Footer_Fragment
        )
        | (
          { __typename?: 'Form' }
          & ComponentReferenceFields_Form_Fragment
        )
        | (
          { __typename?: 'FormField' }
          & ComponentReferenceFields_FormField_Fragment
        )
        | (
          { __typename?: 'FormTab' }
          & ComponentReferenceFields_FormTab_Fragment
        )
        | (
          { __typename?: 'HamburgerMenu' }
          & ComponentReferenceFields_HamburgerMenu_Fragment
        )
        | (
          { __typename?: 'Header' }
          & ComponentReferenceFields_Header_Fragment
        )
        | (
          { __typename?: 'Link' }
          & ComponentReferenceFields_Link_Fragment
        )
        | (
          { __typename?: 'NavigationItems' }
          & ComponentReferenceFields_NavigationItems_Fragment
        )
        | (
          { __typename?: 'OptionSet' }
          & ComponentReferenceFields_OptionSet_Fragment
        )
        | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        )
        | (
          { __typename?: 'Question' }
          & ComponentReferenceFields_Question_Fragment
        )
        | (
          { __typename?: 'Seo' }
          & ComponentReferenceFields_Seo_Fragment
        )
        | (
          { __typename?: 'SubNavigationItem' }
          & ComponentReferenceFields_SubNavigationItem_Fragment
        )
        | (
          { __typename?: 'TabbedFormContainer' }
          & ComponentReferenceFields_TabbedFormContainer_Fragment
        )
        | (
          { __typename?: 'VideoSection' }
          & ComponentReferenceFields_VideoSection_Fragment
        )
       | null> }, assets: { __typename?: 'FooterFooterInformationAssets', block: Array<(
        { __typename?: 'Asset' }
        & AssetFieldsFragment
      ) | null> } } };

export type GroupSitesLinksCollectionFieldsFragment = { __typename?: 'FooterGroupSitesLinksCollection', items: Array<(
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null> };

export type SocialLinksCollectionFieldsFragment = { __typename?: 'FooterSocialLinksCollection', items: Array<(
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null> };

export type FooterButtonCollectionFieldsFragment = { __typename?: 'FooterButtonsCollection', items: Array<(
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null> };

export type FooterLinksCollectionFragment = { __typename?: 'FooterFooterLinksCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: (
      { __typename?: 'Link' }
      & LinkFieldsFragment
    ) | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> };

export type FooterFieldsFragment = { __typename: 'Footer', sys: { __typename?: 'Sys', id: string }, footerLinksCollection?: (
    { __typename?: 'FooterFooterLinksCollection' }
    & FooterLinksCollectionFragment
  ) | null, buttonsCollection?: (
    { __typename?: 'FooterButtonsCollection' }
    & FooterButtonCollectionFieldsFragment
  ) | null, socialLinksCollection?: (
    { __typename?: 'FooterSocialLinksCollection' }
    & SocialLinksCollectionFieldsFragment
  ) | null, groupSitesLinksCollection?: (
    { __typename?: 'FooterGroupSitesLinksCollection' }
    & GroupSitesLinksCollectionFieldsFragment
  ) | null, footerInformation?: (
    { __typename?: 'FooterFooterInformation' }
    & FooterInformationFieldsFragment
  ) | null, disclaimerSection?: (
    { __typename?: 'Disclaimer' }
    & DisclaimerSectionFieldsFragment
  ) | null };

export type CtfFooterQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footer?: (
    { __typename?: 'Footer' }
    & FooterFieldsFragment
  ) | null };


export const FooterLinksCollectionFragmentDoc = `
    fragment FooterLinksCollection on FooterFooterLinksCollection {
  items {
    __typename
    sys {
      id
    }
    subNavigationItemTitle
    mainLink {
      ...LinkFields
    }
    secondaryLinksCollection(limit: 20) {
      items {
        __typename
        sys {
          id
        }
        linkType
        linkHeading
        linkSubHeading
        pageLink {
          slug
        }
        linkUrl
      }
    }
  }
}
    `;
export const FooterButtonCollectionFieldsFragmentDoc = `
    fragment FooterButtonCollectionFields on FooterButtonsCollection {
  items {
    ...LinkFields
  }
}
    `;
export const SocialLinksCollectionFieldsFragmentDoc = `
    fragment SocialLinksCollectionFields on FooterSocialLinksCollection {
  items {
    ...LinkFields
  }
}
    `;
export const GroupSitesLinksCollectionFieldsFragmentDoc = `
    fragment GroupSitesLinksCollectionFields on FooterGroupSitesLinksCollection {
  items {
    ...LinkFields
  }
}
    `;
export const FooterInformationFieldsFragmentDoc = `
    fragment FooterInformationFields on FooterFooterInformation {
  __typename
  json
  links {
    entries {
      block {
        ...ComponentReferenceFields
      }
    }
    assets {
      block {
        ...AssetFields
      }
    }
  }
}
    `;
export const DisclaimerSectionFieldsFragmentDoc = `
    fragment DisclaimerSectionFields on Disclaimer {
  __typename
  sys {
    id
  }
  heading
  content {
    json
    links {
      entries {
        block {
          __typename
          sys {
            id
          }
        }
      }
      assets {
        block {
          __typename
          sys {
            id
          }
          contentType
          title
          description
          width
          height
          url
        }
      }
    }
  }
}
    `;
export const FooterFieldsFragmentDoc = `
    fragment FooterFields on Footer {
  __typename
  sys {
    id
  }
  footerLinksCollection(limit: 20) {
    ...FooterLinksCollection
  }
  buttonsCollection(limit: 20) {
    ...FooterButtonCollectionFields
  }
  socialLinksCollection(limit: 20) {
    ...SocialLinksCollectionFields
  }
  groupSitesLinksCollection {
    ...GroupSitesLinksCollectionFields
  }
  footerInformation {
    ...FooterInformationFields
  }
  disclaimerSection {
    ...DisclaimerSectionFields
  }
}
    `;
export const CtfFooterDocument = `
    query CtfFooter($id: String!, $locale: String, $preview: Boolean) {
  footer(id: $id, locale: $locale, preview: $preview) {
    ...FooterFields
  }
}
    ${FooterFieldsFragmentDoc}
${FooterLinksCollectionFragmentDoc}
${LinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${FooterButtonCollectionFieldsFragmentDoc}
${SocialLinksCollectionFieldsFragmentDoc}
${GroupSitesLinksCollectionFieldsFragmentDoc}
${FooterInformationFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${DisclaimerSectionFieldsFragmentDoc}`;

export const useCtfFooterQuery = <
      TData = CtfFooterQuery,
      TError = unknown
    >(
      variables: CtfFooterQueryVariables,
      options?: Omit<UseQueryOptions<CtfFooterQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfFooterQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfFooterQuery, TError, TData>(
      {
    queryKey: ['CtfFooter', variables],
    queryFn: customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables),
    ...options
  }
    )};

useCtfFooterQuery.getKey = (variables: CtfFooterQueryVariables) => ['CtfFooter', variables];


useCtfFooterQuery.fetcher = (variables: CtfFooterQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables, options);
