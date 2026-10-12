import React from "react";
import "../../Styles/HomePage.css";


import LookingFor from "../../components/Common/Home/LookingFor";
import PlanningFor from "../../components/Common/Home/PlanningFor";
import MostHappeningEvents from "../../components/Common/Home/MostHappeningEvents";
import ExploreServices from "../../components/Common/Home/ExploreServices";
import FeaturedProviders from "../../components/Common/Home/FeaturedProviders";
import ContactSection from "../../components/Common/Home/ContactSection";

function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <section className="landing-section">
        <div className="main-event transition-transform duration-700 hover:scale-[1.02] hover:contrast-125">
          <img src={"https://res.cloudinary.com/porwmjke/image/upload/v1791784095/main-event.png"} alt="event" />

          <div className="main-content transition-transform duration-300 hover:-translate-y-2">
            <h1>We Organize.</h1>

            <h2>
              You <span>CELEBRATE!</span>
            </h2>

            <p>
              Vibely is your ultimate <span>event planning hub.</span>
            </p>
          </div>
        </div>

        <div className="side-images">
          <div className="side-card transition-transform duration-700 hover:scale-[1.02] hover:contrast-125">
            <img src={"https://res.cloudinary.com/porwmjke/image/upload/v1791784108/mehandi.png"} alt="Premium Events" />
            <p>. Premium Events Stage Sets</p>
          </div>

          <div className="side-card transition-transform duration-700 hover:scale-[1.02] hover:contrast-125">
            <img src={"https://res.cloudinary.com/porwmjke/image/upload/v1791784132/stage.png"} alt="Outdoor Mehendi" />
            <p>. Outdoor Mehendi / Family Events</p>
          </div>
        </div>
      </section>

      <LookingFor />
      <PlanningFor />
      <MostHappeningEvents />
      <ExploreServices />
      <FeaturedProviders />
      <ContactSection />
    </div>
  );
}

export default HomePage;