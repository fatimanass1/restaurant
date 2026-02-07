import burger1 from "../assets/burgeer1.jpg";
import burger2 from "../assets/burgeer2.jpg";
import burger3 from "../assets/burgeer3.jpg";
import burger4 from "../assets/burgeer4.jpg";


const burgers = [
  { name: "Classic Beef Burger", price: "$8.50", image: burger1 },
  { name: "Cheese Lover Burger", price: "$9.00", image: burger2 },
  { name: "Spicy Jalapeño Burger", price: "$9.50", image: burger3 },
  { name: "Crispy Chicken Burger", price: "$8.00", image: burger4 },
  { name: "Double Smash Burger", price: "$11.00", image: burger1 },
  { name: "BBQ Bacon Burger", price: "$10.50", image: burger2 },
  { name: "Mushroom Swiss Burger", price: "$9.75", image: burger3 },
  { name: "House Special Burger", price: "$12.00", image: burger4 },
];

const BurgerGrid = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Best <span className="text-orange-400">Special Burgers</span>
        </h2>

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

              <h3 className="text-lg font-semibold mb-2">{burger.name}</h3>

              <div className="text-orange-400 mb-2">★★★★★</div>

              <p className="text-xl font-bold mb-4">{burger.price}</p>

              <button className="bg-orange-500 hover:bg-orange-600
                                 text-black px-5 py-2 rounded-full
                                 text-sm font-semibold transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BurgerGrid;
