import { Route, Routes, Navigate } from "react-router-dom";
import MailingRoutes from "./MailingRoutes";
import HumanResourcesRoutes from "./HumanResources";

const AdminRoutes = () => (
  <Routes>
    <Route path="/mailing/*" element={<MailingRoutes />} />
    <Route path="/human-resources/*" element={<HumanResourcesRoutes />} />
    <Route path="*" element={<Navigate to={"mailing"} />} />
  </Routes>
);

export default AdminRoutes;
