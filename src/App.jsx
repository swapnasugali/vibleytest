// ============================================
// App.jsx
// ============================================

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

// ============================================
// Layout
// ============================================

import Layout from "./components/Common/Layout";

// ============================================
// Pages
// ============================================

import HomePage from "./Pages/HomePage/HomePage";

import PortfolioPage from "./Pages/Portfolio/PortfolioPage";

import ServiceCategoryPage from "./Pages/ServiceCategory1/ServiceCategoryPage";

// Service Provider Page
import ProfilerPage from "./components/ProfilerPage/ProfilerPage";
import ProviderDashboard from "./components/ProviderDashboard/ProviderDashboard";

// ============================================
// App Routes
// ============================================

function AppRoutes() {
  const { pathname } = useLocation();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>

      {/* ========================================
          Home Page
          URL: /
          ======================================== */}

      <Route
        path="/"
        element={
          <Layout HomePage={HomePage} />
        }
      />

      {/* ========================================
          Portfolio Page
          Example:
          /portfolio/photography/1
          ======================================== */}

      <Route
        path="/portfolio/:type/:id"
        element={
          <Layout HomePage={PortfolioPage} />
        }
      />

      {/* ========================================
          Service Category Page
          Example:
          /services/1
          ======================================== */}

      <Route
        path="/services/:id"
        element={
          <Layout HomePage={ServiceCategoryPage} />
        }
      />

      {/* ========================================
          Service Provider Page
          URL:
          /service-providers
          ======================================== */}

      <Route
        path="/service-providers"
        element={
          <Layout HomePage={ProviderDashboard} />
        }
      />

    </Routes>
  );
}

// ============================================
// Main App
// ============================================

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

// ============================================
// Export
// ============================================

export default App;