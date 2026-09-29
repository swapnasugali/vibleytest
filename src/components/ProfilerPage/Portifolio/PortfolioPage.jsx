import React, { useEffect, useState } from "react";

import ProfileNavbar from "../ProfileNavbar";
import PortfolioEmptyState from "./PortfolioEmptyState";
import PortfolioSectionForm from "./PortfolioSectionForm";
import PortfolioList from "./PortfolioList";

const STORAGE_KEY = "vibely_portfolio_sections";

const PortfolioPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [portfolioSections, setPortfolioSections] = useState([]);

  /* =========================================================
     LOAD PORTFOLIO DATA
     Runs when the page opens
  ========================================================= */

  useEffect(() => {
    try {
      const savedPortfolio =
        localStorage.getItem(STORAGE_KEY);

      if (!savedPortfolio) {
        return;
      }

      const parsedPortfolio =
        JSON.parse(savedPortfolio);

      if (Array.isArray(parsedPortfolio)) {
        setPortfolioSections(parsedPortfolio);
      }
    } catch (error) {
      console.error(
        "Error loading portfolio sections:",
        error
      );
    }
  }, []);

  /* =========================================================
     OPEN ADD PORTFOLIO FORM
  ========================================================= */

  const handleAddPortfolio = () => {
    setShowForm(true);
  };

  /* =========================================================
     BACK TO PORTFOLIO
  ========================================================= */

  const handleBack = () => {
    setShowForm(false);
  };

  /* =========================================================
     SAVE PORTFOLIO SECTION
  ========================================================= */

  const handleSave = (newSection) => {
    const updatedSections = [
      ...portfolioSections,
      newSection,
    ];

    setPortfolioSections(updatedSections);

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedSections)
      );
    } catch (error) {
      console.error(
        "Error saving portfolio section:",
        error
      );
    }

    setShowForm(false);
  };

  /* =========================================================
     DELETE PORTFOLIO SECTION
  ========================================================= */

  const handleDelete = (sectionId) => {
    const updatedSections =
      portfolioSections.filter(
        (section) => section.id !== sectionId
      );

    setPortfolioSections(updatedSections);

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedSections)
      );
    } catch (error) {
      console.error(
        "Error deleting portfolio section:",
        error
      );
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#f7f6f6]
      "
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* =====================================================
          PROFILE NAVBAR
      ===================================================== */}

      <ProfileNavbar />

      {/* =====================================================
          PORTFOLIO CONTENT
      ===================================================== */}

      <main
        className="
          w-full
          px-[20px]
          py-[20px]
          sm:px-[35px]
          md:px-[55px]
        "
      >
        {/* ===================================================
            FORM
        =================================================== */}

        {showForm ? (
          <PortfolioSectionForm
            onBack={handleBack}
            onSave={handleSave}
          />
        ) : portfolioSections.length === 0 ? (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <PortfolioEmptyState
            onAddPortfolio={handleAddPortfolio}
          />
        ) : (
          /* =================================================
             PORTFOLIO LIST
          ================================================= */

          <PortfolioList
            sections={portfolioSections}
            onAddPortfolio={handleAddPortfolio}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
};

export default PortfolioPage;