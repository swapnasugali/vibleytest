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

import ProviderPortfolioPage from "./components/ProtfolioPages/PortfolioPage";


/* =========================================================
   SERVICES / PRICING PAGES
========================================================= */

import ServicePricingPage from "./components/ServicesPricing/ServicePricingPage";

import FixedPackagePage from "./components/ServicesPricing/FixedPackagePage";

import SpecificServicePage from "./components/ServicesPricing/SpecificServicePage";

import AddOnPage from "./components/ServicesPricing/AddOnPage";


function AppRoutes() {

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>

      {/* =====================================================
          PUBLIC PAGES
      ===================================================== */}

      <Route
        path="/"
        element={<Layout HomePage={HomePage} />}
      />


      <Route
        path="/portfolio/:type/:id"
        element={
          <Layout HomePage={PublicPortfolioPage} />
        }
      />


      <Route
        path="/services/:id"
        element={
          <Layout HomePage={ServiceCategoryPage} />
        }
      />


      {/* =====================================================
          SERVICE PROVIDER
      ===================================================== */}

      <Route
        path="/service-providers"
        element={<ProviderDashboard />}
      />


      <Route
        path="/service-providers/profile"
        element={<ProfilerPage />}
      />


      <Route
        path="/service-providers/profile/portfolio"
        element={<ProviderPortfolioPage />}
      />


      {/* =====================================================
          SERVICES / PRICING MAIN PAGE
      ===================================================== */}

      <Route
        path="/service-providers/services-pricing"
        element={<ServicePricingPage />}
      />


      {/* =====================================================
          FIXED PACKAGE PAGE
      ===================================================== */}

      <Route
        path="/service-providers/services-pricing/fixed-package"
        element={<FixedPackagePage />}
      />


      {/* =====================================================
          SPECIFIC SERVICE PAGE
      ===================================================== */}

      <Route
        path="/service-providers/services-pricing/specific-service"
        element={<SpecificServicePage />}
      />


      {/* =====================================================
          ADD ONS PAGE
      ===================================================== */}

      <Route
        path="/service-providers/services-pricing/add-ons"
        element={<AddOnPage />}
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