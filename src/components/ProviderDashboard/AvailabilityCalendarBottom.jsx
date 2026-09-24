import React from "react";

import AvailabilityCalendarMini from "./AvailabilityCalendarMini";
import DateMarkedBadge from "./DateMarkedBadge";

const AvailabilityCalendarBottom = () => {
  return (
    <div className="full">

      <div className="flex items-start gap-[35px]">

        {/* TWO MINI CALENDARS */}

        <div className="flex w-[115px] flex-col items-center gap-[38px]">

          <AvailabilityCalendarMini />

          <AvailabilityCalendarMini marked />

        </div>


        {/* DATE MARKED BADGES */}

        <div className="flex w-[125px] flex-col items-start">

          {/* First badge - beside 2nd calendar */}
          <div className="pt-[250px]">
            <DateMarkedBadge
              type="orange"
              date="27th MAY, 2026"
            />
          </div>

          {/* Second badge - after 2nd calendar */}
          <div className="mt-[65px]">
            <DateMarkedBadge
              type="green"
              date="27th MAY, 2026"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default AvailabilityCalendarBottom;