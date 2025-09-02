import CTASection from "./CTASection/CTASection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import OverviewSection from "./OverviewSection/OverviewSection";
import Services from "./services/services";
import Testimonials from "./testimonials/testimonials";
import TrackingSection from "./TrackingSection/TrackingSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Marquee></Marquee>
      <Services></Services>
      <TrackingSection></TrackingSection>
      <OverviewSection></OverviewSection>
      <Testimonials></Testimonials>
      <FeaturesSection></FeaturesSection>
      <CTASection></CTASection>
    </div>
  );
};

export default Home;
