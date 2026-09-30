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

/* =========================================================
   PROVIDER PORTFOLIO
   Separate folder:
   src/components/PortfolioPages/PortfolioPage.jsx
========================================================= */

import ProviderPortfolioPage from "./components/ProtfolioPages/PortfolioPage";


function AppRoutes() {
  const { pathname } = useLocation();


  /* =========================================================
     SCROLL TO TOP WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>


      {/* =====================================================
          HOME
      ===================================================== */}

      <Route
        path="/"
        element={
          <Layout HomePage={HomePage} />
        }
      />


      {/* =====================================================
          PUBLIC PORTFOLIO
      ===================================================== */}

      <Route
        path="/portfolio/:type/:id"
        element={
          <Layout HomePage={PublicPortfolioPage} />
        }
      />


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <Route
        path="/services/:id"
        element={
          <Layout HomePage={ServiceCategoryPage} />
        }
      />


      {/* =====================================================
          PROVIDER DASHBOARD
      ===================================================== */}

      <Route
        path="/service-providers"
        element={
          <ProviderDashboard />
        }
      />


      {/* =====================================================
          PROVIDER PROFILE
      ===================================================== */}

      <Route
        path="/service-providers/profile"
        element={
          <ProfilerPage />
        }
      />


      {/* =====================================================
          PROVIDER PORTFOLIO
          
          IMPORTANT:
          DO NOT WRAP THIS WITH Layout.
          
          PortfolioPage.jsx contains the
          Vendors Portal header itself.
      ===================================================== */}

      <Route
        path="/service-providers/profile/portfolio"
        element={
          <ProviderPortfolioPage />
        }
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