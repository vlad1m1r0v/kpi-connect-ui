import { Route, Routes } from "react-router-dom";
import Login from "@/modules/auth/pages/Login";

function AuthRouter() {
  return (
    <>
      <Route path="/login" element={<Login />} />
    </>
  );
}

export default AuthRouter;
