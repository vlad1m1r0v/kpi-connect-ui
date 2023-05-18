import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRouter from "@/modules/auth/router";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>{AuthRouter}</Routes>
      </Router>
    </>
  );
}
