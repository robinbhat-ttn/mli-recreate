import * as Types from '../../__generated/graphql.types';

export type ComponentReferenceFields_Accordion_Fragment = { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Banner_Fragment = { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ButtonWithLinks_Fragment = { __typename: 'ButtonWithLinks', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Card_Fragment = { __typename: 'Card', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Carousel_Fragment = { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Disclaimer_Fragment = { __typename: 'Disclaimer', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Footer_Fragment = { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Form_Fragment = { __typename: 'Form', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FormField_Fragment = { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FormTab_Fragment = { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FormWrapper_Fragment = { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_HamburgerMenu_Fragment = { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Header_Fragment = { __typename: 'Header', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Link_Fragment = { __typename: 'Link', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_NavigationItems_Fragment = { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_OptionSet_Fragment = { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Question_Fragment = { __typename: 'Question', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_SubNavigationItem_Fragment = { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_TabbedFormContainer_Fragment = { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_VideoSection_Fragment = { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment =
  | ComponentReferenceFields_Accordion_Fragment
  | ComponentReferenceFields_Banner_Fragment
  | ComponentReferenceFields_Button_Fragment
  | ComponentReferenceFields_ButtonWithLinks_Fragment
  | ComponentReferenceFields_Card_Fragment
  | ComponentReferenceFields_Carousel_Fragment
  | ComponentReferenceFields_ComponentTextBlock_Fragment
  | ComponentReferenceFields_Disclaimer_Fragment
  | ComponentReferenceFields_Footer_Fragment
  | ComponentReferenceFields_Form_Fragment
  | ComponentReferenceFields_FormField_Fragment
  | ComponentReferenceFields_FormTab_Fragment
  | ComponentReferenceFields_FormWrapper_Fragment
  | ComponentReferenceFields_HamburgerMenu_Fragment
  | ComponentReferenceFields_Header_Fragment
  | ComponentReferenceFields_Link_Fragment
  | ComponentReferenceFields_NavigationItems_Fragment
  | ComponentReferenceFields_OptionSet_Fragment
  | ComponentReferenceFields_Page_Fragment
  | ComponentReferenceFields_Question_Fragment
  | ComponentReferenceFields_Seo_Fragment
  | ComponentReferenceFields_SubNavigationItem_Fragment
  | ComponentReferenceFields_TabbedFormContainer_Fragment
  | ComponentReferenceFields_VideoSection_Fragment
;


export const ComponentReferenceFieldsFragmentDoc = `
    fragment ComponentReferenceFields on Entry {
  __typename
  sys {
    id
  }
}
    `;