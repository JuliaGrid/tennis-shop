"use client";

import { UserContext } from "@/providers/UserProvider";
import { useContext, useEffect } from "react";
import { HeartIcon } from "../Icons/Heart";
import classes from "./FavoriteButton.module.css";
import { FavoriteContext } from "@/providers/FavoriteProvider";
import { deleteFavorite } from "@/services/favorite/delete-favorite";
import { addFavorite } from "@/services/favorite/add-favorite";

interface IFavoriteButton {
  isFavorite: boolean;
  id: number;
}

export function FavoriteButton(props: IFavoriteButton) {
  const { isFavorite, id } = props;
  const user = useContext(UserContext);
  const { favorites, changeFavorites } = useContext(FavoriteContext);

  useEffect(() => {
    changeFavorites(id, isFavorite);
  }, [changeFavorites, id, isFavorite]);

  const isFavoriteState = favorites[id];

  const changeFavorite = async () => {
    changeFavorites(id, !isFavoriteState);
    let res;

    if (isFavoriteState) {
      res = await deleteFavorite(id);
    } else {
      res = await addFavorite(id);
    }

    if (res.isError) {
      changeFavorites(id, isFavoriteState);
    }
  };

  if (!user) return;

  return (
    <button className={classes.favoriteButton} onClick={changeFavorite}>
      <HeartIcon isFill={isFavoriteState} />
    </button>
  );
}
