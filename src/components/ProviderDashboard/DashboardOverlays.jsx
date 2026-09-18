import React, { useState } from "react";

import ThumbnailBadgeTextOverlay from "./ThumbnailBadgeTextOverlay";
import LeadStatusOverlay from "./LeadStatusOverlay";
import AvailabilityCalendarOverlay from "./AvailabilityCalendarOverlay";
import AvailabilityCalendar1 from "./AvailabilityCalendar1";

const DashboardOverlays = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showLeadStatus, setShowLeadStatus] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-8 lg:px-10">

      <div className="mx-auto grid w-full max-w-[970px] grid-cols-1 gap-10 lg:grid-cols-[390px_1fr]">

        {/* LEFT SIDE */}
        <div className="flex w-full flex-col gap-10">

          {/* THUMBNAIL BADGE TEXT */}
          {showThumbnail && (
            <div className="w-full">
              <ThumbnailBadgeTextOverlay
                onClose={() => setShowThumbnail(false)}
              />
            </div>
          )}

          {/* LEAD STATUS */}
          {showLeadStatus && (
            <div className="w-full">
              <LeadStatusOverlay
                onClose={() => setShowLeadStatus(false)}
              />
            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        {showCalendar && (
          <div className="flex w-full items-start">
            <AvailabilityCalendarOverlay
              onClose={() => setShowCalendar(false)}
            />
          </div>
        )}

        <div>
          <AvailabilityCalendar1/>
        </div>

      </div>

    </div>
  );
};

export default DashboardOverlays;
