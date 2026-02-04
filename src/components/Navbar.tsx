import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-white ">

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

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-full text-sm font-semibold ">
          Order Now
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
