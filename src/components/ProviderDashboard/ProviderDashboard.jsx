
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
    <div
      className="min-h-screen w-full bg-[#f7f6f6]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* 1. HEADER */}
      <ProviderHeader />

      {/* 2. DASHBOARD TITLE */}
      <DashboardHero />

      <main className="w-full px-[22px] py-5 pb-8">
        {/* 3. LEADS */}
        <section className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
          <LeadActions />
          <LeadStatusSummary />
        </section>

        {/* 4. DASHBOARD STATISTICS */}
        <section className="mt-5">
          <DashboardStats />
        </section>

        {/* 5. SERVICES AND AVAILABILITY CALENDAR */}
        <section className="mt-5 grid grid-cols-1 items-stretch gap-[14px] md:grid-cols-2">
          <ServicesPricing />
          <AvailabilityCalendar />
        </section>
      </main>
    </div>
  );
};

export default ProviderDashboard;
