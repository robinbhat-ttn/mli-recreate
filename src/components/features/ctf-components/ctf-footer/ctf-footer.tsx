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
import styles from './ctf-footer.module.css';
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
      <FooterLinks {...(props.footerLinksCollection as FooterLinksCollectionFragment)} />
      <SocialLinks {...(props.socialLinksCollection as SocialLinksCollectionFieldsFragment)} />
      <ButtonContainer {...(props.buttonsCollection as FooterButtonCollectionFieldsFragment)} />
      <GroupSiteLinks
        {...(props.groupSitesLinksCollection as GroupSitesLinksCollectionFieldsFragment)}
      />
      <FooterContent
        footerInformation={props.footerInformation as FooterInformationFieldsFragment}
        disclaimerSection={props.disclaimerSection as DisclaimerSectionFieldsFragment}
      />
    </div>
  );
};
