import css from "./AuthLayout.module.css";
import { Outlet } from "react-router-dom";
import AuthHeader from "@/shared/components/headers/AuthHeader";

export default function AuthLayout() {
  return (
    <div className={css.layout}>
      <AuthHeader />
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
}
