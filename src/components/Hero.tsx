import heroDesktop from "../assets/hero.jpg";
import heroMobile from "../assets/hero-mobile.jpg";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const Hero = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">

      {/* Desktop Image */}
      <img
        src={heroDesktop}
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        alt="Restaurant Hero"
      />

      {/* Mobile Image */}
      <img
        src={heroMobile}
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        alt="Restaurant Hero Mobile"
      />

      {/* Buttons */}
      <div
        ref={ref}
        className={`
          absolute z-10 flex gap-4 flex-col sm:flex-row
          left-1/2 bottom-24 -translate-x-1/2
          sm:left-24 sm:bottom-56 sm:translate-x-0
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold"
        >
          View Menu
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold"
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
