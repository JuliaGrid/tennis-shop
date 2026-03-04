"use client";

import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";
import { HeartIcon } from "../Icons/Heart";

export function FavoriteButton() {
  const user = useContext(UserContext);

  if (!user) return;

  return <HeartIcon style={{ position: "absolute", right: "10", top: "10" }} />;
}
