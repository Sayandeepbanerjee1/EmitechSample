import About from "./About";
import Clients from "./Client";
import Hero from "./Hero";
// import Portfolio from "./Portfolio";
import ServicesSection from "./Services";
import Stat from "./Stat";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ServicesSection />
            {/* <Portfolio /> */}
            <Clients />
            <Stat />
        </>
    )
}

export default Home;