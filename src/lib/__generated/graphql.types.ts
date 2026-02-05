export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type Accordion = Entry & _Node & {
  __typename?: 'Accordion';
  _id: Scalars['ID']['output'];
  accordionItemsCollection?: Maybe<AccordionAccordionItemsCollection>;
  booleanField?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  demo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AccordionLinkingCollections>;
  longText?: Maybe<Scalars['String']['output']>;
  manyReferenceCollection?: Maybe<AccordionManyReferenceCollection>;
  multifield?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  numberField?: Maybe<Scalars['Int']['output']>;
  oneReference?: Maybe<Entry>;
  radio?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionAccordionItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionAccordionItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<QuestionFilter>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionBooleanFieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionDemoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionLongTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionManyReferenceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionManyReferenceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ButtonFilter>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionMultifieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionNumberFieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionOneReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Accordion Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/accordion) */
export type AccordionRadioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionAccordionItemsCollection = {
  __typename?: 'AccordionAccordionItemsCollection';
  items: Array<Maybe<Question>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AccordionAccordionItemsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuestionTextAsc = 'questionText_ASC',
  QuestionTextDesc = 'questionText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AccordionCollection = {
  __typename?: 'AccordionCollection';
  items: Array<Maybe<Accordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AccordionFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  accordionItems?: InputMaybe<CfQuestionNestedFilter>;
  accordionItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  booleanField?: InputMaybe<Scalars['Boolean']['input']>;
  booleanField_exists?: InputMaybe<Scalars['Boolean']['input']>;
  booleanField_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  demo_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  demo_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  demo_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  demo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longText?: InputMaybe<Scalars['String']['input']>;
  longText_contains?: InputMaybe<Scalars['String']['input']>;
  longText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longText_not?: InputMaybe<Scalars['String']['input']>;
  longText_not_contains?: InputMaybe<Scalars['String']['input']>;
  longText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  manyReference?: InputMaybe<CfButtonNestedFilter>;
  manyReferenceCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  multifield_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  multifield_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  multifield_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  multifield_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberField?: InputMaybe<Scalars['Int']['input']>;
  numberField_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberField_gt?: InputMaybe<Scalars['Int']['input']>;
  numberField_gte?: InputMaybe<Scalars['Int']['input']>;
  numberField_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  numberField_lt?: InputMaybe<Scalars['Int']['input']>;
  numberField_lte?: InputMaybe<Scalars['Int']['input']>;
  numberField_not?: InputMaybe<Scalars['Int']['input']>;
  numberField_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  oneReference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  radio?: InputMaybe<Scalars['String']['input']>;
  radio_contains?: InputMaybe<Scalars['String']['input']>;
  radio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  radio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  radio_not?: InputMaybe<Scalars['String']['input']>;
  radio_not_contains?: InputMaybe<Scalars['String']['input']>;
  radio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AccordionLinkingCollections = {
  __typename?: 'AccordionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AccordionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AccordionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AccordionLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AccordionManyReferenceCollection = {
  __typename?: 'AccordionManyReferenceCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AccordionManyReferenceCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionOrder {
  BooleanFieldAsc = 'booleanField_ASC',
  BooleanFieldDesc = 'booleanField_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NumberFieldAsc = 'numberField_ASC',
  NumberFieldDesc = 'numberField_DESC',
  RadioAsc = 'radio_ASC',
  RadioDesc = 'radio_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  accordionCollection?: Maybe<AccordionCollection>;
  bannerCollection?: Maybe<BannerCollection>;
  cardCollection?: Maybe<CardCollection>;
  entryCollection?: Maybe<EntryCollection>;
  formFieldCollection?: Maybe<FormFieldCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  linkCollection?: Maybe<LinkCollection>;
  tabbedFormContainerCollection?: Maybe<TabbedFormContainerCollection>;
};


export type AssetLinkingCollectionsAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsFormFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTabbedFormContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type Banner = Entry & _Node & {
  __typename?: 'Banner';
  _id: Scalars['ID']['output'];
  bannerImage?: Maybe<Asset>;
  bannerImageLink?: Maybe<Scalars['String']['output']>;
  bannerTextCollection?: Maybe<BannerBannerTextCollection>;
  bannerTitle?: Maybe<Scalars['String']['output']>;
  bannerType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BannerLinkingCollections>;
  policyCardsCollection?: Maybe<BannerPolicyCardsCollection>;
  sys: Sys;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerBannerImageLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerBannerTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BannerBannerTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerBannerTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Banner Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/banner) */
export type BannerPolicyCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BannerPolicyCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};

export type BannerBannerTextCollection = {
  __typename?: 'BannerBannerTextCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BannerBannerTextCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariationsAsc = 'variations_ASC',
  VariationsDesc = 'variations_DESC'
}

export type BannerCollection = {
  __typename?: 'BannerCollection';
  items: Array<Maybe<Banner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  bannerImageLink?: InputMaybe<Scalars['String']['input']>;
  bannerImageLink_contains?: InputMaybe<Scalars['String']['input']>;
  bannerImageLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerImageLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerImageLink_not?: InputMaybe<Scalars['String']['input']>;
  bannerImageLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerImageLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerText?: InputMaybe<CfComponentTextBlockNestedFilter>;
  bannerTextCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTitle?: InputMaybe<Scalars['String']['input']>;
  bannerTitle_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerTitle_not?: InputMaybe<Scalars['String']['input']>;
  bannerTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerType?: InputMaybe<Scalars['String']['input']>;
  bannerType_contains?: InputMaybe<Scalars['String']['input']>;
  bannerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerType_not?: InputMaybe<Scalars['String']['input']>;
  bannerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  policyCards?: InputMaybe<CfCardNestedFilter>;
  policyCardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type BannerLinkingCollections = {
  __typename?: 'BannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type BannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BannerLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BannerOrder {
  BannerImageLinkAsc = 'bannerImageLink_ASC',
  BannerImageLinkDesc = 'bannerImageLink_DESC',
  BannerTitleAsc = 'bannerTitle_ASC',
  BannerTitleDesc = 'bannerTitle_DESC',
  BannerTypeAsc = 'bannerType_ASC',
  BannerTypeDesc = 'bannerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BannerPolicyCardsCollection = {
  __typename?: 'BannerPolicyCardsCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BannerPolicyCardsCollectionOrder {
  CardLinkAsc = 'cardLink_ASC',
  CardLinkDesc = 'cardLink_DESC',
  CardTitleAsc = 'cardTitle_ASC',
  CardTitleDesc = 'cardTitle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Normal Button Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/button) */
export type Button = Entry & _Node & {
  __typename?: 'Button';
  _id: Scalars['ID']['output'];
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
};


/** Normal Button Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/button) */
export type ButtonButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Normal Button Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/button) */
export type ButtonButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Normal Button Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/button) */
export type ButtonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Normal Button Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  accordionCollection?: Maybe<AccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ButtonLinkingCollectionsAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ButtonLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ButtonLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ButtonLinkingCollectionsAccordionCollectionOrder {
  BooleanFieldAsc = 'booleanField_ASC',
  BooleanFieldDesc = 'booleanField_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NumberFieldAsc = 'numberField_ASC',
  NumberFieldDesc = 'numberField_DESC',
  RadioAsc = 'radio_ASC',
  RadioDesc = 'radio_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonLinkingCollectionsHeaderCollectionOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Button with Links Content Type for Home Page Header Navigation Item [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/buttonWithLinks) */
export type ButtonWithLinks = Entry & _Node & {
  __typename?: 'ButtonWithLinks';
  _id: Scalars['ID']['output'];
  buttonDropDownLinksCollection?: Maybe<ButtonWithLinksButtonDropDownLinksCollection>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ButtonWithLinksLinkingCollections>;
  sys: Sys;
};


/** Button with Links Content Type for Home Page Header Navigation Item [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/buttonWithLinks) */
export type ButtonWithLinksButtonDropDownLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonWithLinksButtonDropDownLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Button with Links Content Type for Home Page Header Navigation Item [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/buttonWithLinks) */
export type ButtonWithLinksButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Button with Links Content Type for Home Page Header Navigation Item [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/buttonWithLinks) */
export type ButtonWithLinksInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Button with Links Content Type for Home Page Header Navigation Item [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/buttonWithLinks) */
export type ButtonWithLinksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ButtonWithLinksButtonDropDownLinksCollection = {
  __typename?: 'ButtonWithLinksButtonDropDownLinksCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ButtonWithLinksButtonDropDownLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ButtonWithLinksCollection = {
  __typename?: 'ButtonWithLinksCollection';
  items: Array<Maybe<ButtonWithLinks>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ButtonWithLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonWithLinksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonWithLinksFilter>>>;
  buttonDropDownLinks?: InputMaybe<CfLinkNestedFilter>;
  buttonDropDownLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonWithLinksLinkingCollections = {
  __typename?: 'ButtonWithLinksLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
};


export type ButtonWithLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ButtonWithLinksLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonWithLinksLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ButtonWithLinksLinkingCollectionsHeaderCollectionOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ButtonWithLinksOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type Card = Entry & _Node & {
  __typename?: 'Card';
  _id: Scalars['ID']['output'];
  cardContent?: Maybe<CardCardContent>;
  cardImage?: Maybe<Asset>;
  cardLink?: Maybe<Scalars['String']['output']>;
  cardTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  preTitle?: Maybe<CardPreTitle>;
  sys: Sys;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardCardContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardCardImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardCardLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Card Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/card) */
export type CardPreTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardCardContent = {
  __typename?: 'CardCardContent';
  json: Scalars['JSON']['output'];
  links: CardCardContentLinks;
};

export type CardCardContentAssets = {
  __typename?: 'CardCardContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardCardContentEntries = {
  __typename?: 'CardCardContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardCardContentLinks = {
  __typename?: 'CardCardContentLinks';
  assets: CardCardContentAssets;
  entries: CardCardContentEntries;
  resources: CardCardContentResources;
};

export type CardCardContentResources = {
  __typename?: 'CardCardContentResources';
  block: Array<CardCardContentResourcesBlock>;
  hyperlink: Array<CardCardContentResourcesHyperlink>;
  inline: Array<CardCardContentResourcesInline>;
};

export type CardCardContentResourcesBlock = ResourceLink & {
  __typename?: 'CardCardContentResourcesBlock';
  sys: ResourceSys;
};

export type CardCardContentResourcesHyperlink = ResourceLink & {
  __typename?: 'CardCardContentResourcesHyperlink';
  sys: ResourceSys;
};

export type CardCardContentResourcesInline = ResourceLink & {
  __typename?: 'CardCardContentResourcesInline';
  sys: ResourceSys;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  cardContent_contains?: InputMaybe<Scalars['String']['input']>;
  cardContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardLink?: InputMaybe<Scalars['String']['input']>;
  cardLink_contains?: InputMaybe<Scalars['String']['input']>;
  cardLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardLink_not?: InputMaybe<Scalars['String']['input']>;
  cardLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardTitle?: InputMaybe<Scalars['String']['input']>;
  cardTitle_contains?: InputMaybe<Scalars['String']['input']>;
  cardTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardTitle_not?: InputMaybe<Scalars['String']['input']>;
  cardTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preTitle_contains?: InputMaybe<Scalars['String']['input']>;
  preTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  preTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  bannerCollection?: Maybe<BannerCollection>;
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CardLinkingCollectionsBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardLinkingCollectionsBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CardLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CardLinkingCollectionsBannerCollectionOrder {
  BannerImageLinkAsc = 'bannerImageLink_ASC',
  BannerImageLinkDesc = 'bannerImageLink_DESC',
  BannerTitleAsc = 'bannerTitle_ASC',
  BannerTitleDesc = 'bannerTitle_DESC',
  BannerTypeAsc = 'bannerType_ASC',
  BannerTypeDesc = 'bannerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CardLinkingCollectionsCarouselCollectionOrder {
  CarouselTitleAsc = 'carouselTitle_ASC',
  CarouselTitleDesc = 'carouselTitle_DESC',
  CarouselTypeAsc = 'carouselType_ASC',
  CarouselTypeDesc = 'carouselType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CardOrder {
  CardLinkAsc = 'cardLink_ASC',
  CardLinkDesc = 'cardLink_DESC',
  CardTitleAsc = 'cardTitle_ASC',
  CardTitleDesc = 'cardTitle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CardPreTitle = {
  __typename?: 'CardPreTitle';
  json: Scalars['JSON']['output'];
  links: CardPreTitleLinks;
};

export type CardPreTitleAssets = {
  __typename?: 'CardPreTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardPreTitleEntries = {
  __typename?: 'CardPreTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardPreTitleLinks = {
  __typename?: 'CardPreTitleLinks';
  assets: CardPreTitleAssets;
  entries: CardPreTitleEntries;
  resources: CardPreTitleResources;
};

export type CardPreTitleResources = {
  __typename?: 'CardPreTitleResources';
  block: Array<CardPreTitleResourcesBlock>;
  hyperlink: Array<CardPreTitleResourcesHyperlink>;
  inline: Array<CardPreTitleResourcesInline>;
};

export type CardPreTitleResourcesBlock = ResourceLink & {
  __typename?: 'CardPreTitleResourcesBlock';
  sys: ResourceSys;
};

export type CardPreTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'CardPreTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type CardPreTitleResourcesInline = ResourceLink & {
  __typename?: 'CardPreTitleResourcesInline';
  sys: ResourceSys;
};

/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type Carousel = Entry & _Node & {
  __typename?: 'Carousel';
  _id: Scalars['ID']['output'];
  cardsCollection?: Maybe<CarouselCardsCollection>;
  carouselTitle?: Maybe<Scalars['String']['output']>;
  carouselType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CarouselLinkingCollections>;
  sys: Sys;
};


/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type CarouselCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};


/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type CarouselCarouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type CarouselCarouselTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type CarouselInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Carousel Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CarouselCardsCollection = {
  __typename?: 'CarouselCardsCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CarouselCardsCollectionOrder {
  CardLinkAsc = 'cardLink_ASC',
  CardLinkDesc = 'cardLink_DESC',
  CardTitleAsc = 'cardTitle_ASC',
  CardTitleDesc = 'cardTitle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CarouselCollection = {
  __typename?: 'CarouselCollection';
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  cards?: InputMaybe<CfCardNestedFilter>;
  cardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carouselTitle?: InputMaybe<Scalars['String']['input']>;
  carouselTitle_contains?: InputMaybe<Scalars['String']['input']>;
  carouselTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carouselTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carouselTitle_not?: InputMaybe<Scalars['String']['input']>;
  carouselTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  carouselTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carouselType?: InputMaybe<Scalars['String']['input']>;
  carouselType_contains?: InputMaybe<Scalars['String']['input']>;
  carouselType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carouselType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carouselType_not?: InputMaybe<Scalars['String']['input']>;
  carouselType_not_contains?: InputMaybe<Scalars['String']['input']>;
  carouselType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CarouselLinkingCollections = {
  __typename?: 'CarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CarouselLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselOrder {
  CarouselTitleAsc = 'carouselTitle_ASC',
  CarouselTitleDesc = 'carouselTitle_DESC',
  CarouselTypeAsc = 'carouselType_ASC',
  CarouselTypeDesc = 'carouselType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/componentTextBlock) */
export type ComponentTextBlock = Entry & _Node & {
  __typename?: 'ComponentTextBlock';
  _id: Scalars['ID']['output'];
  body?: Maybe<ComponentTextBlockBody>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentTextBlockLinkingCollections>;
  sys: Sys;
  variations?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/componentTextBlock) */
export type ComponentTextBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/componentTextBlock) */
export type ComponentTextBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/componentTextBlock) */
export type ComponentTextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/componentTextBlock) */
export type ComponentTextBlockVariationsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentTextBlockBody = {
  __typename?: 'ComponentTextBlockBody';
  json: Scalars['JSON']['output'];
  links: ComponentTextBlockBodyLinks;
};

export type ComponentTextBlockBodyAssets = {
  __typename?: 'ComponentTextBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextBlockBodyEntries = {
  __typename?: 'ComponentTextBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextBlockBodyLinks = {
  __typename?: 'ComponentTextBlockBodyLinks';
  assets: ComponentTextBlockBodyAssets;
  entries: ComponentTextBlockBodyEntries;
  resources: ComponentTextBlockBodyResources;
};

export type ComponentTextBlockBodyResources = {
  __typename?: 'ComponentTextBlockBodyResources';
  block: Array<ComponentTextBlockBodyResourcesBlock>;
  hyperlink: Array<ComponentTextBlockBodyResourcesHyperlink>;
  inline: Array<ComponentTextBlockBodyResourcesInline>;
};

export type ComponentTextBlockBodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentTextBlockBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentTextBlockBodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentTextBlockCollection = {
  __typename?: 'ComponentTextBlockCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentTextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variations?: InputMaybe<Scalars['String']['input']>;
  variations_contains?: InputMaybe<Scalars['String']['input']>;
  variations_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variations_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variations_not?: InputMaybe<Scalars['String']['input']>;
  variations_not_contains?: InputMaybe<Scalars['String']['input']>;
  variations_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTextBlockLinkingCollections = {
  __typename?: 'ComponentTextBlockLinkingCollections';
  bannerCollection?: Maybe<BannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentTextBlockLinkingCollectionsBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentTextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentTextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentTextBlockLinkingCollectionsBannerCollectionOrder {
  BannerImageLinkAsc = 'bannerImageLink_ASC',
  BannerImageLinkDesc = 'bannerImageLink_DESC',
  BannerTitleAsc = 'bannerTitle_ASC',
  BannerTitleDesc = 'bannerTitle_DESC',
  BannerTypeAsc = 'bannerType_ASC',
  BannerTypeDesc = 'bannerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariationsAsc = 'variations_ASC',
  VariationsDesc = 'variations_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Disclaimer Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/disclaimer) */
export type Disclaimer = Entry & _Node & {
  __typename?: 'Disclaimer';
  _id: Scalars['ID']['output'];
  content?: Maybe<DisclaimerContent>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DisclaimerLinkingCollections>;
  sys: Sys;
};


/** Disclaimer Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/disclaimer) */
export type DisclaimerContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Disclaimer Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/disclaimer) */
export type DisclaimerHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Disclaimer Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/disclaimer) */
export type DisclaimerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Disclaimer Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/disclaimer) */
export type DisclaimerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DisclaimerCollection = {
  __typename?: 'DisclaimerCollection';
  items: Array<Maybe<Disclaimer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DisclaimerContent = {
  __typename?: 'DisclaimerContent';
  json: Scalars['JSON']['output'];
  links: DisclaimerContentLinks;
};

export type DisclaimerContentAssets = {
  __typename?: 'DisclaimerContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type DisclaimerContentEntries = {
  __typename?: 'DisclaimerContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type DisclaimerContentLinks = {
  __typename?: 'DisclaimerContentLinks';
  assets: DisclaimerContentAssets;
  entries: DisclaimerContentEntries;
  resources: DisclaimerContentResources;
};

export type DisclaimerContentResources = {
  __typename?: 'DisclaimerContentResources';
  block: Array<DisclaimerContentResourcesBlock>;
  hyperlink: Array<DisclaimerContentResourcesHyperlink>;
  inline: Array<DisclaimerContentResourcesInline>;
};

export type DisclaimerContentResourcesBlock = ResourceLink & {
  __typename?: 'DisclaimerContentResourcesBlock';
  sys: ResourceSys;
};

export type DisclaimerContentResourcesHyperlink = ResourceLink & {
  __typename?: 'DisclaimerContentResourcesHyperlink';
  sys: ResourceSys;
};

export type DisclaimerContentResourcesInline = ResourceLink & {
  __typename?: 'DisclaimerContentResourcesInline';
  sys: ResourceSys;
};

export type DisclaimerFilter = {
  AND?: InputMaybe<Array<InputMaybe<DisclaimerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DisclaimerFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type DisclaimerLinkingCollections = {
  __typename?: 'DisclaimerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type DisclaimerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DisclaimerLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DisclaimerLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DisclaimerLinkingCollectionsFooterCollectionOrder {
  FooterTypeAsc = 'footerType_ASC',
  FooterTypeDesc = 'footerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DisclaimerOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  buttonsCollection?: Maybe<FooterButtonsCollection>;
  contentfulMetadata: ContentfulMetadata;
  disclaimerSection?: Maybe<Disclaimer>;
  footerInformation?: Maybe<FooterFooterInformation>;
  footerLinksCollection?: Maybe<FooterFooterLinksCollection>;
  footerType?: Maybe<Scalars['String']['output']>;
  groupSitesLinksCollection?: Maybe<FooterGroupSitesLinksCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  socialLinksCollection?: Maybe<FooterSocialLinksCollection>;
  sys: Sys;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterButtonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterDisclaimerSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DisclaimerFilter>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterFooterInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterFooterLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SubNavigationItemFilter>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterFooterTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterGroupSitesLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterGroupSitesLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Footer for a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/footer) */
export type FooterSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterSocialLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};

export type FooterButtonsCollection = {
  __typename?: 'FooterButtonsCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterButtonsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  buttons?: InputMaybe<CfLinkNestedFilter>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disclaimerSection?: InputMaybe<CfDisclaimerNestedFilter>;
  disclaimerSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerInformation_contains?: InputMaybe<Scalars['String']['input']>;
  footerInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  footerLinks?: InputMaybe<CfSubNavigationItemNestedFilter>;
  footerLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerType?: InputMaybe<Scalars['String']['input']>;
  footerType_contains?: InputMaybe<Scalars['String']['input']>;
  footerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerType_not?: InputMaybe<Scalars['String']['input']>;
  footerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  footerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupSitesLinks?: InputMaybe<CfLinkNestedFilter>;
  groupSitesLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialLinks?: InputMaybe<CfLinkNestedFilter>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterFooterInformation = {
  __typename?: 'FooterFooterInformation';
  json: Scalars['JSON']['output'];
  links: FooterFooterInformationLinks;
};

export type FooterFooterInformationAssets = {
  __typename?: 'FooterFooterInformationAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterFooterInformationEntries = {
  __typename?: 'FooterFooterInformationEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterFooterInformationLinks = {
  __typename?: 'FooterFooterInformationLinks';
  assets: FooterFooterInformationAssets;
  entries: FooterFooterInformationEntries;
  resources: FooterFooterInformationResources;
};

export type FooterFooterInformationResources = {
  __typename?: 'FooterFooterInformationResources';
  block: Array<FooterFooterInformationResourcesBlock>;
  hyperlink: Array<FooterFooterInformationResourcesHyperlink>;
  inline: Array<FooterFooterInformationResourcesInline>;
};

export type FooterFooterInformationResourcesBlock = ResourceLink & {
  __typename?: 'FooterFooterInformationResourcesBlock';
  sys: ResourceSys;
};

export type FooterFooterInformationResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterFooterInformationResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterFooterInformationResourcesInline = ResourceLink & {
  __typename?: 'FooterFooterInformationResourcesInline';
  sys: ResourceSys;
};

export type FooterFooterLinksCollection = {
  __typename?: 'FooterFooterLinksCollection';
  items: Array<Maybe<SubNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterFooterLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubNavigationItemTitleAsc = 'subNavigationItemTitle_ASC',
  SubNavigationItemTitleDesc = 'subNavigationItemTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterGroupSitesLinksCollection = {
  __typename?: 'FooterGroupSitesLinksCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterGroupSitesLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templateCollection?: Maybe<TemplateCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterLinkingCollectionsTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsTemplateCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FooterLinkingCollectionsTemplateCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterOrder {
  FooterTypeAsc = 'footerType_ASC',
  FooterTypeDesc = 'footerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterSocialLinksCollection = {
  __typename?: 'FooterSocialLinksCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterSocialLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type Form = Entry & _Node & {
  __typename?: 'Form';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<FormDescription>;
  fieldsCollection?: Maybe<FormFieldsCollection>;
  formId?: Maybe<Scalars['String']['output']>;
  formType?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormLinkingCollections>;
  submitButton?: Maybe<Link>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormFieldsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormFieldsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFieldFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormFormIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormFormTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormSubmitButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/form) */
export type FormTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  items: Array<Maybe<Form>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormDescription = {
  __typename?: 'FormDescription';
  json: Scalars['JSON']['output'];
  links: FormDescriptionLinks;
};

export type FormDescriptionAssets = {
  __typename?: 'FormDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormDescriptionEntries = {
  __typename?: 'FormDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormDescriptionLinks = {
  __typename?: 'FormDescriptionLinks';
  assets: FormDescriptionAssets;
  entries: FormDescriptionEntries;
  resources: FormDescriptionResources;
};

export type FormDescriptionResources = {
  __typename?: 'FormDescriptionResources';
  block: Array<FormDescriptionResourcesBlock>;
  hyperlink: Array<FormDescriptionResourcesHyperlink>;
  inline: Array<FormDescriptionResourcesInline>;
};

export type FormDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'FormDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type FormDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'FormDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type FormDescriptionResourcesInline = ResourceLink & {
  __typename?: 'FormDescriptionResourcesInline';
  sys: ResourceSys;
};

/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormField = Entry & _Node & {
  __typename?: 'FormField';
  _id: Scalars['ID']['output'];
  bottomText?: Maybe<Scalars['String']['output']>;
  conditionalRule?: Maybe<Scalars['JSON']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fieldType?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormFieldLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<OptionSet>;
  placeholder?: Maybe<Scalars['String']['output']>;
  popUp?: Maybe<FormFieldPopUp>;
  required?: Maybe<Scalars['Boolean']['output']>;
  subLabel?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  validationRule?: Maybe<Scalars['JSON']['output']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldBottomTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldConditionalRuleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldFieldTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldOptionsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OptionSetFilter>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldPlaceholderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldPopUpArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldSubLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Field content type for form fields [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formField) */
export type FormFieldValidationRuleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormFieldCollection = {
  __typename?: 'FormFieldCollection';
  items: Array<Maybe<FormField>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormFieldFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormFieldFilter>>>;
  bottomText?: InputMaybe<Scalars['String']['input']>;
  bottomText_contains?: InputMaybe<Scalars['String']['input']>;
  bottomText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomText_not?: InputMaybe<Scalars['String']['input']>;
  bottomText_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  conditionalRule_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fieldType?: InputMaybe<Scalars['String']['input']>;
  fieldType_contains?: InputMaybe<Scalars['String']['input']>;
  fieldType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fieldType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldType_not?: InputMaybe<Scalars['String']['input']>;
  fieldType_not_contains?: InputMaybe<Scalars['String']['input']>;
  fieldType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options?: InputMaybe<CfOptionSetNestedFilter>;
  options_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeholder_not?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popUp_contains?: InputMaybe<Scalars['String']['input']>;
  popUp_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popUp_not_contains?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  required_exists?: InputMaybe<Scalars['Boolean']['input']>;
  required_not?: InputMaybe<Scalars['Boolean']['input']>;
  subLabel?: InputMaybe<Scalars['String']['input']>;
  subLabel_contains?: InputMaybe<Scalars['String']['input']>;
  subLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subLabel_not?: InputMaybe<Scalars['String']['input']>;
  subLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  subLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  validationRule_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormFieldLinkingCollections = {
  __typename?: 'FormFieldLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type FormFieldLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormFieldLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormFieldLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FormFieldLinkingCollectionsFormCollectionOrder {
  FormIdAsc = 'formId_ASC',
  FormIdDesc = 'formId_DESC',
  FormTypeAsc = 'formType_ASC',
  FormTypeDesc = 'formType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FormFieldOrder {
  BottomTextAsc = 'bottomText_ASC',
  BottomTextDesc = 'bottomText_DESC',
  FieldTypeAsc = 'fieldType_ASC',
  FieldTypeDesc = 'fieldType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SubLabelAsc = 'subLabel_ASC',
  SubLabelDesc = 'subLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FormFieldPopUp = {
  __typename?: 'FormFieldPopUp';
  json: Scalars['JSON']['output'];
  links: FormFieldPopUpLinks;
};

export type FormFieldPopUpAssets = {
  __typename?: 'FormFieldPopUpAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormFieldPopUpEntries = {
  __typename?: 'FormFieldPopUpEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormFieldPopUpLinks = {
  __typename?: 'FormFieldPopUpLinks';
  assets: FormFieldPopUpAssets;
  entries: FormFieldPopUpEntries;
  resources: FormFieldPopUpResources;
};

export type FormFieldPopUpResources = {
  __typename?: 'FormFieldPopUpResources';
  block: Array<FormFieldPopUpResourcesBlock>;
  hyperlink: Array<FormFieldPopUpResourcesHyperlink>;
  inline: Array<FormFieldPopUpResourcesInline>;
};

export type FormFieldPopUpResourcesBlock = ResourceLink & {
  __typename?: 'FormFieldPopUpResourcesBlock';
  sys: ResourceSys;
};

export type FormFieldPopUpResourcesHyperlink = ResourceLink & {
  __typename?: 'FormFieldPopUpResourcesHyperlink';
  sys: ResourceSys;
};

export type FormFieldPopUpResourcesInline = ResourceLink & {
  __typename?: 'FormFieldPopUpResourcesInline';
  sys: ResourceSys;
};

export type FormFieldsCollection = {
  __typename?: 'FormFieldsCollection';
  items: Array<Maybe<FormField>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FormFieldsCollectionOrder {
  BottomTextAsc = 'bottomText_ASC',
  BottomTextDesc = 'bottomText_DESC',
  FieldTypeAsc = 'fieldType_ASC',
  FieldTypeDesc = 'fieldType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SubLabelAsc = 'subLabel_ASC',
  SubLabelDesc = 'subLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FormFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CfFormFieldNestedFilter>;
  fieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
  formId_contains?: InputMaybe<Scalars['String']['input']>;
  formId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formId_not?: InputMaybe<Scalars['String']['input']>;
  formId_not_contains?: InputMaybe<Scalars['String']['input']>;
  formId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formType?: InputMaybe<Scalars['String']['input']>;
  formType_contains?: InputMaybe<Scalars['String']['input']>;
  formType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formType_not?: InputMaybe<Scalars['String']['input']>;
  formType_not_contains?: InputMaybe<Scalars['String']['input']>;
  formType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButton?: InputMaybe<CfLinkNestedFilter>;
  submitButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormLinkingCollections = {
  __typename?: 'FormLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formTabCollection?: Maybe<FormTabCollection>;
  formWrapperCollection?: Maybe<FormWrapperCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FormLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormLinkingCollectionsFormTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsFormTabCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormLinkingCollectionsFormWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsFormWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FormLinkingCollectionsFormTabCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsFormWrapperCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormOrder {
  FormIdAsc = 'formId_ASC',
  FormIdDesc = 'formId_DESC',
  FormTypeAsc = 'formType_ASC',
  FormTypeDesc = 'formType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formTab) */
export type FormTab = Entry & _Node & {
  __typename?: 'FormTab';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  form?: Maybe<Form>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormTabLinkingCollections>;
  sys: Sys;
  tabLabel?: Maybe<FormTabTabLabel>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formTab) */
export type FormTabFormArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formTab) */
export type FormTabInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formTab) */
export type FormTabLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formTab) */
export type FormTabTabLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormTabCollection = {
  __typename?: 'FormTabCollection';
  items: Array<Maybe<FormTab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormTabFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormTabFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormTabFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  form?: InputMaybe<CfFormNestedFilter>;
  form_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabLabel_contains?: InputMaybe<Scalars['String']['input']>;
  tabLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type FormTabLinkingCollections = {
  __typename?: 'FormTabLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tabbedFormContainerCollection?: Maybe<TabbedFormContainerCollection>;
};


export type FormTabLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormTabLinkingCollectionsTabbedFormContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormTabLinkingCollectionsTabbedFormContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FormTabLinkingCollectionsTabbedFormContainerCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormTabOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FormTabTabLabel = {
  __typename?: 'FormTabTabLabel';
  json: Scalars['JSON']['output'];
  links: FormTabTabLabelLinks;
};

export type FormTabTabLabelAssets = {
  __typename?: 'FormTabTabLabelAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormTabTabLabelEntries = {
  __typename?: 'FormTabTabLabelEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormTabTabLabelLinks = {
  __typename?: 'FormTabTabLabelLinks';
  assets: FormTabTabLabelAssets;
  entries: FormTabTabLabelEntries;
  resources: FormTabTabLabelResources;
};

export type FormTabTabLabelResources = {
  __typename?: 'FormTabTabLabelResources';
  block: Array<FormTabTabLabelResourcesBlock>;
  hyperlink: Array<FormTabTabLabelResourcesHyperlink>;
  inline: Array<FormTabTabLabelResourcesInline>;
};

export type FormTabTabLabelResourcesBlock = ResourceLink & {
  __typename?: 'FormTabTabLabelResourcesBlock';
  sys: ResourceSys;
};

export type FormTabTabLabelResourcesHyperlink = ResourceLink & {
  __typename?: 'FormTabTabLabelResourcesHyperlink';
  sys: ResourceSys;
};

export type FormTabTabLabelResourcesInline = ResourceLink & {
  __typename?: 'FormTabTabLabelResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formWrapper) */
export type FormWrapper = Entry & _Node & {
  __typename?: 'FormWrapper';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  formsCollection?: Maybe<FormWrapperFormsCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormWrapperLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formWrapper) */
export type FormWrapperFormsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormWrapperFormsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formWrapper) */
export type FormWrapperInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/formWrapper) */
export type FormWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormWrapperCollection = {
  __typename?: 'FormWrapperCollection';
  items: Array<Maybe<FormWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormWrapperFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  forms?: InputMaybe<CfFormNestedFilter>;
  formsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FormWrapperFormsCollection = {
  __typename?: 'FormWrapperFormsCollection';
  items: Array<Maybe<Form>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FormWrapperFormsCollectionOrder {
  FormIdAsc = 'formId_ASC',
  FormIdDesc = 'formId_DESC',
  FormTypeAsc = 'formType_ASC',
  FormTypeDesc = 'formType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FormWrapperLinkingCollections = {
  __typename?: 'FormWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FormWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormWrapperLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormWrapperLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FormWrapperLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormWrapperOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Hamburger Menu Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/hamburgerMenu) */
export type HamburgerMenu = Entry & _Node & {
  __typename?: 'HamburgerMenu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HamburgerMenuLinkingCollections>;
  menuItemsCollection?: Maybe<HamburgerMenuMenuItemsCollection>;
  menuTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Hamburger Menu Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/hamburgerMenu) */
export type HamburgerMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Hamburger Menu Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/hamburgerMenu) */
export type HamburgerMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Hamburger Menu Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/hamburgerMenu) */
export type HamburgerMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HamburgerMenuMenuItemsFilter>;
};


/** Hamburger Menu Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/hamburgerMenu) */
export type HamburgerMenuMenuTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HamburgerMenuCollection = {
  __typename?: 'HamburgerMenuCollection';
  items: Array<Maybe<HamburgerMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HamburgerMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<HamburgerMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HamburgerMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems?: InputMaybe<CfmenuItemsMultiTypeNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuTitle?: InputMaybe<Scalars['String']['input']>;
  menuTitle_contains?: InputMaybe<Scalars['String']['input']>;
  menuTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuTitle_not?: InputMaybe<Scalars['String']['input']>;
  menuTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  menuTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HamburgerMenuLinkingCollections = {
  __typename?: 'HamburgerMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
};


export type HamburgerMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HamburgerMenuLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HamburgerMenuLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HamburgerMenuLinkingCollectionsHeaderCollectionOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HamburgerMenuMenuItemsCollection = {
  __typename?: 'HamburgerMenuMenuItemsCollection';
  items: Array<Maybe<HamburgerMenuMenuItemsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HamburgerMenuMenuItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<HamburgerMenuMenuItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HamburgerMenuMenuItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HamburgerMenuMenuItemsItem = Link | SubNavigationItem;

export enum HamburgerMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MenuTitleAsc = 'menuTitle_ASC',
  MenuTitleDesc = 'menuTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type Header = Entry & _Node & {
  __typename?: 'Header';
  _id: Scalars['ID']['output'];
  buttonCollection?: Maybe<HeaderButtonCollection>;
  contentfulMetadata: ContentfulMetadata;
  hamburgerMenu?: Maybe<HamburgerMenu>;
  headerType?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  logo?: Maybe<Asset>;
  navigationItemsCollection?: Maybe<HeaderNavigationItemsCollection>;
  sys: Sys;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeaderButtonFilter>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderHamburgerMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HamburgerMenuFilter>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderHeaderTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Header of a page [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/header) */
export type HeaderNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationItemsFilter>;
};

export type HeaderButtonCollection = {
  __typename?: 'HeaderButtonCollection';
  items: Array<Maybe<HeaderButtonItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderButtonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HeaderButtonItem = Button | ButtonWithLinks | Link;

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  button?: InputMaybe<CfbuttonMultiTypeNestedFilter>;
  buttonCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hamburgerMenu?: InputMaybe<CfHamburgerMenuNestedFilter>;
  hamburgerMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerType?: InputMaybe<Scalars['String']['input']>;
  headerType_contains?: InputMaybe<Scalars['String']['input']>;
  headerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headerType_not?: InputMaybe<Scalars['String']['input']>;
  headerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  headerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationItems?: InputMaybe<CfNavigationItemsNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templateCollection?: Maybe<TemplateCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HeaderLinkingCollectionsTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderLinkingCollectionsTemplateCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HeaderLinkingCollectionsTemplateCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeaderNavigationItemsCollection = {
  __typename?: 'HeaderNavigationItemsCollection';
  items: Array<Maybe<NavigationItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeaderNavigationItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NavigationLinkAsc = 'navigationLink_ASC',
  NavigationLinkDesc = 'navigationLink_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeaderOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type Journey = Entry & _Node & {
  __typename?: 'Journey';
  _id: Scalars['ID']['output'];
  button?: Maybe<Link>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  lifeCoverLabel?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<JourneyLinkingCollections>;
  premiumLabel?: Maybe<Scalars['String']['output']>;
  steps?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyLifeCoverLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyPremiumLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyStepsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Journey Component for Form [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/journey) */
export type JourneyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JourneyCollection = {
  __typename?: 'JourneyCollection';
  items: Array<Maybe<Journey>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type JourneyFilter = {
  AND?: InputMaybe<Array<InputMaybe<JourneyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JourneyFilter>>>;
  button?: InputMaybe<CfLinkNestedFilter>;
  button_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lifeCoverLabel?: InputMaybe<Scalars['String']['input']>;
  lifeCoverLabel_contains?: InputMaybe<Scalars['String']['input']>;
  lifeCoverLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lifeCoverLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lifeCoverLabel_not?: InputMaybe<Scalars['String']['input']>;
  lifeCoverLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  lifeCoverLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  premiumLabel?: InputMaybe<Scalars['String']['input']>;
  premiumLabel_contains?: InputMaybe<Scalars['String']['input']>;
  premiumLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  premiumLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  premiumLabel_not?: InputMaybe<Scalars['String']['input']>;
  premiumLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  premiumLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  steps_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  steps_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  steps_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  steps_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JourneyLinkingCollections = {
  __typename?: 'JourneyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type JourneyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type JourneyLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<JourneyLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum JourneyLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum JourneyOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LifeCoverLabelAsc = 'lifeCoverLabel_ASC',
  LifeCoverLabelDesc = 'lifeCoverLabel_DESC',
  PremiumLabelAsc = 'premiumLabel_ASC',
  PremiumLabelDesc = 'premiumLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type Link = Entry & _Node & {
  __typename?: 'Link';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkHeading?: Maybe<Scalars['String']['output']>;
  linkSubHeading?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LinkLinkingCollections>;
  pageLink?: Maybe<Page>;
  sys: Sys;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkLinkHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkLinkSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkLinkTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkLinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content Type for Link [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/link) */
export type LinkPageLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHeading?: InputMaybe<Scalars['String']['input']>;
  linkHeading_contains?: InputMaybe<Scalars['String']['input']>;
  linkHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHeading_not?: InputMaybe<Scalars['String']['input']>;
  linkHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkSubHeading?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_contains?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkSubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkSubHeading_not?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkType?: InputMaybe<Scalars['String']['input']>;
  linkType_contains?: InputMaybe<Scalars['String']['input']>;
  linkType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkType_not?: InputMaybe<Scalars['String']['input']>;
  linkType_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkUrl_not?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLink?: InputMaybe<CfPageNestedFilter>;
  pageLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections';
  buttonWithLinksCollection?: Maybe<ButtonWithLinksCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  formCollection?: Maybe<FormCollection>;
  hamburgerMenuCollection?: Maybe<HamburgerMenuCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  journeyCollection?: Maybe<JourneyCollection>;
  pageCollection?: Maybe<PageCollection>;
  subNavigationItemCollection?: Maybe<SubNavigationItemCollection>;
};


export type LinkLinkingCollectionsButtonWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsButtonWithLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsHamburgerMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsHamburgerMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsJourneyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsJourneyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsSubNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsSubNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LinkLinkingCollectionsButtonWithLinksCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsFooterCollectionOrder {
  FooterTypeAsc = 'footerType_ASC',
  FooterTypeDesc = 'footerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsFormCollectionOrder {
  FormIdAsc = 'formId_ASC',
  FormIdDesc = 'formId_DESC',
  FormTypeAsc = 'formType_ASC',
  FormTypeDesc = 'formType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkLinkingCollectionsHamburgerMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MenuTitleAsc = 'menuTitle_ASC',
  MenuTitleDesc = 'menuTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsHeaderCollectionOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsJourneyCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LifeCoverLabelAsc = 'lifeCoverLabel_ASC',
  LifeCoverLabelDesc = 'lifeCoverLabel_DESC',
  PremiumLabelAsc = 'premiumLabel_ASC',
  PremiumLabelDesc = 'premiumLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsSubNavigationItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubNavigationItemTitleAsc = 'subNavigationItemTitle_ASC',
  SubNavigationItemTitleDesc = 'subNavigationItemTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItems = Entry & _Node & {
  __typename?: 'NavigationItems';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationItemsLinkingCollections>;
  navigationLink?: Maybe<Scalars['String']['output']>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  subNavigationMenuCollection?: Maybe<NavigationItemsSubNavigationMenuCollection>;
  sys: Sys;
};


/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItemsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItemsNavigationLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItemsNavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation Item for the Header [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/navigationItems) */
export type NavigationItemsSubNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemsSubNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SubNavigationItemFilter>;
};

export type NavigationItemsCollection = {
  __typename?: 'NavigationItemsCollection';
  items: Array<Maybe<NavigationItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLink?: InputMaybe<Scalars['String']['input']>;
  navigationLink_contains?: InputMaybe<Scalars['String']['input']>;
  navigationLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLink_not?: InputMaybe<Scalars['String']['input']>;
  navigationLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationTitle?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationTitle_not?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavigationMenu?: InputMaybe<CfSubNavigationItemNestedFilter>;
  subNavigationMenuCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationItemsLinkingCollections = {
  __typename?: 'NavigationItemsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
};


export type NavigationItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationItemsLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemsLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum NavigationItemsLinkingCollectionsHeaderCollectionOrder {
  HeaderTypeAsc = 'headerType_ASC',
  HeaderTypeDesc = 'headerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationItemsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NavigationLinkAsc = 'navigationLink_ASC',
  NavigationLinkDesc = 'navigationLink_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationItemsSubNavigationMenuCollection = {
  __typename?: 'NavigationItemsSubNavigationMenuCollection';
  items: Array<Maybe<SubNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationItemsSubNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubNavigationItemTitleAsc = 'subNavigationItemTitle_ASC',
  SubNavigationItemTitleDesc = 'subNavigationItemTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/optionSet) */
export type OptionSet = Entry & _Node & {
  __typename?: 'OptionSet';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  linkedFrom?: Maybe<OptionSetLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/optionSet) */
export type OptionSetInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/optionSet) */
export type OptionSetItemsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/optionSet) */
export type OptionSetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OptionSetCollection = {
  __typename?: 'OptionSetCollection';
  items: Array<Maybe<OptionSet>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OptionSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<OptionSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OptionSetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type OptionSetLinkingCollections = {
  __typename?: 'OptionSetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formFieldCollection?: Maybe<FormFieldCollection>;
};


export type OptionSetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OptionSetLinkingCollectionsFormFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OptionSetLinkingCollectionsFormFieldCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum OptionSetLinkingCollectionsFormFieldCollectionOrder {
  BottomTextAsc = 'bottomText_ASC',
  BottomTextDesc = 'bottomText_DESC',
  FieldTypeAsc = 'fieldType_ASC',
  FieldTypeDesc = 'fieldType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SubLabelAsc = 'subLabel_ASC',
  SubLabelDesc = 'subLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum OptionSetOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  changeFrequency?: Maybe<Scalars['String']['output']>;
  contentCollection?: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageLayout?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  seo?: Maybe<Entry>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  template?: Maybe<Template>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageChangeFrequencyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageContentFilter>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PagePageLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PagePriorityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** AMLI Page Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/page) */
export type PageTemplateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TemplateFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentCollection = {
  __typename?: 'PageContentCollection';
  items: Array<Maybe<PageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageContentItem = Accordion | Banner | Button | Carousel | ComponentTextBlock | Form | FormWrapper | Journey | Link | TabbedFormContainer | VideoSection;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  changeFrequency?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_contains?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_exists?: InputMaybe<Scalars['Boolean']['input']>;
  changeFrequency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  changeFrequency_not?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_not_contains?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLayout?: InputMaybe<Scalars['String']['input']>;
  pageLayout_contains?: InputMaybe<Scalars['String']['input']>;
  pageLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageLayout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLayout_not?: InputMaybe<Scalars['String']['input']>;
  pageLayout_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageLayout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  priority_exists?: InputMaybe<Scalars['Boolean']['input']>;
  priority_gt?: InputMaybe<Scalars['Float']['input']>;
  priority_gte?: InputMaybe<Scalars['Float']['input']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  priority_lt?: InputMaybe<Scalars['Float']['input']>;
  priority_lte?: InputMaybe<Scalars['Float']['input']>;
  priority_not?: InputMaybe<Scalars['Float']['input']>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  template?: InputMaybe<CfTemplateNestedFilter>;
  template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  linkCollection?: Maybe<LinkCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageLinkingCollectionsLinkCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  accordion?: Maybe<Accordion>;
  accordionCollection?: Maybe<AccordionCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  banner?: Maybe<Banner>;
  bannerCollection?: Maybe<BannerCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  buttonWithLinks?: Maybe<ButtonWithLinks>;
  buttonWithLinksCollection?: Maybe<ButtonWithLinksCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  carousel?: Maybe<Carousel>;
  carouselCollection?: Maybe<CarouselCollection>;
  componentTextBlock?: Maybe<ComponentTextBlock>;
  componentTextBlockCollection?: Maybe<ComponentTextBlockCollection>;
  disclaimer?: Maybe<Disclaimer>;
  disclaimerCollection?: Maybe<DisclaimerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  form?: Maybe<Form>;
  formCollection?: Maybe<FormCollection>;
  formField?: Maybe<FormField>;
  formFieldCollection?: Maybe<FormFieldCollection>;
  formTab?: Maybe<FormTab>;
  formTabCollection?: Maybe<FormTabCollection>;
  formWrapper?: Maybe<FormWrapper>;
  formWrapperCollection?: Maybe<FormWrapperCollection>;
  hamburgerMenu?: Maybe<HamburgerMenu>;
  hamburgerMenuCollection?: Maybe<HamburgerMenuCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  journey?: Maybe<Journey>;
  journeyCollection?: Maybe<JourneyCollection>;
  link?: Maybe<Link>;
  linkCollection?: Maybe<LinkCollection>;
  navigationItems?: Maybe<NavigationItems>;
  navigationItemsCollection?: Maybe<NavigationItemsCollection>;
  optionSet?: Maybe<OptionSet>;
  optionSetCollection?: Maybe<OptionSetCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  question?: Maybe<Question>;
  questionCollection?: Maybe<QuestionCollection>;
  subNavigationItem?: Maybe<SubNavigationItem>;
  subNavigationItemCollection?: Maybe<SubNavigationItemCollection>;
  tabbedFormContainer?: Maybe<TabbedFormContainer>;
  tabbedFormContainerCollection?: Maybe<TabbedFormContainerCollection>;
  template?: Maybe<Template>;
  templateCollection?: Maybe<TemplateCollection>;
  videoSection?: Maybe<VideoSection>;
  videoSectionCollection?: Maybe<VideoSectionCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AccordionFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BannerFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryButtonWithLinksArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryButtonWithLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonWithLinksOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ButtonWithLinksFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CarouselFilter>;
};


export type QueryComponentTextBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


export type QueryDisclaimerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDisclaimerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DisclaimerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DisclaimerFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFormArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


export type QueryFormFieldArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFieldFilter>;
};


export type QueryFormTabArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormTabOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormTabFilter>;
};


export type QueryFormWrapperArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormWrapperFilter>;
};


export type QueryHamburgerMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHamburgerMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HamburgerMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HamburgerMenuFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryJourneyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryJourneyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<JourneyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<JourneyFilter>;
};


export type QueryLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


export type QueryNavigationItemsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationItemsFilter>;
};


export type QueryOptionSetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOptionSetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OptionSetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OptionSetFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryQuestionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<QuestionFilter>;
};


export type QuerySubNavigationItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SubNavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SubNavigationItemFilter>;
};


export type QueryTabbedFormContainerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTabbedFormContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabbedFormContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TabbedFormContainerFilter>;
};


export type QueryTemplateArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TemplateOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TemplateFilter>;
};


export type QueryVideoSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVideoSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VideoSectionFilter>;
};

/** Question Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/question) */
export type Question = Entry & _Node & {
  __typename?: 'Question';
  _id: Scalars['ID']['output'];
  answerText?: Maybe<QuestionAnswerText>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuestionLinkingCollections>;
  questionText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Question Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/question) */
export type QuestionAnswerTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Question Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/question) */
export type QuestionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Question Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/question) */
export type QuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Question Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/question) */
export type QuestionQuestionTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionAnswerText = {
  __typename?: 'QuestionAnswerText';
  json: Scalars['JSON']['output'];
  links: QuestionAnswerTextLinks;
};

export type QuestionAnswerTextAssets = {
  __typename?: 'QuestionAnswerTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type QuestionAnswerTextEntries = {
  __typename?: 'QuestionAnswerTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type QuestionAnswerTextLinks = {
  __typename?: 'QuestionAnswerTextLinks';
  assets: QuestionAnswerTextAssets;
  entries: QuestionAnswerTextEntries;
  resources: QuestionAnswerTextResources;
};

export type QuestionAnswerTextResources = {
  __typename?: 'QuestionAnswerTextResources';
  block: Array<QuestionAnswerTextResourcesBlock>;
  hyperlink: Array<QuestionAnswerTextResourcesHyperlink>;
  inline: Array<QuestionAnswerTextResourcesInline>;
};

export type QuestionAnswerTextResourcesBlock = ResourceLink & {
  __typename?: 'QuestionAnswerTextResourcesBlock';
  sys: ResourceSys;
};

export type QuestionAnswerTextResourcesHyperlink = ResourceLink & {
  __typename?: 'QuestionAnswerTextResourcesHyperlink';
  sys: ResourceSys;
};

export type QuestionAnswerTextResourcesInline = ResourceLink & {
  __typename?: 'QuestionAnswerTextResourcesInline';
  sys: ResourceSys;
};

export type QuestionCollection = {
  __typename?: 'QuestionCollection';
  items: Array<Maybe<Question>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuestionFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  answerText_contains?: InputMaybe<Scalars['String']['input']>;
  answerText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  answerText_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  questionText?: InputMaybe<Scalars['String']['input']>;
  questionText_contains?: InputMaybe<Scalars['String']['input']>;
  questionText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  questionText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  questionText_not?: InputMaybe<Scalars['String']['input']>;
  questionText_not_contains?: InputMaybe<Scalars['String']['input']>;
  questionText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type QuestionLinkingCollections = {
  __typename?: 'QuestionLinkingCollections';
  accordionCollection?: Maybe<AccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QuestionLinkingCollectionsAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuestionLinkingCollectionsAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum QuestionLinkingCollectionsAccordionCollectionOrder {
  BooleanFieldAsc = 'booleanField_ASC',
  BooleanFieldDesc = 'booleanField_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NumberFieldAsc = 'numberField_ASC',
  NumberFieldDesc = 'numberField_DESC',
  RadioAsc = 'radio_ASC',
  RadioDesc = 'radio_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuestionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuestionTextAsc = 'questionText_ASC',
  QuestionTextDesc = 'questionText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItem = Entry & _Node & {
  __typename?: 'SubNavigationItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SubNavigationItemLinkingCollections>;
  mainLink?: Maybe<Link>;
  secondaryLinksCollection?: Maybe<SubNavigationItemSecondaryLinksCollection>;
  subNavigationItemTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItemMainLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItemSecondaryLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SubNavigationItemSecondaryLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** Sub Navigation Items for Home Page Header Navigation Items [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/subNavigationItem) */
export type SubNavigationItemSubNavigationItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubNavigationItemCollection = {
  __typename?: 'SubNavigationItemCollection';
  items: Array<Maybe<SubNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SubNavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SubNavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SubNavigationItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainLink?: InputMaybe<CfLinkNestedFilter>;
  mainLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryLinks?: InputMaybe<CfLinkNestedFilter>;
  secondaryLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subNavigationItemTitle?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_contains?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subNavigationItemTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavigationItemTitle_not?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SubNavigationItemLinkingCollections = {
  __typename?: 'SubNavigationItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  hamburgerMenuCollection?: Maybe<HamburgerMenuCollection>;
  navigationItemsCollection?: Maybe<NavigationItemsCollection>;
};


export type SubNavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubNavigationItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SubNavigationItemLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubNavigationItemLinkingCollectionsHamburgerMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SubNavigationItemLinkingCollectionsHamburgerMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubNavigationItemLinkingCollectionsNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SubNavigationItemLinkingCollectionsNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SubNavigationItemLinkingCollectionsFooterCollectionOrder {
  FooterTypeAsc = 'footerType_ASC',
  FooterTypeDesc = 'footerType_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SubNavigationItemLinkingCollectionsHamburgerMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MenuTitleAsc = 'menuTitle_ASC',
  MenuTitleDesc = 'menuTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SubNavigationItemLinkingCollectionsNavigationItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NavigationLinkAsc = 'navigationLink_ASC',
  NavigationLinkDesc = 'navigationLink_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SubNavigationItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubNavigationItemTitleAsc = 'subNavigationItemTitle_ASC',
  SubNavigationItemTitleDesc = 'subNavigationItemTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SubNavigationItemSecondaryLinksCollection = {
  __typename?: 'SubNavigationItemSecondaryLinksCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SubNavigationItemSecondaryLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHeadingAsc = 'linkHeading_ASC',
  LinkHeadingDesc = 'linkHeading_DESC',
  LinkSubHeadingAsc = 'linkSubHeading_ASC',
  LinkSubHeadingDesc = 'linkSubHeading_DESC',
  LinkTypeAsc = 'linkType_ASC',
  LinkTypeDesc = 'linkType_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/tabbedFormContainer) */
export type TabbedFormContainer = Entry & _Node & {
  __typename?: 'TabbedFormContainer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  formImage?: Maybe<Asset>;
  linkedFrom?: Maybe<TabbedFormContainerLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tabsCollection?: Maybe<TabbedFormContainerTabsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/tabbedFormContainer) */
export type TabbedFormContainerFormImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/tabbedFormContainer) */
export type TabbedFormContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/tabbedFormContainer) */
export type TabbedFormContainerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/tabbedFormContainer) */
export type TabbedFormContainerTabsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabbedFormContainerTabsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormTabFilter>;
};

export type TabbedFormContainerCollection = {
  __typename?: 'TabbedFormContainerCollection';
  items: Array<Maybe<TabbedFormContainer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TabbedFormContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabbedFormContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabbedFormContainerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  formImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabs?: InputMaybe<CfFormTabNestedFilter>;
  tabsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TabbedFormContainerLinkingCollections = {
  __typename?: 'TabbedFormContainerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TabbedFormContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TabbedFormContainerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabbedFormContainerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TabbedFormContainerLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabbedFormContainerOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TabbedFormContainerTabsCollection = {
  __typename?: 'TabbedFormContainerTabsCollection';
  items: Array<Maybe<FormTab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabbedFormContainerTabsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** Page Template Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/template) */
export type Template = Entry & _Node & {
  __typename?: 'Template';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TemplateLinkingCollections>;
  sys: Sys;
};


/** Page Template Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/template) */
export type TemplateFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


/** Page Template Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/template) */
export type TemplateHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


/** Page Template Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/template) */
export type TemplateInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Page Template Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/template) */
export type TemplateLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TemplateCollection = {
  __typename?: 'TemplateCollection';
  items: Array<Maybe<Template>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TemplateFilter = {
  AND?: InputMaybe<Array<InputMaybe<TemplateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TemplateFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TemplateLinkingCollections = {
  __typename?: 'TemplateLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TemplateLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TemplateLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TemplateLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TemplateLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TemplateOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Video Section Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/videoSection) */
export type VideoSection = Entry & _Node & {
  __typename?: 'VideoSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VideoSectionLinkingCollections>;
  sys: Sys;
  videoTitle?: Maybe<Scalars['String']['output']>;
  youtubeId?: Maybe<Scalars['String']['output']>;
};


/** Video Section Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/videoSection) */
export type VideoSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Video Section Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/videoSection) */
export type VideoSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Video Section Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/videoSection) */
export type VideoSectionVideoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Video Section Content Type [See type definition](https://app.contentful.com/spaces/t6kvufdm8fgq/content_types/videoSection) */
export type VideoSectionYoutubeIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoSectionCollection = {
  __typename?: 'VideoSectionCollection';
  items: Array<Maybe<VideoSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  videoTitle?: InputMaybe<Scalars['String']['input']>;
  videoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoTitle_not?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  youtubeId?: InputMaybe<Scalars['String']['input']>;
  youtubeId_contains?: InputMaybe<Scalars['String']['input']>;
  youtubeId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  youtubeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  youtubeId_not?: InputMaybe<Scalars['String']['input']>;
  youtubeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  youtubeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoSectionLinkingCollections = {
  __typename?: 'VideoSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type VideoSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VideoSectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoSectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VideoSectionLinkingCollectionsPageCollectionOrder {
  ChangeFrequencyAsc = 'changeFrequency_ASC',
  ChangeFrequencyDesc = 'changeFrequency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageLayoutAsc = 'pageLayout_ASC',
  PageLayoutDesc = 'pageLayout_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoSectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VideoTitleAsc = 'videoTitle_ASC',
  VideoTitleDesc = 'videoTitle_DESC',
  YoutubeIdAsc = 'youtubeId_ASC',
  YoutubeIdDesc = 'youtubeId_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfButtonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCardNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCardNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCardNestedFilter>>>;
  cardContent_contains?: InputMaybe<Scalars['String']['input']>;
  cardContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardLink?: InputMaybe<Scalars['String']['input']>;
  cardLink_contains?: InputMaybe<Scalars['String']['input']>;
  cardLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardLink_not?: InputMaybe<Scalars['String']['input']>;
  cardLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardTitle?: InputMaybe<Scalars['String']['input']>;
  cardTitle_contains?: InputMaybe<Scalars['String']['input']>;
  cardTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cardTitle_not?: InputMaybe<Scalars['String']['input']>;
  cardTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preTitle_contains?: InputMaybe<Scalars['String']['input']>;
  preTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  preTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentTextBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentTextBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentTextBlockNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variations?: InputMaybe<Scalars['String']['input']>;
  variations_contains?: InputMaybe<Scalars['String']['input']>;
  variations_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variations_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variations_not?: InputMaybe<Scalars['String']['input']>;
  variations_not_contains?: InputMaybe<Scalars['String']['input']>;
  variations_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfDisclaimerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDisclaimerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDisclaimerNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disclaimerSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerInformation_contains?: InputMaybe<Scalars['String']['input']>;
  footerInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  footerLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerType?: InputMaybe<Scalars['String']['input']>;
  footerType_contains?: InputMaybe<Scalars['String']['input']>;
  footerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerType_not?: InputMaybe<Scalars['String']['input']>;
  footerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  footerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupSitesLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfFormFieldNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFormFieldNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFormFieldNestedFilter>>>;
  bottomText?: InputMaybe<Scalars['String']['input']>;
  bottomText_contains?: InputMaybe<Scalars['String']['input']>;
  bottomText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bottomText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomText_not?: InputMaybe<Scalars['String']['input']>;
  bottomText_not_contains?: InputMaybe<Scalars['String']['input']>;
  bottomText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  conditionalRule_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fieldType?: InputMaybe<Scalars['String']['input']>;
  fieldType_contains?: InputMaybe<Scalars['String']['input']>;
  fieldType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fieldType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldType_not?: InputMaybe<Scalars['String']['input']>;
  fieldType_not_contains?: InputMaybe<Scalars['String']['input']>;
  fieldType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeholder_not?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popUp_contains?: InputMaybe<Scalars['String']['input']>;
  popUp_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popUp_not_contains?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  required_exists?: InputMaybe<Scalars['Boolean']['input']>;
  required_not?: InputMaybe<Scalars['Boolean']['input']>;
  subLabel?: InputMaybe<Scalars['String']['input']>;
  subLabel_contains?: InputMaybe<Scalars['String']['input']>;
  subLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subLabel_not?: InputMaybe<Scalars['String']['input']>;
  subLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  subLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  validationRule_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfFormNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFormNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFormNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  fieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
  formId_contains?: InputMaybe<Scalars['String']['input']>;
  formId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formId_not?: InputMaybe<Scalars['String']['input']>;
  formId_not_contains?: InputMaybe<Scalars['String']['input']>;
  formId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formType?: InputMaybe<Scalars['String']['input']>;
  formType_contains?: InputMaybe<Scalars['String']['input']>;
  formType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formType_not?: InputMaybe<Scalars['String']['input']>;
  formType_not_contains?: InputMaybe<Scalars['String']['input']>;
  formType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFormTabNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFormTabNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFormTabNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  form_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabLabel_contains?: InputMaybe<Scalars['String']['input']>;
  tabLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tabLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type CfHamburgerMenuNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHamburgerMenuNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHamburgerMenuNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuTitle?: InputMaybe<Scalars['String']['input']>;
  menuTitle_contains?: InputMaybe<Scalars['String']['input']>;
  menuTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuTitle_not?: InputMaybe<Scalars['String']['input']>;
  menuTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  menuTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  buttonCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hamburgerMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerType?: InputMaybe<Scalars['String']['input']>;
  headerType_contains?: InputMaybe<Scalars['String']['input']>;
  headerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headerType_not?: InputMaybe<Scalars['String']['input']>;
  headerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  headerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHeading?: InputMaybe<Scalars['String']['input']>;
  linkHeading_contains?: InputMaybe<Scalars['String']['input']>;
  linkHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHeading_not?: InputMaybe<Scalars['String']['input']>;
  linkHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkSubHeading?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_contains?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkSubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkSubHeading_not?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkSubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkType?: InputMaybe<Scalars['String']['input']>;
  linkType_contains?: InputMaybe<Scalars['String']['input']>;
  linkType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkType_not?: InputMaybe<Scalars['String']['input']>;
  linkType_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkUrl_not?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationItemsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLink?: InputMaybe<Scalars['String']['input']>;
  navigationLink_contains?: InputMaybe<Scalars['String']['input']>;
  navigationLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLink_not?: InputMaybe<Scalars['String']['input']>;
  navigationLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationTitle?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationTitle_not?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavigationMenuCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfOptionSetNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfOptionSetNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfOptionSetNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  changeFrequency?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_contains?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_exists?: InputMaybe<Scalars['Boolean']['input']>;
  changeFrequency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  changeFrequency_not?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_not_contains?: InputMaybe<Scalars['String']['input']>;
  changeFrequency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLayout?: InputMaybe<Scalars['String']['input']>;
  pageLayout_contains?: InputMaybe<Scalars['String']['input']>;
  pageLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageLayout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageLayout_not?: InputMaybe<Scalars['String']['input']>;
  pageLayout_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageLayout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  priority_exists?: InputMaybe<Scalars['Boolean']['input']>;
  priority_gt?: InputMaybe<Scalars['Float']['input']>;
  priority_gte?: InputMaybe<Scalars['Float']['input']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  priority_lt?: InputMaybe<Scalars['Float']['input']>;
  priority_lte?: InputMaybe<Scalars['Float']['input']>;
  priority_not?: InputMaybe<Scalars['Float']['input']>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfQuestionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuestionNestedFilter>>>;
  answerText_contains?: InputMaybe<Scalars['String']['input']>;
  answerText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  answerText_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  questionText?: InputMaybe<Scalars['String']['input']>;
  questionText_contains?: InputMaybe<Scalars['String']['input']>;
  questionText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  questionText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  questionText_not?: InputMaybe<Scalars['String']['input']>;
  questionText_not_contains?: InputMaybe<Scalars['String']['input']>;
  questionText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSubNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSubNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSubNavigationItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subNavigationItemTitle?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_contains?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subNavigationItemTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavigationItemTitle_not?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subNavigationItemTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTemplateNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTemplateNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTemplateNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfbuttonMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfbuttonMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfbuttonMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfmenuItemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AccordionCollectionFieldsFragment = { __typename?: 'AccordionAccordionItemsCollection', items: Array<{ __typename: 'Question', questionText?: string | null, sys: { __typename?: 'Sys', id: string }, answerText?: { __typename?: 'QuestionAnswerText', json: any, links: { __typename?: 'QuestionAnswerTextLinks', entries: { __typename?: 'QuestionAnswerTextEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null>, inline: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'QuestionAnswerTextAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> };

export type AccordionFieldsFragment = { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string }, accordionItemsCollection?: { __typename?: 'AccordionAccordionItemsCollection', items: Array<{ __typename: 'Question', questionText?: string | null, sys: { __typename?: 'Sys', id: string }, answerText?: { __typename?: 'QuestionAnswerText', json: any, links: { __typename?: 'QuestionAnswerTextLinks', entries: { __typename?: 'QuestionAnswerTextEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null>, inline: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'QuestionAnswerTextAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type CtfAccordionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfAccordionQuery = { __typename?: 'Query', accordion?: { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string }, accordionItemsCollection?: { __typename?: 'AccordionAccordionItemsCollection', items: Array<{ __typename: 'Question', questionText?: string | null, sys: { __typename?: 'Sys', id: string }, answerText?: { __typename?: 'QuestionAnswerText', json: any, links: { __typename?: 'QuestionAnswerTextLinks', entries: { __typename?: 'QuestionAnswerTextEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null>, inline: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'QuestionAnswerTextAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfBannerQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfBannerQuery = { __typename?: 'Query', banner?: { __typename: 'Banner', bannerType?: string | null, bannerTitle?: string | null, bannerImageLink?: string | null, sys: { __typename?: 'Sys', id: string }, bannerImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, bannerTextCollection?: { __typename?: 'BannerBannerTextCollection', items: Array<{ __typename: 'ComponentTextBlock', variations?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null, policyCardsCollection?: { __typename?: 'BannerPolicyCardsCollection', items: Array<{ __typename: 'Card', cardTitle?: string | null, cardLink?: string | null, sys: { __typename?: 'Sys', id: string }, cardImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, cardContent?: { __typename?: 'CardCardContent', json: any, links: { __typename?: 'CardCardContentLinks', entries: { __typename?: 'CardCardContentEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'CardCardContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

export type CarouselFieldsFragment = { __typename: 'Carousel', carouselTitle?: string | null, carouselType?: string | null, sys: { __typename?: 'Sys', id: string }, cardsCollection?: { __typename?: 'CarouselCardsCollection', items: Array<{ __typename: 'Card', cardTitle?: string | null, sys: { __typename?: 'Sys', id: string }, cardImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, preTitle?: { __typename: 'CardPreTitle', json: any } | null, cardContent?: { __typename: 'CardCardContent', json: any, links: { __typename?: 'CardCardContentLinks', entries: { __typename?: 'CardCardContentEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null>, inline: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'CardCardContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type CardFieldsFragment = { __typename: 'Card', cardTitle?: string | null, sys: { __typename?: 'Sys', id: string }, cardImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, preTitle?: { __typename: 'CardPreTitle', json: any } | null, cardContent?: { __typename: 'CardCardContent', json: any, links: { __typename?: 'CardCardContentLinks', entries: { __typename?: 'CardCardContentEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null>, inline: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'CardCardContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfCarouselQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfCarouselQuery = { __typename?: 'Query', carousel?: { __typename: 'Carousel', carouselTitle?: string | null, carouselType?: string | null, sys: { __typename?: 'Sys', id: string }, cardsCollection?: { __typename?: 'CarouselCardsCollection', items: Array<{ __typename: 'Card', cardTitle?: string | null, sys: { __typename?: 'Sys', id: string }, cardImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, preTitle?: { __typename: 'CardPreTitle', json: any } | null, cardContent?: { __typename: 'CardCardContent', json: any, links: { __typename?: 'CardCardContentLinks', entries: { __typename?: 'CardCardContentEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null>, inline: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'CardCardContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'DisclaimerContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type FooterInformationFieldsFragment = { __typename: 'FooterFooterInformation', json: any, links: { __typename?: 'FooterFooterInformationLinks', entries: { __typename?: 'FooterFooterInformationEntries', block: Array<
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
        | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
       | null> }, assets: { __typename?: 'FooterFooterInformationAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } };

export type GroupSitesLinksCollectionFieldsFragment = { __typename?: 'FooterGroupSitesLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> };

export type SocialLinksCollectionFieldsFragment = { __typename?: 'FooterSocialLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> };

export type FooterButtonCollectionFieldsFragment = { __typename?: 'FooterButtonsCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> };

export type FooterLinksCollectionFragment = { __typename?: 'FooterFooterLinksCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> };

export type FooterFieldsFragment = { __typename: 'Footer', footerType?: string | null, sys: { __typename?: 'Sys', id: string }, footerLinksCollection?: { __typename?: 'FooterFooterLinksCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null, buttonsCollection?: { __typename?: 'FooterButtonsCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, socialLinksCollection?: { __typename?: 'FooterSocialLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, groupSitesLinksCollection?: { __typename?: 'FooterGroupSitesLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, footerInformation?: { __typename: 'FooterFooterInformation', json: any, links: { __typename?: 'FooterFooterInformationLinks', entries: { __typename?: 'FooterFooterInformationEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FooterFooterInformationAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, disclaimerSection?: { __typename: 'Disclaimer', heading?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'DisclaimerContent', json: any, links: { __typename?: 'DisclaimerContentLinks', entries: { __typename?: 'DisclaimerContentEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'DisclaimerContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type CtfFooterQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footer?: { __typename: 'Footer', footerType?: string | null, sys: { __typename?: 'Sys', id: string }, footerLinksCollection?: { __typename?: 'FooterFooterLinksCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null, buttonsCollection?: { __typename?: 'FooterButtonsCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, socialLinksCollection?: { __typename?: 'FooterSocialLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, groupSitesLinksCollection?: { __typename?: 'FooterGroupSitesLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, footerInformation?: { __typename: 'FooterFooterInformation', json: any, links: { __typename?: 'FooterFooterInformationLinks', entries: { __typename?: 'FooterFooterInformationEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'FooterFooterInformationAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, disclaimerSection?: { __typename: 'Disclaimer', heading?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'DisclaimerContent', json: any, links: { __typename?: 'DisclaimerContentLinks', entries: { __typename?: 'DisclaimerContentEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'DisclaimerContentAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null } | null };

export type FormWrapperFieldsFragment = { __typename?: 'FormWrapper', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, formsCollection?: { __typename?: 'FormWrapperFormsCollection', items: Array<{ __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null> } | null };

export type CtfFormWrapperQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfFormWrapperQuery = { __typename?: 'Query', formWrapper?: { __typename?: 'FormWrapper', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, formsCollection?: { __typename?: 'FormWrapperFormsCollection', items: Array<{ __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null> } | null } | null };

export type ExpandedFormFieldFragmentFragment = { __typename?: 'FormField', label?: string | null, subLabel?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, bottomText?: string | null, conditionalRule?: any | null, validationRule?: any | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, popUp?: { __typename?: 'FormFieldPopUp', json: any, links: { __typename?: 'FormFieldPopUpLinks', entries: { __typename?: 'FormFieldPopUpEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null>, inline: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormFieldPopUpAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null };

export type ExpandedFormFieldsFragment = { __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, subLabel?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, bottomText?: string | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, popUp?: { __typename?: 'FormFieldPopUp', json: any, links: { __typename?: 'FormFieldPopUpLinks', entries: { __typename?: 'FormFieldPopUpEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null>, inline: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'FormFieldPopUpAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type CtfFormQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfFormQuery = { __typename?: 'Query', form?: { __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, subLabel?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, bottomText?: string | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, popUp?: { __typename?: 'FormFieldPopUp', json: any, links: { __typename?: 'FormFieldPopUpLinks', entries: { __typename?: 'FormFieldPopUpEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null>, inline: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'FormFieldPopUpAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null };

export type HamburgerMenuFieldsFragment = { __typename: 'HamburgerMenu', menuTitle?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'HamburgerMenuMenuItemsCollection', items: Array<
      | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
      | { __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
     | null> } | null };

export type ButtonCollectionFieldsFragment = { __typename?: 'HeaderButtonCollection', items: Array<
    | { __typename: 'Button' }
    | { __typename: 'ButtonWithLinks', buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, buttonDropDownLinksCollection?: { __typename?: 'ButtonWithLinksButtonDropDownLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
    | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
   | null> };

export type HeaderFieldsFragment = { __typename: 'Header', headerType?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, navigationItemsCollection?: { __typename?: 'HeaderNavigationItemsCollection', items: Array<{ __typename: 'NavigationItems', navigationTitle?: string | null, navigationLink?: string | null, sys: { __typename?: 'Sys', id: string }, subNavigationMenuCollection?: { __typename?: 'NavigationItemsSubNavigationMenuCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null } | null> } | null, buttonCollection?: { __typename?: 'HeaderButtonCollection', items: Array<
      | { __typename: 'Button' }
      | { __typename: 'ButtonWithLinks', buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, buttonDropDownLinksCollection?: { __typename?: 'ButtonWithLinksButtonDropDownLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
      | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
     | null> } | null, hamburgerMenu?: { __typename: 'HamburgerMenu', menuTitle?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'HamburgerMenuMenuItemsCollection', items: Array<
        | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
        | { __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
       | null> } | null } | null };

export type CtfHeaderQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfHeaderQuery = { __typename?: 'Query', header?: { __typename: 'Header', headerType?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, navigationItemsCollection?: { __typename?: 'HeaderNavigationItemsCollection', items: Array<{ __typename: 'NavigationItems', navigationTitle?: string | null, navigationLink?: string | null, sys: { __typename?: 'Sys', id: string }, subNavigationMenuCollection?: { __typename?: 'NavigationItemsSubNavigationMenuCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null } | null> } | null, buttonCollection?: { __typename?: 'HeaderButtonCollection', items: Array<
        | { __typename: 'Button' }
        | { __typename: 'ButtonWithLinks', buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, buttonDropDownLinksCollection?: { __typename?: 'ButtonWithLinksButtonDropDownLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
        | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
       | null> } | null, hamburgerMenu?: { __typename: 'HamburgerMenu', menuTitle?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'HamburgerMenuMenuItemsCollection', items: Array<
          | { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null }
          | { __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null }
         | null> } | null } | null } | null };

export type JourneyFieldsFragment = { __typename: 'Journey', internalName?: string | null, title?: string | null, steps?: Array<string | null> | null, lifeCoverLabel?: string | null, premiumLabel?: string | null, sys: { __typename?: 'Sys', id: string }, button?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type CtfJourneyQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfJourneyQuery = { __typename?: 'Query', journey?: { __typename: 'Journey', internalName?: string | null, title?: string | null, steps?: Array<string | null> | null, lifeCoverLabel?: string | null, premiumLabel?: string | null, sys: { __typename?: 'Sys', id: string }, button?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null };

export type CtfLinkQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfLinkQuery = { __typename?: 'Query', link?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type NavigationFieldsFragment = { __typename?: 'HeaderNavigationItemsCollection', items: Array<{ __typename: 'NavigationItems', navigationTitle?: string | null, navigationLink?: string | null, sys: { __typename?: 'Sys', id: string }, subNavigationMenuCollection?: { __typename?: 'NavigationItemsSubNavigationMenuCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null } | null> };

type PageContentFields_Accordion_Fragment = { __typename: 'Accordion' };

type PageContentFields_Banner_Fragment = { __typename: 'Banner' };

type PageContentFields_Button_Fragment = { __typename: 'Button' };

type PageContentFields_Carousel_Fragment = { __typename: 'Carousel' };

type PageContentFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

type PageContentFields_Form_Fragment = { __typename: 'Form' };

type PageContentFields_FormWrapper_Fragment = { __typename: 'FormWrapper' };

type PageContentFields_Journey_Fragment = { __typename: 'Journey' };

type PageContentFields_Link_Fragment = { __typename: 'Link' };

type PageContentFields_TabbedFormContainer_Fragment = { __typename: 'TabbedFormContainer' };

type PageContentFields_VideoSection_Fragment = { __typename: 'VideoSection' };

export type PageContentFieldsFragment =
  | PageContentFields_Accordion_Fragment
  | PageContentFields_Banner_Fragment
  | PageContentFields_Button_Fragment
  | PageContentFields_Carousel_Fragment
  | PageContentFields_ComponentTextBlock_Fragment
  | PageContentFields_Form_Fragment
  | PageContentFields_FormWrapper_Fragment
  | PageContentFields_Journey_Fragment
  | PageContentFields_Link_Fragment
  | PageContentFields_TabbedFormContainer_Fragment
  | PageContentFields_VideoSection_Fragment
;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, pageLayout?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, template?: { __typename: 'Template', sys: { __typename?: 'Sys', id: string }, header?: { __typename: 'Header', sys: { __typename?: 'Sys', id: string } } | null, footer?: { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } } | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
      | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
     | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, pageLayout?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, template?: { __typename: 'Template', sys: { __typename?: 'Sys', id: string }, header?: { __typename: 'Header', sys: { __typename?: 'Sys', id: string } } | null, footer?: { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } } | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
          | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> } | null } | null> } | null };

export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
        | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
       | null> } | null } | null };

export type CtfRichTextHyperlinkQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfRichTextHyperlinkQuery = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
        | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
       | null> } | null } | null };

export type FormFieldFieldsFragment = { __typename?: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null };

export type FieldCollectionFieldsFragment = { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> };

export type FormFieldsFragment = { __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type TabsFieldsFragment = { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string }, tabLabel?: { __typename?: 'FormTabTabLabel', json: any, links: { __typename?: 'FormTabTabLabelLinks', entries: { __typename?: 'FormTabTabLabelEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormTabTabLabelAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, form?: { __typename: 'Form', formType?: string | null, title?: string | null, formId?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null };

export type TabbedFormContainerFieldsFragment = { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string }, formImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, tabsCollection?: { __typename?: 'TabbedFormContainerTabsCollection', items: Array<{ __typename: 'FormTab', sys: { __typename?: 'Sys', id: string }, tabLabel?: { __typename?: 'FormTabTabLabel', json: any, links: { __typename?: 'FormTabTabLabelLinks', entries: { __typename?: 'FormTabTabLabelEntries', block: Array<
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
              | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
             | null> }, assets: { __typename?: 'FormTabTabLabelAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, form?: { __typename: 'Form', formType?: string | null, title?: string | null, formId?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null } | null> } | null };

export type CtfTabbedFormContainerQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfTabbedFormContainerQuery = { __typename?: 'Query', tabbedFormContainer?: { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string }, formImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, tabsCollection?: { __typename?: 'TabbedFormContainerTabsCollection', items: Array<{ __typename: 'FormTab', sys: { __typename?: 'Sys', id: string }, tabLabel?: { __typename?: 'FormTabTabLabel', json: any, links: { __typename?: 'FormTabTabLabelLinks', entries: { __typename?: 'FormTabTabLabelEntries', block: Array<
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
                | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
               | null> }, assets: { __typename?: 'FormTabTabLabelAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, form?: { __typename: 'Form', formType?: string | null, title?: string | null, formId?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
                  | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
                  | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
                 | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<{ __typename: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, sys: { __typename?: 'Sys', id: string }, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, submitButton?: { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null } | null } | null> } | null } | null };

export type TemplateFieldsFragment = { __typename: 'Template', sys: { __typename?: 'Sys', id: string }, header?: { __typename: 'Header', sys: { __typename?: 'Sys', id: string } } | null, footer?: { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } } | null };

export type CtfTemplateQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfTemplateQuery = { __typename?: 'Query', template?: { __typename: 'Template', sys: { __typename?: 'Sys', id: string }, header?: { __typename: 'Header', sys: { __typename?: 'Sys', id: string } } | null, footer?: { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } } | null } | null };

export type TextBlockFieldsFragment = { __typename: 'ComponentTextBlock', variations?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null>, inline: Array<
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
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfTextBlockQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfTextBlockQuery = { __typename?: 'Query', componentTextBlock?: { __typename: 'ComponentTextBlock', variations?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null>, inline: Array<
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
            | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type VideoSectionFieldsFragment = { __typename: 'VideoSection', videoTitle?: string | null, youtubeId?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfVideoQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfVideoQuery = { __typename?: 'Query', videoSection?: { __typename: 'VideoSection', videoTitle?: string | null, youtubeId?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
      | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
     | null> } | null };

type ComponentReferenceFields_Accordion_Fragment = { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Banner_Fragment = { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Button_Fragment = { __typename: 'Button', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ButtonWithLinks_Fragment = { __typename: 'ButtonWithLinks', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Card_Fragment = { __typename: 'Card', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Carousel_Fragment = { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Disclaimer_Fragment = { __typename: 'Disclaimer', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Footer_Fragment = { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Form_Fragment = { __typename: 'Form', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FormField_Fragment = { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FormTab_Fragment = { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FormWrapper_Fragment = { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_HamburgerMenu_Fragment = { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Header_Fragment = { __typename: 'Header', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Journey_Fragment = { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Link_Fragment = { __typename: 'Link', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationItems_Fragment = { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_OptionSet_Fragment = { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Question_Fragment = { __typename: 'Question', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_SubNavigationItem_Fragment = { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TabbedFormContainer_Fragment = { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Template_Fragment = { __typename: 'Template', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_VideoSection_Fragment = { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } };

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
  | ComponentReferenceFields_Journey_Fragment
  | ComponentReferenceFields_Link_Fragment
  | ComponentReferenceFields_NavigationItems_Fragment
  | ComponentReferenceFields_OptionSet_Fragment
  | ComponentReferenceFields_Page_Fragment
  | ComponentReferenceFields_Question_Fragment
  | ComponentReferenceFields_SubNavigationItem_Fragment
  | ComponentReferenceFields_TabbedFormContainer_Fragment
  | ComponentReferenceFields_Template_Fragment
  | ComponentReferenceFields_VideoSection_Fragment
;

export type LinkFieldsFragment = { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SitemapPagesQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, changeFrequency?: string | null, priority?: number | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };
