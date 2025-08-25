 import HomeHero from "../components/HomeHero";
import HomeOverview from "../components/HomeOverview";
import HomeTittle from "../components/HomeTittle";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeTittle />
      <HomeOverview />
      <HomeFooter />
    </div>
  );
}

export default Home;