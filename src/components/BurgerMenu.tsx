import burger1 from "../assets/burgerr1.jpg";
import burger2 from "../assets/burgerr2.jpg";
import burger3 from "../assets/burgerr3.jpg";
import burger4 from "../assets/burgerr4.jpg";
import useScrollReveal from "../hooks/useScrollReveal";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

const burgers = [
  { name: "Classic Beef Burger", price: "$8.50", image: burger1 },
  { name: "Cheese Burger", price: "$9.00", image: burger2 },
  { name: "Spicy Burger", price: "$9.50", image: burger3 },
  { name: "Chicken Burger", price: "$8.00", image: burger4 },
];

const BurgerMenu = () => {
  const { ref, isVisible } = useScrollReveal();
  const addToCart = useCartStore((s) => s.addToCart);

  const handleAdd = (burger: typeof burgers[0], index: number) => {
    addToCart({
      id: index + 100, // نخلي ID مختلف حتى ما يتعارض ويا سكشن ثاني
      name: burger.name,
      price: Number(burger.price.replace("$", "")),
      image: burger.image,
      qty: 1,
    });

    toast.success(`${burger.name} added to cart 🛒`);
  };

  return (
    <section className="bg-black text-white py-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Regular <span className="text-orange-400">Burger Menu</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All Burgers", "Classic", "Special", "Spicy", "Chicken", "Double", "More"].map(
            (tab, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    i === 0
                      ? "bg-orange-500 text-black"
                      : "border border-zinc-700 hover:border-orange-400"
                  }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {burgers.map((burger, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 text-center
                         hover:-translate-y-2 hover:shadow-orange-500/20 transition"
            >
              <img
                src={burger.image}
                alt={burger.name}
                className="w-32 h-32 mx-auto object-cover rounded-full mb-6"
              />

              <h3 className="text-lg font-semibold mb-2">
                {burger.name}
              </h3>

              <div className="text-orange-400 mb-3">★★★★★</div>

              <p className="text-xl font-bold mb-4">
                {burger.price}
              </p>

              <button
                onClick={() => handleAdd(burger, index)}
                className="bg-orange-500 hover:bg-orange-600
                           text-black px-5 py-2 rounded-full
                           text-sm font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
