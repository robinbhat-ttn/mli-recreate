import styles from './ctf-header.module.css';

interface ImageProps {
  imageSrc: string;
  imageAlt?: string;
}
export const ImageContainer = (props: ImageProps) => {
  const { imageSrc, imageAlt } = props;
  return (
    <div className={styles.imageContainer}>
      <img src={imageSrc} alt={imageAlt || 'Image'} />
    </div>
  );
};
