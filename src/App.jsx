import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Common/Layout";
import HomePage from "./Pages/HomePage/HomePage";

import PortfolioPage from "./Pages/Portfolio/PortfolioPage";

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
          path="/portfolio/:type"
          element={<Layout HomePage={PortfolioPage} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;