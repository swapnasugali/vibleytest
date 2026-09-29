import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Layout from "./components/Common/Layout";

import HomePage from "./Pages/HomePage/HomePage";
import PublicPortfolioPage from "./Pages/Portfolio/PortfolioPage";
import ServiceCategoryPage from "./Pages/ServiceCategory1/ServiceCategoryPage";

import ProviderDashboard from "./components/ProviderDashboard/ProviderDashboard";
import ProfilerPage from "./components/ProfilerPage/ProfilerPage";

import ProviderPortfolioPage from "./components/ProfilerPage/Portifolio/PortfolioPage";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>

      <Route
        path="/"
        element={<Layout HomePage={HomePage} />}
      />

      <Route
        path="/portfolio/:type/:id"
        element={<Layout HomePage={PublicPortfolioPage} />}
      />

      <Route
        path="/services/:id"
        element={<Layout HomePage={ServiceCategoryPage} />}
      />

      <Route
        path="/service-providers"
        element={<ProviderDashboard />}
      />

      <Route
        path="/service-providers/profile"
        element={<ProfilerPage />}
      />

      {/* PROVIDER PORTFOLIO */}
      <Route
        path="/service-providers/profile/portfolio"
        element={<ProviderPortfolioPage />}
      />

    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;