import React from 'react'
import ServiceCategoryHero from '../../components/ServiceCategory/ServiceCategoryHero'
import FindCateringWay from '../../components/ServiceCategory/FindCateringWay'
import FeaturedCateringExperts from '../../components/ServiceCategory/FeaturedCateringExperts'
import TrustedPureVegCaterers from '../../components/ServiceCategory/TrustedPureVegCaterers'

function ServiceCategoryPage() {
  return (
    
        <div className="w-full bg-white">
            <ServiceCategoryHero/>
            <FindCateringWay/>
            <FeaturedCateringExperts/>
            <TrustedPureVegCaterers/>
        </div>
    
  )
}

export default ServiceCategoryPage