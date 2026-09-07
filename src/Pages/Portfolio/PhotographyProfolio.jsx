import React from "react";

import PortfolioHeader from "../../components/Portfolio/PortfolioHeader";
import PortfolioHero from "../../components/Portfolio/PortfolioHero";
import ProviderDetails from "../../components/Portfolio/ProviderDetails";
import ProviderAbout from "../../components/Portfolio/ProviderAbout";
import ProviderFeatured from "../../components/Portfolio/ProviderFeatured";
import CorporateGala from "../../components/Portfolio/CorporateGala";
import SanviBirthday from "../../components/Portfolio/SanviBirthday";
import CapturedMoments from "../../components/Portfolio/CapturedMoments";
import MostPopularServices from "../../components/Portfolio/MostPopularServices";
import ExploreOtherServiceProviders from "../../components/Portfolio/ExploreOtherServiceProviders";


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
      <CapturedMoments/>
      <MostPopularServices/>
      <ExploreOtherServiceProviders/>

    </div>
  );
}

export default PhotographyPortfolio;