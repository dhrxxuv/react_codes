import { useDispatch } from "react-redux";
import { useTheme } from "../utils/useContextTheme"; // Make sure this is the correct import for your custom hook
import { addItem } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
  const theme = useTheme(); // Get the theme from context
  const dispatch = useDispatch()
  
  const handleAddItem = ()=>{
    //dispatch action 
    dispatch(addItem("pizaaaaaaaaa"))
  }
  
  
  return (
    <div className={`p-6 space-y-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
     
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className={`border ${theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
        >
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            {/* Image */}
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="w-32 h-32 object-cover rounded-xl shadow-md"
            /> {/* Larger image with rounded corners */}

            <div className="flex flex-col sm:flex-row sm:space-x-6 sm:items-center w-full">
              {/* Item Name and Price */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <span
                  className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                >
                  {item.card.info.name}
                </span>
                <span
                  className={`text-lg font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
                >
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-sm italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {item.card.info.description}
          </p>

          {/* Optional 'Add to Cart' Button */}
          <div className="mt-4 flex justify-end">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={handleAddItem}

              >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
