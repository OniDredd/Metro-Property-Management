import HomeBanner from "../Home_Components/HomeBanner";
import HomeIntro from "../Home_Components/HomeIntro";
import HomeProperties from "../Home_Components/HomeProperties";
import HomeSlider from "../Home_Components/HomeSlider";

function Home() {
    return(
    <div>
        <HomeBanner />
        <HomeIntro />
        <HomeSlider />
        <HomeProperties />
    </div>
    )
}

export default Home;