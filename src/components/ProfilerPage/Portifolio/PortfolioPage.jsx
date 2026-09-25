import React from "react";

import ProfileNavbar from "../ProfileNavbar";
import PortfolioEmptyState from "./PortfolioEmptyState";
import PortfolioSectionForm from "./PortfolioSectionForm";
import PortfolioList from "./PortfolioList";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f6]">

      {/* =========================================================
          PROFILE NAVBAR
      ========================================================= */}
      <ProfileNavbar />

      {/* =========================================================
          PORTFOLIO CONTENT
      ========================================================= */}
      <main className="mx-auto w-full max-w-[960px] px-5 py-5">

        {/* =======================================================
            1. EMPTY PORTFOLIO
        ======================================================= */}
        <PortfolioEmptyState
          onAddPortfolio={() => {}}
        />

        {/* =======================================================
            2. MANAGE PORTFOLIO FORM
        ======================================================= */}
        <PortfolioSectionForm
          onBack={() => {}}
          onSave={() => {}}
        />

        {/* =======================================================
            3. PORTFOLIO LIST
        ======================================================= */}
        <PortfolioList
          sections={[]}
          onAddPortfolio={() => {}}
        />

      </main>

    </div>
  );
};

export default PortfolioPage;