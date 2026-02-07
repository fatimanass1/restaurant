import banner from "../assets/menu-banner.jpg";

const MenuBanner = () => {
  return (
    <section className="relative h-[300px] md:h-[380px] overflow-hidden">
      <img
        src={banner}
        alt="Burger Menu Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">
          Our <span className="text-orange-400">Burger Menu</span>
        </h1>

        <p className="text-gray-300 max-w-xl">
          Discover our handcrafted burgers made with premium ingredients,
          bold flavors, and unforgettable taste in every bite.
        </p>
      </div>
    </section>
  );
};

export default MenuBanner;
