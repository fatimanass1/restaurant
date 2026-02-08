import banner from "../assets/about-banner.jpg";
import kitchen from "../assets/about-kitchen.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">

      {/* 🔥 Banner */}
      <section className="relative h-[260px] md:h-[320px] overflow-hidden">
        <img src={banner} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            About <span className="text-orange-400">Crust & Bite</span>
          </h1>
        </div>
      </section>

      {/* 🍔 Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

          <img
            src={kitchen}
            className="w-[400px] h-[450px] object-cover rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Craft Burgers With <span className="text-orange-400">Passion</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              At Crust & Bite, we believe great food starts with fresh ingredients
              and bold flavors. Our chefs prepare every burger with care to give
              you a delicious and memorable experience every time you visit.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-500 hover:bg-orange-600
                         text-black px-6 py-3 rounded-full font-semibold transition"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* 🍳 Our Kitchen */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inside Our <span className="text-orange-400">Kitchen</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Every burger is prepared with fresh ingredients, expert cooking,
            and a passion for delivering unforgettable flavor.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Fresh Ingredients", "Only the finest and freshest ingredients make it into our kitchen."],
              ["Handcrafted Cooking", "Each burger is carefully prepared by our skilled chefs."],
              ["Perfect Taste", "Balanced flavors and juicy bites in every single order."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-2xl p-8
                           hover:-translate-y-2 hover:shadow-orange-500/20
                           transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Stats */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["20+", "Burger Recipes"],
            ["1,000+", "Happy Customers"],
            ["300+", "Daily Orders"],
            ["5★", "Customer Rating"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-orange-400">{num}</p>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 🚀 CTA */}
      <section className="py-24 text-center bg-zinc-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Taste The <span className="text-orange-400">Difference?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Order now and enjoy the perfect burger experience.
        </p>

        <button
          onClick={() => navigate("/cart")}
          className="bg-orange-500 hover:bg-orange-600
                     text-black px-8 py-3 rounded-full font-semibold transition"
        >
          Order Now
        </button>
      </section>

    </div>
  );
};

export default About;
