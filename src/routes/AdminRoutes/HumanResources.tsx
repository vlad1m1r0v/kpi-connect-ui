import Protected from "@/components/Protected";
import { GetPerson, ListPersons } from "@/pages/admin/HumanResources/Persons";
import { Navigate, Route, Routes } from "react-router-dom";

const HumanResourcesRoutes = () => (
  <Routes>
    <Route
      element={
        <Protected requiredRole="admin" requiredFeature="human-resources" />
      }
    >
      <Route path="persons" element={<ListPersons />} />
      <Route path="persons/:id" element={<GetPerson />} />
      <Route path="*" element={<Navigate to="persons" />} />
    </Route>
  </Routes>
);

export default HumanResourcesRoutes;
