import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import type {
  FooterFieldsFragment,
  FooterLinksCollectionFragment,
  SocialLinksCollectionFieldsFragment,
  FooterButtonCollectionFieldsFragment,
  GroupSitesLinksCollectionFieldsFragment,
  DisclaimerSectionFieldsFragment,
  FooterInformationFieldsFragment,
} from './__generated/ctf-footer.generated';
import { ButtonContainer } from './ButtonContainer';
import styles from './ctf-footer.module.scss';
import { FooterContent } from './FooterContent';
import { FooterLinks } from './FooterLinks';
import { GroupSiteLinks } from './GroupSiteLinks';
import { SocialLinks } from './SocialLinks';

export const CtfFooter = (props: FooterFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <div
      className={styles.footerContainer}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'footer' })}
    >
      {props.footerLinksCollection?.items && props.footerLinksCollection?.items.length > 0 && (
        <FooterLinks {...(props.footerLinksCollection as FooterLinksCollectionFragment)} />
      )}
      {props.socialLinksCollection?.items && props.socialLinksCollection?.items.length > 0 && (
        <SocialLinks {...(props.socialLinksCollection as SocialLinksCollectionFieldsFragment)} />
      )}
      {props.buttonsCollection?.items && props.buttonsCollection?.items.length > 0 && (
        <ButtonContainer {...(props.buttonsCollection as FooterButtonCollectionFieldsFragment)} />
      )}
      {props.groupSitesLinksCollection?.items &&
        props.groupSitesLinksCollection?.items.length > 0 && (
          <GroupSiteLinks
            {...(props.groupSitesLinksCollection as GroupSitesLinksCollectionFieldsFragment)}
          />
        )}
      <FooterContent
        footerInformation={props.footerInformation as FooterInformationFieldsFragment}
        disclaimerSection={props.disclaimerSection as DisclaimerSectionFieldsFragment}
      />
    </div>
  );
};
