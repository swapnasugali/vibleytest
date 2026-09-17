import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Common/Layout";
import HomePage from "./Pages/HomePage/HomePage";

import PortfolioPage from "./Pages/Portfolio/PortfolioPage";
import ServiceCategoryPage from "./Pages/ServiceCategory1/ServiceCategoryPage";
import DashboardHero from "./components/ProviderDashboard/DashboardHero";
import ProviderHeader from "./components/ProviderDashboard/ProviderHeader";
import ProviderDashboard from "./components/ProviderDashboard/ProviderDashboard";
import DashboardOverlays from "./components/ProviderDashboard/DashboardOverlays";


// ======================================================
// APP ROUTES
// ======================================================

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <Routes>

    //   {/* Home Page */}
    //   <Route
    //     path="/"
    //     element={<Layout HomePage={HomePage} />}
    //   />

    //   {/* Dynamic Portfolio Page */}
    //   <Route
    //     path="/portfolio/:type/:id"
    //     element={<Layout HomePage={PortfolioPage} />}
    //   />

    //   {/* Dynamic ServiceCategoryPage */}
    //   <Route
    //     path="/services/:id"
    //     element={<Layout HomePage={ServiceCategoryPage} />}
    //   />
<div>
    <ProviderDashboard/>
    <DashboardOverlays/>
</div>

  );
}


// ======================================================
// APP
// ======================================================

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;