import React from "react";
import { FiBookOpen, FiImage, FiPlusCircle } from "react-icons/fi";

const PortfolioEmptyState = ({ onAddPortfolio }) => {
  return (
    <section className="flex min-h-[600px] items-center justify-center pt-[80px]">
      <div className="flex w-full flex-col items-center">

        {/* Portfolio Empty Card */}
        <div className="relative">

          {/* Back Card - 1 */}
          <div
            className="
              absolute
              left-[55px]
              top-[-60px]
              z-0
              h-[105px]
              w-[380px]
              rotate-[-12deg]
              rounded-[18px]
              bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_42%,#f7f7f7_100%)]
              shadow-[0_6px_20px_rgba(8,1,2,0.112)]
            "
          />

          {/* Back Card - 2 */}
          <div
            className="
              absolute
              left-[28px]
              top-[-45px]
              z-0
              h-[90px]
              w-[500px]
              rotate-[5deg]
              rounded-[18px]
              bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_42%,#f2f2f2_100%)]
              shadow-[0_6px_20px_rgba(2,5,7,0.112)]
            "
          />

          {/* Main Empty Card */}
          <div
            className="
              relative
              z-10
              flex
              h-[302px]
              w-[523px]
              flex-col
              items-center
              justify-center
              rounded-[7px]
              border-[2px]
              border-dashed
              border-[#bdbdbd]
              bg-white
              px-6
              text-center
            "
          >
            {/* Image Icon */}
            <div
              className="
                mb-4
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center
                rounded-full
                bg-[#FFCCCC]
              "
            >
              <FiImage
                className="h-[23.25px] w-[31px] text-[#d00000]"
              />
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-semibold text-[#222]">
              No Portfolio Sections Added
            </h2>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[466px]
                text-[16px]
                font-normal
                leading-[28px]
                text-[#64748B]
              "
            >
              Showcase your work and build trust with potential clients.
              <br />
              Create sections to organize your event photography,
              <br />
              catering menus, or venue photos.
            </p>
          </div>
        </div>

        {/* Add Portfolio Button */}
        <button
          type="button"
          onClick={onAddPortfolio}
          className="
            mt-4
            flex
            h-[52px]
            w-[363.69px]
            cursor-pointer
            items-center
            justify-center
            gap-[8px]
            rounded-[4px]
            bg-[#970000]
            px-5
            py-2
            text-[18px]
            font-semibold
            text-white
            transition
            hover:bg-[#780000]
          "
        >
          <FiPlusCircle className="h-[20px] w-[20px]" />
          <span>Add Your First Portfolio Gallery</span>
        </button>

        {/* Guide Link */}
        <button
          type="button"
          className="
            mt-2
            flex
            items-center
            gap-[8px]
            text-[14.02px]
            font-normal
            text-[#777]
            underline
            decoration-[#bdbdbd]
            underline-offset-[4px]
            transition
            hover:text-[#970000]
          "
        >
          <FiBookOpen className="h-[18px] w-[18px]" />
          <span>Read the guide on creating a portfolio</span>
        </button>
      </div>
    </section>
  );
};

export default PortfolioEmptyState;


