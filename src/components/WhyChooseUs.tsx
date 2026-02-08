import { Leaf, Star, Truck } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const features = [
  {
    title: "Fresh Ingredients",
    desc: "We use only fresh, high-quality ingredients to make every burger perfect.",
    icon: Leaf,
  },
  {
    title: "Best Quality",
    desc: "Premium taste, carefully crafted recipes, and consistent quality.",
    icon: Star,
  },
  {
    title: "Fast Delivery",
    desc: "Hot and delicious burgers delivered fast to your door.",
    icon: Truck,
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-black text-white py-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 text-center
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="text-orange-400">Choose Us?</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          We focus on quality, taste, and fast service to give you the best burger experience.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`bg-zinc-900 rounded-2xl p-8
                  transform transition-all duration-700
                  hover:-translate-y-3 hover:shadow-orange-500/30 hover:shadow-xl
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
                                rounded-full bg-orange-500/10 text-orange-400
                                transition-transform duration-300 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
