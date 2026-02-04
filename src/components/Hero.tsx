import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
<section className="h-screen bg-black flex items-center justify-center text-white">        
      {/* Image (layer تحت) */}
      
      <img
        src={hero}
        alt="Restaurant Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Buttons (layer فوق) */}
<div className="absolute z-10 left-24 bottom-56 flex gap-4">
  <button
    className="bg-orange-500 hover:bg-orange-600 hover:scale-105
               text-black px-6 py-3 rounded-full font-semibold transition-all"
  >
    View Menu
  </button>

  <button
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
