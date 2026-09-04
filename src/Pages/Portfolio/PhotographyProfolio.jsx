import React from "react";

import PortfolioHeader from "../../components/Portfolio/PortfolioHeader";
import PortfolioHero from "../../components/Portfolio/PortfolioHero";
import ProviderDetails from "../../components/Portfolio/ProviderDetails";
import ProviderAbout from "../../components/Portfolio/ProviderAbout";
import ProviderFeatured from "../../components/Portfolio/ProviderFeatured";
import CorporateGala from "../../components/Portfolio/CorporateGala";
import SanviBirthday from "../../components/Portfolio/SanviBirthday";

function PhotographyPortfolio() {
  return (
    <div className="w-full bg-white">

      {/* Portfolio Header */}
      <PortfolioHeader />

      {/* Main Photography Image */}
      <PortfolioHero />

      {/* Provider Information */}
      <ProviderDetails/>
      <ProviderAbout/>
      <ProviderFeatured/>
      <CorporateGala/>
      <SanviBirthday/>

    </div>
  );
}

export default PhotographyPortfolio;