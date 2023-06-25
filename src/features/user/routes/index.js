import { Route, Routes } from "react-router-dom";
import {Profile} from "./Profile";

export const AuthRoutes = () => {
    return (
    <Routes>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}