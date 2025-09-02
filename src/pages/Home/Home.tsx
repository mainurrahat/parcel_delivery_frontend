import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import OverviewSection from "./OverviewSection/OverviewSection";
import Services from "./services/services";
import Testimonials from "./testimonials/testimonials";
import TrackingSection from "./TrackingSection/TrackingSection";

const Home = () => {
  return (
    <div>
      <h1>home.tsx</h1>
      <Hero></Hero>
      <Marquee></Marquee>
      <Services></Services>
      <TrackingSection></TrackingSection>
      <OverviewSection></OverviewSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
