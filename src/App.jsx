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
// Common Layout
// ============================================

import Layout from "./components/Common/Layout";

// ============================================
// Public Pages
// ============================================

import HomePage from "./Pages/HomePage/HomePage";

import PublicPortfolioPage from "./Pages/Portfolio/PortfolioPage";

import ServiceCategoryPage from "./Pages/ServiceCategory1/ServiceCategoryPage";

// ============================================
// Service Provider Pages
// ============================================

import ProviderDashboard from "./components/ProviderDashboard/ProviderDashboard";

import ProfilerPage from "./components/ProfilerPage/ProfilerPage";

// ============================================
// Service Provider Portfolio Page
// ============================================

import ProviderPortfolioPage from "./components/ProfilerPage/Portifolio/PortfolioPage";

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
          HOME
          Main Header + Home + Footer
          ======================================== */}

      <Route
        path="/"
        element={
          <Layout HomePage={HomePage} />
        }
      />

      {/* ========================================
          PUBLIC PORTFOLIO
          Main Header + Portfolio + Footer
          ======================================== */}

      <Route
        path="/portfolio/:type/:id"
        element={
          <Layout HomePage={PublicPortfolioPage} />
        }
      />

      {/* ========================================
          SERVICE CATEGORY
          Main Header + Service Category + Footer
          ======================================== */}

      <Route
        path="/services/:id"
        element={
          <Layout HomePage={ServiceCategoryPage} />
        }
      />

      {/* ========================================
          SERVICE PROVIDER DASHBOARD
          ======================================== */}

      <Route
        path="/service-providers"
        element={
          <ProviderDashboard />
        }
      />

      {/* ========================================
          SERVICE PROVIDER PROFILE
          ======================================== */}

      <Route
        path="/service-providers/profile"
        element={
          <ProfilerPage />
        }
      />

      {/* ========================================
          SERVICE PROVIDER PROFILE PORTFOLIO
          ======================================== */}

      <Route
        path="/service-providers/profile/portfolio"
        element={
          <ProviderPortfolioPage />
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