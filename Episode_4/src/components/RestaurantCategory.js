import React from 'react';
import ItemList from './ItemList';
import { useTheme } from '../utils/useContextTheme'; // Assuming you have a theme context

const RestaurantCategory = ({ data, showItem, setShowIndex, index }) => {
  const theme = useTheme(); // Get the current theme from context

  // Toggle accordion state
  const handleClick = () => {
    setShowIndex(showItem ? null : index);  
  };

  return (
    <div className={`w-full max-w-4xl mx-auto my-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div
        className={`bg-white shadow-lg rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        onClick={handleClick}
      >
        {/* Accordion Header */}
        <div
          className={`flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-t-lg transition-all duration-300 ${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}
        >
          <span className={`font-extrabold text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {data.title} ({data.itemCards.length})
          </span>
          <span className={`transition-transform transform ${showItem ? 'rotate-180' : ''}`}>
            🔽 {/* Change icon when accordion is open */}
          </span>
        </div>

        {/* Accordion Body */}
        {showItem && (
          <div className={`p-6 bg-gray-50 rounded-b-lg transition-all ease-in-out duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
