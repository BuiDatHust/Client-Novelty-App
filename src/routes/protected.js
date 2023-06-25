import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { lazyImport } from "../utils/lazyImports";
import { Dashboard } from "../features/misc";

const { Profile } = lazyImport(() => import("../features/user"), "Profile");

const App = () => {
  return (
    // <MainLayout>
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
    // </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
