import React from 'react'
import "../../Styles/HomePage.css"
import mainEvent from "../../assets/main-event.png"
import mehandi from "../../assets/mehandi.png"
import stage from "../../assets/stage.png"
import LookingFor from "../../components/Common/Home/LookingFor"
import PlanningFor from "../../components/Common/Home/PlanningFor"
import MostHappeningEvents from '../../components/Common/Home/MostHappeningEvents'
import ExploreServices from '../../components/Common/Home/ExploreServices'
import FeaturedProviders from '../../components/Common/Home/FeaturedProviders'
import ContactSection from '../../components/Common/Home/ContactSection'

function HomePage() {
  return (
    <div>
        <section className = "landing-section">
            <div className="main-event transition-transform duration-1500 hover:scale-105 hover:contrast-125">
                <img src = {mainEvent} alt="event"/>
            

                <div className="main-content transition-transform duration-300 hover:-translate-y-2">
                    <h1>We Organize.</h1>
                    <h2>You <span>CELEBRATE!</span></h2>
                    <p>
                        Vibely is your ultimate <span>event planning hub.</span>
                    </p>
                   
                </div>
            </div>

            <div className="side-images">
                <div className="side-card transition-transform duration-1500 hover:scale-105 hover:contrast-125">
                    <img src={mehandi} alt="Premium Events"/>
                    <p>. Premium Events Stage Sets</p>
                </div>

                <div className="side-card transition-transform duration-1500 hover:scale-105 hover:contrast-125">
                    <img src ={stage} alt="Outdoor Mehendi"/>
                    <p>. Outdoor Mehendi / Family Events</p>
                </div>

            </div>
        </section>
       <LookingFor/>
       <PlanningFor/>
       <MostHappeningEvents/>
       <ExploreServices/>
    <FeaturedProviders/>
    <ContactSection/>
    </div> 
             
  )
}

export default HomePage