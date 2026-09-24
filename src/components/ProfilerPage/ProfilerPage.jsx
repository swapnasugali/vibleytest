import React from "react";

import ProfileNavbar from "./ProfileNavbar";
import ProfileHero from "./ProfileHero";

import BasicInfo from "./BasicInfo";
import AboutBusiness from "./AboutBusiness";
import ContactPreferences from "./ContactPreferences";

import ServiceArea from "./ServiceArea";
import ServicePolicy from "./ServicePolicy";
import CredibilityForTrustSignals from "./CredibilityForTrustSignals";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <ProfileNavbar />


      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <main
        className="
          px-[12px]
          py-[14px]
          sm:px-[20px]
          sm:py-[16px]
          md:px-[28px]
          lg:px-[40px]
        "
      >

        {/* ================================================= */}
        {/* PROFILE HERO */}
        {/* ================================================= */}

        <ProfileHero />


        {/* ================================================= */}
        {/* PROFILE DETAILS */}
        {/* ================================================= */}

        <div
          className="
            mt-[12px]
            grid
            grid-cols-1
            gap-[10px]
            lg:grid-cols-2
          "
        >

          {/* ================================================= */}
          {/* LEFT COLUMN */}
          {/* ================================================= */}

          <div className="flex min-w-0 flex-col gap-[10px]">

            <BasicInfo />

            <ServiceArea />

            <ServicePolicy />

          </div>


          {/* ================================================= */}
          {/* RIGHT COLUMN */}
          {/* ================================================= */}

          <div className="flex min-w-0 flex-col gap-[10px]">

            <AboutBusiness />

            <ContactPreferences />

            <CredibilityForTrustSignals />

          </div>

        </div>

      </main>

    </div>
  );
};

export default ProfilePage;