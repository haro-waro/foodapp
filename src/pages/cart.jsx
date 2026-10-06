import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const items = Object.entries(cart); // [key, item] pairs

  const total = items.reduce(
    (sum, [, item]) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
        <NavLink
          to="/menu"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          Browse Menu
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

        <div className="space-y-4">
          {items.map(([key, item]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                <p className="text-orange-500 font-bold text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2 bg-orange-500 rounded-full px-1 py-1">
                <button
                  onClick={() => decreaseQty(key)}
                  aria-label={`Decrease quantity of ${item.name}`}
                  className="w-7 h-7 flex items-center justify-center text-white font-bold text-sm hover:bg-orange-600 rounded-full transition-colors"
                >
                  −
                </button>
                <span className="text-white text-sm font-semibold w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(key)}
                  aria-label={`Increase quantity of ${item.name}`}
                  className="w-7 h-7 flex items-center justify-center text-white font-bold text-sm hover:bg-orange-600 rounded-full transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(key)}
                aria-label={`Remove ${item.name} from cart`}
                className="text-gray-400 hover:text-red-500 text-sm ml-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 mt-6 flex items-center justify-between">
          <span className="text-gray-700 font-semibold">Total</span>
          <span className="text-orange-500 font-bold text-lg">
            ${total.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;