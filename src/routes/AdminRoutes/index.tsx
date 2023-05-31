import { Route, Routes, Navigate } from "react-router-dom";
import MailingRoutes from "./MailingRoutes";

const AdminRoutes = () => (
  <Routes>
    <Route path="/mailing/*" element={<MailingRoutes />} />
    <Route path="*" element={<Navigate to={"mailing"} />} />
  </Routes>
);

export default AdminRoutes;
