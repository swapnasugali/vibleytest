import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Common/Layout";
import HomePage from "./Pages/HomePage/HomePage";

import PortfolioPage from "./Pages/Portfolio/PortfolioPage";
import ServiceCategoryPage from "./Pages/ServiceCategory1/ServiceCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Layout HomePage={HomePage} />}
        />

        {/* Dynamic Portfolio Page */}
        <Route
          path="/portfolio/:type/:id"
          element={<Layout HomePage={PortfolioPage} />}
        />

          {/* Dynamic ServiceCategoryPage */}
        <Route
          path="/services/:id"
          element={<Layout HomePage={ServiceCategoryPage} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;