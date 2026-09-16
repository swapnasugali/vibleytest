import React from "react";

import ProviderHeader from "./ProviderHeader";
import DashboardHero from "./DashboardHero";
import LeadActions from "./LeadActions";
import LeadStatusSummary from "./LeadStatusSummary";
import DashboardStats from "./DashboardStats";
import ServicesPricing from "./ServicesPricing";
import AvailabilityCalendar from "./AvailabilityCalendar";

const ProviderDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f6]">

      {/* HEADER - Full Width */}
      <ProviderHeader />

      {/* HERO - Full Width */}
      <DashboardHero />

      {/* ================= DASHBOARD CONTENT ================= */}
      <main className="mx-auto w-full max-w-[960px] px-5 py-5">

        {/* ================= ROW 1 ================= */}
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">

          {/* Lead Actions */}
          <div className="min-w-0">
            <LeadActions />
          </div>

          {/* Lead Status */}
          <div className="min-w-0">
            <LeadStatusSummary />
          </div>

        </div>


        {/* ================= ROW 2 ================= */}
        <div className="mt-5 w-full">
          <DashboardStats />
        </div>


        {/* ================= ROW 3 ================= */}
        <div className="mt-5 grid w-full grid-cols-1 gap-3 md:grid-cols-2">

          {/* Services / Pricing */}
          <div className="min-w-0">
            <ServicesPricing />
          </div>

          {/* Availability Calendar */}
          <div className="min-w-0">
            <AvailabilityCalendar />
          </div>

        </div>

      </main>

    </div>
  );
};

export default ProviderDashboard;