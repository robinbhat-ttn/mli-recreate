import { FooterFieldsFragment } from './__generated/ctf-footer.generated';
import { ButtonContainer } from './ButtonContainer';
import styles from './ctf-footer.module.css';
import { FooterContent } from './FooterContent';
import { FooterLinks } from './FooterLinks';
import { GroupSiteLinks } from './GroupSiteLinks';
import { SocialLinks } from './SocialLinks';

export const CtfFooter = (props: FooterFieldsFragment) => {
  return (
    <div className={styles.footerContainer}>
      <FooterLinks footerLinksCollection={props.footerLinksCollection?.items} />
      <SocialLinks socialLinksCollection={props.socialLinksCollection} />
      <ButtonContainer buttonsCollection={props.buttonsCollection} />
      <GroupSiteLinks groupSitesLinksCollection={props.groupSitesLinksCollection} />
      <FooterContent
        footerInformation={props.footerInformation}
        disclaimerSection={props.disclaimerSection}
      />
    </div>
  );
};
