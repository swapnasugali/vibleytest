import React, { useState } from "react";

import ProfileNavbar from "../ProfileNavbar";
import PortfolioEmptyState from "./PortfolioEmptyState";
import PortfolioSectionForm from "./PortfolioSectionForm";
import PortfolioList from "./PortfolioList";

const PortfolioPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [portfolioSections, setPortfolioSections] = useState([]);

  // OPEN ADD PORTFOLIO FORM
  const handleAddPortfolio = () => {
    setShowForm(true);
  };

  // BACK TO PORTFOLIO
  const handleBack = () => {
    setShowForm(false);
  };

  // SAVE PORTFOLIO SECTION
  const handleSave = (newSection) => {
    setPortfolioSections((previousSections) => [
      ...previousSections,
      newSection,
    ]);

    setShowForm(false);
  };

  return (
    <div
      className="min-h-screen bg-[#f7f6f6]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* =====================================================
          PROFILE / PORTFOLIO HEADER
      ===================================================== */}
      <ProfileNavbar />

      {/* =====================================================
          PORTFOLIO CONTENT
      ===================================================== */}
      <main className="w-full px-[20px] py-[20px] sm:px-[35px] md:px-[55px]">

        {showForm ? (
          <PortfolioSectionForm
            onBack={handleBack}
            onSave={handleSave}
          />
        ) : portfolioSections.length === 0 ? (
          <PortfolioEmptyState
            onAddPortfolio={handleAddPortfolio}
          />
        ) : (
          <PortfolioList
            sections={portfolioSections}
            onAddPortfolio={handleAddPortfolio}
          />
        )}

      </main>
    </div>
  );
};

export default PortfolioPage;