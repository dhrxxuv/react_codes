import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); // Ensure this matches your Redux store structure

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto p-6">
        <div className="text-4xl font-bold text-center mb-10">Your Cart</div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Cart Items</h2>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">Your cart is empty.</p>
          ) : (
            <ItemList items={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;