import React from "react";
import { useParams } from "react-router-dom";

import PortfolioHeader from "../../components/Portfolio/PortfolioHeader";
import PortfolioHero from "../../components/Portfolio/PortfolioHero";
import ProviderDetails from "../../components/Portfolio/ProviderDetails";
import ProviderAbout from "../../components/Portfolio/ProviderAbout";
import ProviderFeatured from "../../components/Portfolio/ProviderFeatured";
import CapturedMoments from "../../components/Portfolio/CapturedMoments";
import CorporateGala from "../../components/Portfolio/CorporateGala";
import SanviBirthday from "../../components/Portfolio/SanviBirthday";
import ExploreOtherServiceProviders from "../../components/Portfolio/ExploreOtherServiceProviders";
import MostPopularServices from "../../components/Portfolio/MostPopularServices";

const PortfolioPage = () => {
  const { type } = useParams();

  return (
    <div className="w-full">

      <PortfolioHeader type={type} />

      <PortfolioHero type={type} />

      <ProviderDetails type={type} />

      <ProviderAbout type={type} />

      <ProviderFeatured type={type} />

      <CapturedMoments type={type} />

      <CorporateGala type={type} />

      <SanviBirthday type={type} />

      <ExploreOtherServiceProviders type={type} />

      <MostPopularServices type={type} />

    </div>
  );
};

export default PortfolioPage;