import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MenuIntro from "../components/MenuIntro";
import PopularBurgers from "../components/PopularBurgers";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <MenuIntro />
      <PopularBurgers />
      <WhyChooseUs />
      <BurgerMenu />
      <Footer />
    </>
  );
};

export default Home;
