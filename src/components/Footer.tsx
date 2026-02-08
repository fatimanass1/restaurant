import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-zinc-950 text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-16 border-b border-zinc-800">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Crust<span className="text-orange-400"> & </span>Bite
            </h3>

            <p className="text-sm leading-relaxed mb-6">
              Freshly made burgers with premium ingredients and unforgettable taste.
              Taste the crunch, love the bite.
            </p>

            <button
              onClick={() => navigate("/cart")}
              className="bg-orange-500 hover:bg-orange-600 text-black
                         px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Order Now
            </button>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className="hover:text-orange-400 transition">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/menu" className="hover:text-orange-400 transition">
                  Menu
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="hover:text-orange-400 transition">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" className="hover:text-orange-400 transition">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Newsletter
            </h4>

            <p className="text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-full
                           bg-zinc-900 border border-zinc-700
                           focus:outline-none text-sm"
              />
              <button className="bg-orange-500 px-5 rounded-r-full text-black font-semibold">
                →
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between
                        py-6 text-sm gap-4">

          <p>© 2026 Crust & Bite. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-orange-400 cursor-pointer" size={18} />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-orange-400 cursor-pointer" size={18} />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-orange-400 cursor-pointer" size={18} />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="hover:text-orange-400 cursor-pointer" size={18} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
