import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Common/Layout";
import HomePage from "./Pages/HomePage/HomePage";

import PhotographyPortfolio from "./components/Common/Portfolio/PhotographyProfolio";
import CateringPortfolio from "./components/Common/Portfolio/CateringPortfolio";
import LightingPortfolio from "./components/Common/Portfolio/LightingPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<Layout HomePage={HomePage} />}
        />

        {/* Photography Portfolio */}
        <Route
          path="/photography-portfolio"
          element={<Layout HomePage={PhotographyPortfolio} />}
        />

        {/* Catering Portfolio */}
        <Route
          path="/catering-portfolio"
          element={<Layout HomePage={CateringPortfolio} />}
        />

        {/* Lighting Portfolio */}
        <Route
          path="/lighting-portfolio"
          element={<Layout HomePage={LightingPortfolio} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;