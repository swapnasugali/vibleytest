import React from "react";

import ProviderHeader from "./ProviderHeader";
import DashboardHero from "./DashboardHero";
import LeadActions from "./LeadActions";
import LeadStatusSummary from "./LeadStatusSummary";
import DashboardStats from "./DashboardStats";
import ServicesPricing from "./ServicesPricing";
import AvailabilityCalendar from "./AvailabilityCalendar";

import ThumbnailBadgeTextOverlay from "./ThumbnailBadgeTextOverlay";
import LeadStatusOverlay from "./LeadStatusOverlay";
import AvailabilityCalendarOverlay from "./AvailabilityCalendarOverlay";

import AvailabilityCalendar1 from "./AvailabilityCalendar1";
import AvailabilityCalendarBottom from "./AvailabilityCalendarBottom";

const ProviderDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#f7f6f6]">

      {/* HEADER */}
      <ProviderHeader />

      {/* HERO */}
      <DashboardHero />

      <main className="mx-auto w-full max-w-[960px] px-5 py-5 pb-10">

        {/* ROW 1 */}
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <LeadActions />
          <LeadStatusSummary />
        </div>

        {/* ROW 2 */}
        <div className="mt-5 w-full">
          <DashboardStats />
        </div>

        {/* ROW 3 */}
        <div className="mt-5 grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <ServicesPricing />
          <AvailabilityCalendar />
        </div>

        {/* OVERLAY SECTION */}
        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <ThumbnailBadgeTextOverlay />
            <LeadStatusOverlay />
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <AvailabilityCalendarOverlay />
          </div>

        </div>

        {/* FOUR CALENDAR STATES */}
        <div className="mt-5 w-full">
          <AvailabilityCalendar1 />
        </div>

        {/* MINI CALENDARS + DATE MARKED */}
        <div className="mt-5 w-full">
          <AvailabilityCalendarBottom />
        </div>

      </main>

    </div>
  );
};

export default ProviderDashboard;