import { Filters } from "@/containers/Filters/Filters";
import classes from "./styles.module.css";

export default function CatalogLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <section className={classes.rackets}>
      <aside className={classes.rackets__filters}>
        <Filters />
      </aside>

      <div className={classes.rackets__catalog}>{children}</div>
    </section>
  );
}
