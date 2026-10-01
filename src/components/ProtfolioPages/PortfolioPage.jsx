import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

import PortfolioEmptyState from "./PortfolioEmptyState";
import PortfolioSectionForm from "./PortfolioSectionForm";
import PortfolioCard from "./PortfolioCard";

const PortfolioPage = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     ADD PORTFOLIO
  ===================================================== */

  const handleAddPortfolio = () => {
    setEditingSection(null);
    setShowForm(true);
  };

  /* =====================================================
     EDIT PORTFOLIO
  ===================================================== */

  const handleEditPortfolio = (section) => {
    setEditingSection(section);
    setShowForm(true);
  };

  /* =====================================================
     SAVE PORTFOLIO
  ===================================================== */

  const handleSavePortfolio = (sectionData) => {
    if (editingSection) {
      setSections((previousSections) =>
        previousSections.map((section) =>
          section.id === editingSection.id
            ? {
                ...sectionData,
                id: editingSection.id,
              }
            : section
        )
      );
    } else {
      setSections((previousSections) => [
        ...previousSections,
        {
          ...sectionData,
          id: Date.now(),
        },
      ]);
    }

    setEditingSection(null);
    setShowForm(false);
  };

  /* =====================================================
     DELETE PORTFOLIO
  ===================================================== */

  const handleDeletePortfolio = (sectionId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio section?"
    );

    if (!confirmed) {
      return;
    }

    setSections((previousSections) =>
      previousSections.filter(
        (section) => section.id !== sectionId
      )
    );
  };

  /* =====================================================
     CANCEL / BACK TO PORTFOLIO
  ===================================================== */

  const handleCancelForm = () => {
    setEditingSection(null);
    setShowForm(false);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#f7f6f6]"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* =================================================
          TOP HEADER
      ================================================= */}

      <header className="relative w-full border-b border-gray-200 bg-[#fffdf9]">
        <div
          className="
            flex
            min-h-[72px]
            w-full
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
          "
        >
          {/* LOGO */}

          <Link
            to="/service-providers"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Vibely"
              className="
                block
                h-auto
                w-[75px]
                object-contain
                sm:w-[85px]
                md:w-[90px]
                lg:w-[100px]
                xl:w-[110px]
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="
              hidden
              items-center
              gap-5
              md:flex
              lg:gap-8
              xl:gap-10
            "
          >
            <button
              type="button"
              onClick={() => navigate("/service-providers")}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                text-[12px]
                font-medium
                text-[#222]
                lg:text-[14px]
                xl:text-[16px]
              "
            >
              DASHBOARD
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/service-providers/profile")
              }
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                text-[12px]
                font-medium
                text-[#222]
                lg:text-[14px]
                xl:text-[16px]
              "
            >
              PROFILE
            </button>

            {/* ACTIVE PORTFOLIO */}

            <button
              type="button"
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                text-[12px]
                font-semibold
                text-[#e53935]
                lg:text-[14px]
                xl:text-[16px]
              "
            >
              PORTFOLIO
            </button>

            <button
              type="button"
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                text-[12px]
                font-medium
                text-[#222]
                lg:text-[14px]
                xl:text-[16px]
              "
            >
              SERVICES / PRICING
            </button>

            <button
              type="button"
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                text-[12px]
                font-medium
                text-[#222]
                lg:text-[14px]
                xl:text-[16px]
              "
            >
              LEADS
            </button>
          </nav>

          {/* ACCOUNT + MOBILE MENU */}

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="flex shrink-0 items-center"
            >
              <img
                src={account}
                alt="Account"
                className="
                  block
                  h-[30px]
                  w-[30px]
                  rounded-full
                  object-cover
                  sm:h-[34px]
                  sm:w-[34px]
                  md:h-[38px]
                  md:w-[38px]
                "
              />
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                items-center
                justify-center
                text-[23px]
                text-gray-700
                md:hidden
              "
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        {menuOpen && (
          <nav
            className="
              absolute
              left-0
              right-0
              top-full
              z-50
              border-t
              border-gray-200
              bg-[#fffdf9]
              px-5
              py-4
              shadow-md
              md:hidden
            "
          >
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers");
                  closeMenu();
                }}
                className="
                  text-left
                  text-[15px]
                  font-medium
                  text-[#222]
                "
              >
                DASHBOARD
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/service-providers/profile");
                  closeMenu();
                }}
                className="
                  text-left
                  text-[15px]
                  font-medium
                  text-[#222]
                "
              >
                PROFILE
              </button>

              {/* ACTIVE PORTFOLIO */}

              <button
                type="button"
                onClick={closeMenu}
                className="
                  text-left
                  text-[15px]
                  font-semibold
                  text-[#e53935]
                "
              >
                PORTFOLIO
              </button>

              <button
                type="button"
                onClick={closeMenu}
                className="
                  text-left
                  text-[15px]
                  font-medium
                  text-[#222]
                "
              >
                SERVICES / PRICING
              </button>

              <button
                type="button"
                onClick={closeMenu}
                className="
                  text-left
                  text-[15px]
                  font-medium
                  text-[#222]
                "
              >
                LEADS
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* =================================================
          PAGE CONTENT
      ================================================= */}

      <main className="w-full bg-[#f7f6f6]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-[40px]
            pb-[40px]
            pt-[20px]
          "
        >
          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {!showForm && sections.length === 0 && (
            <PortfolioEmptyState
              onAddPortfolio={handleAddPortfolio}
            />
          )}

          {/* =================================================
              PORTFOLIO FORM
          ================================================= */}

          {showForm && (
            <div className="mt-[20px]">
              <PortfolioSectionForm
                initialData={editingSection}
                onSave={handleSavePortfolio}
                onCancel={handleCancelForm}
                onBack={handleCancelForm}
              />
            </div>
          )}

          {/* =================================================
              PORTFOLIO LIST
          ================================================= */}

          {!showForm && sections.length > 0 && (
            <div className="mt-[20px] space-y-[15px]">
              {sections.map((section, index) => (
                <PortfolioCard
                  key={section.id}
                  section={section}
                  onEdit={handleEditPortfolio}
                  onDelete={handleDeletePortfolio}
                  showGallery={index === 0}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;