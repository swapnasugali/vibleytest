import React from "react";
import { useParams } from "react-router-dom";

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

const PortfolioPage = () => {
  const { type, id } = useParams();

  return (
    <div className="w-full">

      <PortfolioHeader type={type} />

      <PortfolioHero type={type} />

      <ProviderDetails type={type} />

      <ProviderAbout type={type} id={id} />

      <ProviderFeatured type={type} />

      <CorporateGala type={type} />

      <SanviBirthday type={type} />

      <CapturedMoments type={type} />

      <MostPopularServices type={type} />

      <ExploreOtherServiceProviders type={type} />

    </div>
  );
};

export default PortfolioPage;