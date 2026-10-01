import React from "react";
import { FiPlus, FiBookOpen } from "react-icons/fi";

const PortfolioEmptyState = ({ onAddPortfolio }) => {
  return (
    <div
      className="
        mt-[20px]
        flex
        min-h-[650px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F6F6F6]
      "
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="
          relative
          flex
          top-[0px]
          h-[590px]
          w-full
          max-w-[900px]
          items-center
          justify-center

          max-[768px]:h-[560px]
        "
      >
        {/* BACKGROUND PAPER */}
        <div
          className="
            absolute
            top-[10px]
            left-[50%]
            h-[90px]
            w-[390px]
            translate-x-[-50%]
            rotate-[-8deg]
            rounded-[12px]
            bg-white
            shadow-[4px_10px_30px_rgba(0,0,0,0.10)]

            max-[768px]:top-[18px]
            max-[768px]:h-[80px]
            max-[768px]:w-[72%]

            max-[480px]:top-[20px]
            max-[480px]:h-[70px]
            max-[480px]:w-[82%]
          "
        />

        {/* FRONT PAPER */}
        <div
          className="
            absolute
            top-[5px]
            left-[220px]
            h-[115px]
            w-[515px]
            translate-x-[1px]
            rotate-[8deg]
            rounded-[12px]
            bg-white
            shadow-[5px_12px_32px_rgba(0,0,0,0.11)]

            max-[768px]:top-[30px]
            max-[768px]:left-[50%]
            max-[768px]:h-[100px]
            max-[768px]:w-[78%]
            max-[768px]:translate-x-[-50%]

            max-[480px]:top-[32px]
            max-[480px]:h-[82px]
            max-[480px]:w-[88%]
          "
        />

        {/* EMPTY STATE CARD */}
        <div
          className="
            absolute
            top-[75px]
            left-[50%]
            flex
            h-[350px]
            w-[560px]
            translate-x-[-50%]
            flex-col
            items-center
            justify-center
            rounded-[14px]
            border-[2px]
            border-dashed
            border-[#d5d5d5]
            bg-white
            shadow-[0px_4px_12px_rgba(0,0,0,0.08)]

            max-[768px]:top-[75px]
            max-[768px]:h-[340px]
            max-[768px]:w-[calc(100%-60px)]

            max-[480px]:top-[75px]
            max-[480px]:h-[330px]
            max-[480px]:w-[calc(100%-32px)]
          "
        >
          {/* IMAGE ICON */}
          <div
            className="
              flex
              h-[45px]
              w-[45px]
              items-center
              justify-center
              rounded-full
              bg-[#ffd0d0]

              max-[480px]:h-[42px]
              max-[480px]:w-[42px]
            "
          >
            <svg
              width="31"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke="#e53935"
                strokeWidth="1.8"
              />

              <circle
                cx="8.5"
                cy="9"
                r="1.5"
                stroke="#e53935"
                strokeWidth="1.6"
              />

              <path
                d="M4 17L15 12L12 9L12 13L20 18"
                stroke="#e53935"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[10px]
              text-center
              text-[26px]
              font-semibold
              leading-[24px]
              text-[#333333]

              max-[480px]:mt-[9px]
              max-[480px]:text-[21px]
              max-[480px]:leading-[27px]
            "
          >
            No Portfolio Sections Added
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[8px]
              w-[500px]
              text-center
              text-[16px]
              font-normal
              leading-[28px]
              text-[#64748B]

              max-[768px]:w-[90%]
              max-[768px]:text-[15px]
              max-[768px]:leading-[25px]

              max-[480px]:mt-[7px]
              max-[480px]:w-[92%]
              max-[480px]:text-[13px]
              max-[480px]:leading-[22px]
            "
          >
            Showcase your best events to attract more clients.
            <br />
            Create sections to organize your event photography,
            <br />
            catering menus, or venue spaces.
          </p>
        </div>

        {/* ADD YOUR FIRST PORTFOLIO GALLERY */}
        <button
          type="button"
          onClick={onAddPortfolio}
          className="
            absolute
            top-[450px]
            left-[50%]
            flex
            h-[52px]
            w-[363px]
            translate-x-[-50%]
            items-center
            justify-center
            gap-[7px]
            rounded-[5px]
            bg-[#b00000]
            px-[20px]
            text-[18px]
            font-semibold
            text-white
            transition
            hover:bg-[#970000]

            max-[768px]:top-[435px]
            max-[768px]:h-[50px]
            max-[768px]:w-[330px]
            max-[768px]:text-[16px]

            max-[480px]:top-[425px]
            max-[480px]:h-[48px]
            max-[480px]:w-[calc(100%-50px)]
            max-[480px]:text-[14px]
          "
        >
          <FiPlus
            size={14}
            strokeWidth={2.5}
          />

          Add Your First Portfolio Gallery
        </button>

        {/* GUIDE LINK */}
        <button
          type="button"
          className="
            absolute
            top-[515px]
            left-[50%]
            underline
            flex
            translate-x-[-50%]
            items-center
            justify-center
            gap-[5px]
            border-none
            bg-transparent
            p-0
            text-[14px]
            font-normal
            text-[#777777]
            hover:text-[#555555]
            whitespace-nowrap

            max-[768px]:top-[495px]
            max-[768px]:text-[13px]

            max-[480px]:top-[485px]
            max-[480px]:text-[11px]
          "
        >
          <FiBookOpen
            size={11}
            strokeWidth={1.8}
          />

          Read the guide on creating a portfolio
        </button>
      </div>
    </div>
  );
};

export default PortfolioEmptyState;