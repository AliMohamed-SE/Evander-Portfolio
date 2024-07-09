// Styles
import "../assets/Styles/Home.css";

// Components
import HomeSection1 from '../Components/HomeSection1';
import HomeSection2 from '../Components/HomeSection2';
import HomeSection3 from '../Components/HomeSection3';
import HomeSection4 from '../Components/HomeSection4';
import HomeSection5 from '../Components/HomeSection5';

function Home() {
    return (
        <section className="Home-Section">
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
        </section>
    );
}

export default Home;
