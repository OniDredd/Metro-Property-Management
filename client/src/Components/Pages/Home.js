import HomeBanner from "../Home_Components/HomeBanner/HomeBanner";
import HomeIntro from "../Home_Components/HomeIntro/HomeIntro";
import HomeProperties from "../Home_Components/HomeProperties/HomeProperties";
import HomeSlider from "../Home_Components/HomeSlider/HomeSlider";

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