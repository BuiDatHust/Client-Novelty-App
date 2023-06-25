import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { Landing } from "../features/misc";

export const AppRoutes = () => {
  //   const auth = useAuth();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  //   const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([
    ...protectedRoutes,
    ...publicRoutes,
    ...commonRoutes,
  ]);

  return {element};
};
