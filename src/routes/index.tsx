import IsAuth from "@/components/IsAuth";
import { AuthLayout, BaseLayout } from "@/components/layouts";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import ProfileRoutes from "./ProfileRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route element={<AuthLayout />}>
            <Route path="/auth/*" element={<AuthRoutes />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/profile/*" element={<ProfileRoutes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
