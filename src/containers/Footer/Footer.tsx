import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <strong className={classes.footer__title}>Tennis store</strong>
        <p className={classes.footer__note}>
          c 2025 Tennis Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
