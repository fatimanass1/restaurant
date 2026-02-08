import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";

const Cart = () => {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Your <span className="text-orange-400">Cart</span>
        </h1>

        {/* إذا السلة فارغة */}
        {items.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* 🧾 Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Qty Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700"
                    >
                      −
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* 💳 Summary */}
            <div className="bg-zinc-900 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="flex justify-between mb-3 text-gray-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-6 text-gray-400">
                <span>Delivery</span>
                <span>$2.00</span>
              </div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span className="text-orange-400">
                  ${(total + 2).toFixed(2)}
                </span>
              </div>

              <button
  onClick={() => setOpen(true)}
  className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-full font-semibold transition"
>
  Checkout
</button>

            </div>
          </div>
        )}
      </div>
      <CheckoutModal open={open} onClose={() => setOpen(false)} />

    </div>
  );
};

export default Cart;
