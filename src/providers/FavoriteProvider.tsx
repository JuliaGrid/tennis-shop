"use client";

import { createContext, ReactNode, useCallback, useState } from "react";

interface IFavoriteProvider {
  children: ReactNode;
}

interface IFavoriteContext {
  favorites: Record<number, boolean>;
  changeFavorites: (id: number, isFavorite?: boolean) => void;
}
export const FavoriteContext = createContext<IFavoriteContext>({
  favorites: {},
  changeFavorites: () => {},
});

export function FavoriteProvider(props: IFavoriteProvider) {
  const [favorites, setFavorites] = useState({});
  const { children } = props;

  const changeFavorites = useCallback((id: number, isFavorite?: boolean) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: isFavorite,
    }));
  }, []);

  return (
    <FavoriteContext value={{ favorites, changeFavorites }}>
      {children}
    </FavoriteContext>
  );
}
