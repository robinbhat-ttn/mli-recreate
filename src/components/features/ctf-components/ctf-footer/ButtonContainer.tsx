import Link from 'next/link';

import styles from './ctf-footer.module.css';

export const ButtonContainer = props => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {props.buttonsCollection.items.map((button, index) => (
          <Link href={button.slug ?? button.linkUrl ?? '/'} key={index}>
            {button.linkHeading}
          </Link>
        ))}
      </div>
      <hr className={styles.footerDivider} />
    </>
  );
};
