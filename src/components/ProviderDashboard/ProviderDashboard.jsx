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

      <main className="w-full px-4 py-5 pb-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* LEAD ACTIONS + LEAD STATUS */}
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <LeadActions />
          <LeadStatusSummary />
        </div>

        {/* DASHBOARD STATS */}
        <div className="mt-5 w-full">
          <DashboardStats />
        </div>

        {/* SERVICES + AVAILABILITY */}
        <div className="mt-5 grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <ServicesPricing />
          <AvailabilityCalendar />
        </div>

        {/* ================================================= */}
        {/* THUMBNAIL + LEAD STATUS + AVAILABILITY CALENDAR */}
        {/* ================================================= */}

        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex w-full flex-col gap-5">

            {/* THUMBNAIL */}
            <ThumbnailBadgeTextOverlay />

            {/* LEAD STATUS */}
            <LeadStatusOverlay />

          </div>


          {/* RIGHT SIDE */}
          <div className="flex w-full items-end">

            {/* 
              Calendar height is controlled from here.
              75vh is only an example fixed height.
            */}
            <div className="h-[75vh] w-full">

              <AvailabilityCalendarOverlay />

            </div>

          </div>

        </div>


        {/* FOUR CALENDAR STATES */}
        <div className="mt-5 w-full">
          <AvailabilityCalendar1 />
        </div>


        {/* MINI CALENDARS */}
        <div className="mt-5 w-full">
          <AvailabilityCalendarBottom />
        </div>

      </main>

    </div>
  );
};

export default ProviderDashboard;