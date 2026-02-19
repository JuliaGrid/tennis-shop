import classes from "./styles.module.css";

interface IRacketImage {
  imageUrl: string;
  alt: string;
}

export function RacketImage(props: IRacketImage) {
  const { imageUrl, alt } = props;

  return (
    <div className={classes.cardImageWrapper}>
      <img src={imageUrl} alt={alt} className={classes.cardImage} />
    </div>
  );
}
