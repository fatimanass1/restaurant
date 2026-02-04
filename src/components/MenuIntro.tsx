import menuImg from "../assets/menu-dish.jpg";

const MenuIntro = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* LEFT – TEXT */}
        <div>
          <p className="text-orange-400 uppercase tracking-widest mb-3">
            Taste the mood
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Menu
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Discover our carefully crafted menu made with fresh ingredients,
            bold flavors, and a passion for great food. Every bite is designed
            to give you an unforgettable experience.
          </p>

          <div className="flex gap-4">
            <button className="border border-orange-400 text-orange-400
                               px-6 py-3 rounded-full hover:bg-orange-400
                               hover:text-black transition">
              Book your table
            </button>

            <button className="border border-white px-6 py-3 rounded-full
                               hover:bg-white hover:text-black transition">
              View Menu
            </button>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={menuImg}
            alt="Menu Dish"
            className="rounded-3xl shadow-2xl max-w-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default MenuIntro;
