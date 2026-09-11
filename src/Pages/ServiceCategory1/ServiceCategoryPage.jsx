import React from 'react'
import ServiceCategoryHero from '../../components/ServiceCategory/ServiceCategoryHero'
import FindCateringWay from '../../components/ServiceCategory/FindCateringWay'
import FeaturedCateringExperts from '../../components/ServiceCategory/FeaturedCateringExperts'
import TrustedPureVegCaterers from '../../components/ServiceCategory/TrustedPureVegCaterers'
import FlatOf from '../../components/ServiceCategory/FlatOf'
import AuthenticMeatGrill from '../../components/ServiceCategory/AuthenticMeatGrill'
import Premium from '../../components/ServiceCategory/Premium'
import Confused from '../../components/ServiceCategory/Confused'

function ServiceCategoryPage() {
  return (
    
        <div className="w-full bg-white">
            <ServiceCategoryHero/>
            <FindCateringWay/>
            <FeaturedCateringExperts/>
            <TrustedPureVegCaterers/>
            <FlatOf/>
            <AuthenticMeatGrill/>
            <Premium/>
            <Confused/>
        </div>
    
  )
}

export default ServiceCategoryPage