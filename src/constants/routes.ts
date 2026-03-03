export const ROUTES = {
  home: "/",
  rackets: "/rackets",
  top: "/top",
  profile: "/profile",
  login: "/login",
  register: "/register",
  racket: (id: string | number) => `/racket/${id}`,
};
