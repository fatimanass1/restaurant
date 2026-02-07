import starter from "../assets/service1.jpg";
import burger from "../assets/service2.jpg";
import dessert from "../assets/service3.jpg";
import drink from "../assets/service4.jpg";

const services = [
  {
    title: "Crispy Starters",
    desc: "Golden fries, onion rings, and tasty bites to begin your meal.",
    image: starter,
  },
  {
    title: "Tasty Add-Ons",
    desc: "Extra cheese, crispy bacon, and flavorful sauces to make your burger even better.",
    image: burger,
  },
  {
    title: "Sweet Desserts",
    desc: "Delicious desserts to finish your meal with happiness.",
    image: dessert,
  },
  {
    title: "Cold Drinks",
    desc: "Refreshing beverages and creamy milkshakes for every taste.",
    image: drink,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Complete <span className="text-orange-400">Your Meal</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-5
                         hover:-translate-y-2 hover:shadow-orange-500/20
                         transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
