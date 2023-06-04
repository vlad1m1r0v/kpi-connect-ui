import IsAuth from "@/components/IsAuth";
import Profile from "@/pages/profile";
import { Navigate, Route, Routes } from "react-router-dom";

const ProfileRoutes = () => (
  <Routes>
    <Route element={<IsAuth />}>
      <Route index element={<Profile />} />
      <Route path="*" element={<Navigate to="" />} />
    </Route>
  </Routes>
);

export default ProfileRoutes;
