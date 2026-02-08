import hero from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const Hero = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="
        relative bg-black text-white
        h-[85vh] sm:h-screen
        flex items-center justify-center
      "
    >
      {/* Image */}
      <img
        src={hero}
        alt="Restaurant Hero Banner"
        className="
          absolute inset-0 w-full h-full
          object-cover
          
          /* 📱 موبايل: نغيّر نقطة القص */
          object-[center_top]
          
          /* 💻 ديسكتوب: طبيعي */
          sm:object-center
        "
      />

      {/* Buttons */}
      <div
        ref={ref}
        className={`
          absolute z-10 flex gap-4
          
          /* 📱 بالنص */
          left-1/2 bottom-20 -translate-x-1/2 flex-col sm:flex-row
          
          /* 💻 يسار */
          md:left-24 md:bottom-56 md:translate-x-0
          
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
          onClick={() => navigate("/cart")}
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
