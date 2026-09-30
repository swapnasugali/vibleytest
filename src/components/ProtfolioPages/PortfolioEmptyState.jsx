import React from "react";
import { FiPlus } from "react-icons/fi";

const PortfolioEmptyState = ({ onAddPortfolio }) => {
  return (
    <div
      className="
        mt-[20px]
        w-full
        rounded-[7px]
        bg-white
        px-[20px]
        py-[65px]
      "
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >

      <div className="flex flex-col items-center justify-center text-center">

        {/* EMPTY STATE ICON */}

        <div
          className="
            flex
            h-[64px]
            w-[64px]
            items-center
            justify-center
            rounded-full
            bg-[#f7eaea]
          "
        >

          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >

            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="#b00000"
              strokeWidth="1.7"
            />

            <path
              d="M7 8H17"
              stroke="#b00000"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M7 12H14"
              stroke="#b00000"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M7 16H11"
              stroke="#b00000"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

          </svg>

        </div>


        {/* TITLE */}

        <h2
          className="
            mt-[18px]
            text-[18px]
            font-semibold
            leading-[25px]
            text-[#333333]
          "
        >
          No Portfolio Sections Yet
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mt-[7px]
            max-w-[500px]
            text-[13px]
            leading-[20px]
            text-[#999999]
          "
        >
          Create your first portfolio section to showcase
          your work, events, and services to potential clients.
        </p>


        {/* ADD BUTTON */}

        <button
          type="button"
          onClick={onAddPortfolio}
          className="
            mt-[20px]
            flex
            h-[36px]
            items-center
            justify-center
            gap-[7px]
            rounded-[5px]
            bg-[#b60000]
            px-[20px]
            text-[13px]
            font-medium
            text-white
            transition
            hover:bg-[#970000]
          "
        >

          <FiPlus
            size={15}
            strokeWidth={2.5}
          />

          Add New Profile Section

        </button>

      </div>

    </div>
  );
};

export default PortfolioEmptyState;