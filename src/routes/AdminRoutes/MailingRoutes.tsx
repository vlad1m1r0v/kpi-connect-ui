import Protected from "@/components/Protected";
import { Mailing } from "@/pages/admin/Mailing";
import { Navigate, Route, Routes } from "react-router-dom";

const MailingRoutes = () => (
  <Routes>
    <Route
      element={<Protected requiredRole="admin" requiredFeature="mailing" />}
    >
      <Route index element={<Mailing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default MailingRoutes;
