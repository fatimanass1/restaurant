import { X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CheckoutModal = ({ open, onClose }: Props) => {
  const { items, clearCart } = useCartStore();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!open) return null;

  const handleConfirm = () => {
    // 🔎 Validation
    if (!name.trim() || !address.trim() || !phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");

    clearCart();

    toast.success("Order placed successfully 🎉");
    onClose();

  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

      <div className="bg-zinc-900 text-white w-full max-w-md rounded-2xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Checkout
        </h2>

        {/* Items */}
        <div className="space-y-2 mb-4 max-h-32 overflow-y-auto text-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} × {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span className="text-orange-400">
            ${(total + 2).toFixed(2)}
          </span>
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none"
          />

          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">
            {error}
          </p>
        )}

        {/* Confirm */}
        <button
          onClick={handleConfirm}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-full font-semibold transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
