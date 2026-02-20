"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import classes from "./NavigationLink.module.css";
import { ReactNode } from "react";

interface INavigationLink {
  route: string;
  children?: ReactNode;
}

export function NavigationLink(props: INavigationLink) {
  const { route, children } = props;
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={classnames(classes.link, {
        [classes.linkActive]: pathname === route,
      })}
    >
      {children}
    </Link>
  );
}
