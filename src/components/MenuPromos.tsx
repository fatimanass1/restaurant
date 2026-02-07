import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";


const MenuPromos = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        <div className="relative md:col-span-2 h-[260px] rounded-2xl overflow-hidden group">
          <img src={promo1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute left-6 bottom-6 text-white">
            <p className="text-lg text-orange-400 mb-1">Try it today</p>
            <h3 className="text-2xl md:text-3xl font-bold">Most Popular Burger</h3>
          </div>
        </div>

        <div className="flex flex-col gap-6">

          <div className="relative h-[120px] rounded-2xl overflow-hidden group">
            <img src={promo2} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-sm text-orange-400">Try it today</p>
              <h4 className="text-lg font-semibold">Sweet Dessert Combo</h4>
            </div>
          </div>

          <div className="relative h-[120px] rounded-2xl overflow-hidden group">
            <img src={promo3} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute left-4 bottom-4 text-white">
              <p className="text-sm text-orange-400">Try it today</p>
              <h4 className="text-lg font-semibold">Crispy Fries & Sauce</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuPromos;
