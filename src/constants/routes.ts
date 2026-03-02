export const ROUTES = {
  home: "/",
  rackets: "/rackets",
  top: "/top",
  profile: "/profile",
  login: "/login",
  racket: (id: string | number) => `/racket/${id}`,
};
