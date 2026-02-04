import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
import burger3 from "../assets/burger3.jpg";

const burgers = [
  {
    title: "Classic Burgers",
    image: burger1,
    tag: "Popular",
  },
  {
    title: "Special Burgers",
    image: burger2,
    tag: "Special",
  },
  {
    title: "Spicy Burgers",
    image: burger3,
    tag: "Hot",
  },
];

const PopularBurgers = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Most Popular <span className="text-orange-400">Burgers</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {burgers.map((burger, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden
                         hover:-translate-y-2 hover:shadow-orange-500/20
                         transition"
            >
              {/* Image */}
              <img
                src={burger.image}
                alt={burger.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {burger.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400 mb-4">
                  ★★★★★
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    {burger.tag}
                  </span>

                  <button className="text-sm font-semibold hover:text-orange-400 transition">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
          <span className="w-3 h-3 bg-zinc-600 rounded-full"></span>
          <span className="w-3 h-3 bg-zinc-600 rounded-full"></span>
        </div>

      </div>
    </section>
  );
};

export default PopularBurgers;
