import { Leaf, Star, Truck } from "lucide-react";

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
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

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
                className="bg-zinc-900 rounded-2xl p-8
                           hover:-translate-y-2 hover:shadow-orange-500/20
                           transition"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
                                rounded-full bg-orange-500/10 text-orange-400">
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
