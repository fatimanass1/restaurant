import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";

const Navbar = () => {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);

  // حساب العدد الكلي للمنتجات
  const count = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-white">

        {/* Logo */}
        <div className="text-2xl font-bold">
          Crust<span className="text-orange-400"> & </span>Bite
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-md font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-2 rounded-full hover:bg-white/10 transition"
          >
            <ShoppingCart size={22} />

            {/* Counter */}
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-black
                               text-xs font-bold w-5 h-5 flex items-center justify-center
                               rounded-full">
                {count}
              </span>
            )}
          </button>

          {/* Order Now Button */}
          <button
            onClick={() => navigate("/cart")}
            className="bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Order Now
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
