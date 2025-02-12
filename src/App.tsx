import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import DashboardPage from "@/pages/dashboard";
import ReservationsPage from "@/pages/reservations";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<ReservationsPage />} path="/reservations" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ServicesPage />} path="/services" />
    </Routes>
  );
}

export default App;
