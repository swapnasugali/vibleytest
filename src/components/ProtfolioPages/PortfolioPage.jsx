import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import PortfolioEmptyState from "./PortfolioEmptyState";
import PortfolioSectionForm from "./PortfolioSectionForm";
import PortfolioCard from "./PortfolioCard";

const PortfolioPage = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingSection, setEditingSection] = useState(null);

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
     CANCEL FORM
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

      <header
        className="
          h-[90px]
          w-full
          border-b
          border-[#eeeeee]
          bg-[#fffdf9]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[1200px]
            items-center
            justify-between
            px-[28px]
          "
        >

          {/* LOGO */}

          <div className="w-[170px]">

            <div
              className="
                text-[32px]
                font-extrabold
                italic
                leading-[28px]
                tracking-[-2px]
                text-[#b00000]
              "
            >
              Vibely
            </div>

            <div
              className="
                ml-[8px]
                mt-[1px]
                text-[10px]
                font-medium
                leading-[10px]
                text-[#333333]
              "
            >
              Vendors
            </div>

            <div
              className="
                ml-[8px]
                text-[8px]
                leading-[8px]
                text-[#555555]
              "
            >
              PORTAL
            </div>

          </div>


          {/* NAVIGATION */}

          <nav
            className="
              flex
              h-full
              items-center
              gap-[42px]
            "
          >

            <button
              type="button"
              onClick={() =>
                navigate("/service-providers")
              }
              className="
                border-0
                bg-transparent
                text-[14px]
                font-medium
                text-[#222222]
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
                border-0
                bg-transparent
                text-[14px]
                font-medium
                text-[#222222]
              "
            >
              PROFILE
            </button>


            {/* ACTIVE PORTFOLIO */}

            <button
              type="button"
              className="
                border-0
                bg-transparent
                text-[14px]
                font-semibold
                text-[#d32929]
              "
            >
              PORTFOLIO
            </button>


            <button
              type="button"
              className="
                border-0
                bg-transparent
                text-[14px]
                font-medium
                text-[#222222]
              "
            >
              SERVICES / PRICING
            </button>


            <button
              type="button"
              className="
                border-0
                bg-transparent
                text-[14px]
                font-medium
                text-[#222222]
              "
            >
              LEADS
            </button>

          </nav>


          {/* PROFILE ICON */}

          <button
            type="button"
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              border-[2px]
              border-[#b7b7b7]
              bg-transparent
              text-[#a9a9a9]
            "
          >
            <FiUser
              size={25}
              strokeWidth={1.8}
            />
          </button>

        </div>
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

          {/* PAGE HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h1
                className="
                  text-[23px]
                  font-semibold
                  leading-[30px]
                  text-[#2d2d2d]
                "
              >
                Manage Portfolio
              </h1>

              <p
                className="
                  mt-[2px]
                  text-[13px]
                  leading-[20px]
                  text-[#999999]
                "
              >
                Create Structured event-based portfolio
                sections to showcase your best work and
                attract clients
              </p>

            </div>


            {/* TOP ADD BUTTON */}

            {!showForm && (
              <button
                type="button"
                onClick={handleAddPortfolio}
                className="
                  h-[35px]
                  min-w-[237px]
                  rounded-[5px]
                  border-0
                  bg-[#b60000]
                  px-[18px]
                  text-[13px]
                  font-medium
                  text-white
                  transition
                  hover:bg-[#970000]
                "
              >
                ⊕&nbsp; Add New Profile Section
              </button>
            )}

          </div>


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