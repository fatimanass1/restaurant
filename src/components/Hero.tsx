import hero from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const Hero = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="h-screen bg-black flex items-center justify-center text-white relative">

      {/* Image (layer تحت) */}
      <img
        src={hero}
        alt="Restaurant Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Buttons (layer فوق + Scroll Reveal) */}
      <div
        ref={ref}
        className={`absolute z-10 left-24 bottom-56 flex gap-4
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-500 hover:bg-orange-600 hover:scale-105
                     text-black px-6 py-3 rounded-full font-semibold transition-all"
        >
          View Menu
        </button>

        <button
          onClick={() => navigate("/menu")}
          className="border border-white hover:bg-white hover:text-black
                     hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all"
        >
          Order Now
        </button>
      </div>

    </section>
  );
};

export default Hero;
