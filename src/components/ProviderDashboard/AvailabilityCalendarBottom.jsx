import React from "react";

import AvailabilityCalendarMini from "./AvailabilityCalendarMini";
import DateMarkedBadge from "./DateMarkedBadge";

const AvailabilityCalendarBottom = () => {
  return (
    <div className="w-full">

      <div
        className="
          flex
          flex-col
          items-start
          gap-8
          sm:flex-row
          sm:items-start
        "
      >

        {/* ================================================= */}
        {/* TWO MINI CALENDARS */}
        {/* ================================================= */}

        <div className="flex w-[115px] flex-col items-center gap-[28px]">

          <AvailabilityCalendarMini />

          <AvailabilityCalendarMini marked />

        </div>


        {/* ================================================= */}
        {/* TWO DATE MARKED BADGES */}
        {/* ================================================= */}

        <div
          className="
            flex
            w-[100px]
            flex-col
            items-center
            gap-[45px]
            pt-[65px]
          "
        >

          <DateMarkedBadge
            type="orange"
            date="27th MAY, 2026"
          />

          <DateMarkedBadge
            type="green"
            date="27th MAY, 2026"
          />

        </div>

      </div>

    </div>
  );
};

export default AvailabilityCalendarBottom;