import { Route, Routes } from "react-router-dom";
import MailingRoutes from "./MailingRoutes";

const AdminRoutes = () => (
  <Routes>
    <Route path="/mailing/*" element={<MailingRoutes />} />
  </Routes>
);

export default AdminRoutes;
