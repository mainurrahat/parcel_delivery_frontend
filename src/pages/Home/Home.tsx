import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import Services from "./services/services";
import TrackingSection from "./TrackingSection/TrackingSection";

const Home = () => {
  return (
    <div>
      <h1>home.tsx</h1>
      <Hero></Hero>
      <Marquee></Marquee>
      <Services></Services>
      <TrackingSection></TrackingSection>
    </div>
  );
};

export default Home;
