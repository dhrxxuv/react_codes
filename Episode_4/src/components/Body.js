import React, { useEffect, useState } from "react";
import Restaurantcart from "./Restaurantcart";
import { Shimmer } from "react-shimmer";
import { Link } from "react-router";
import { useTheme } from "../utils/useContextTheme";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [ratingFilter, setRatingFilter] = useState(0);
  const { theme } = useTheme(); // Get theme from context

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.193334&lng=78.17909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const restaurants =
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

        setOriginalList(restaurants);
        setList(restaurants);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setLoading(false);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    const filteredList = originalList.filter(
      (restaurant) => parseFloat(restaurant.info.avgRatingString) >= ratingFilter
    );
    setList(filteredList);
  }, [ratingFilter, originalList]);

  const handleSearch = () => {
    const filteredList = originalList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredList);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {[...Array(8)].map((_, index) => (
          <Shimmer key={index} className="shimmer-cart h-32 rounded-lg" />
        ))}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="text-center text-xl font-semibold dark:text-white">
        No restaurants found
      </div>
    );
  }

  return (
<div
  className={`${
    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
  } p-6 md:p-8 space-y-6`}
>
  {/* Search Bar */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
    <input
      type="text"
      placeholder="Search restaurants..."
      className="w-full md:w-2/5 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button
      className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>

  {/* Rating Filter Slider */}
  <div className="flex flex-col items-center mb-8 space-y-3">
    <label className="text-lg font-medium text-gray-800 dark:text-white">
      Filter by Rating: <span className="text-green-600 font-bold">{ratingFilter}</span>
    </label>
    <div className="relative w-4/5 md:w-2/5">
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
        className="w-full h-3 bg-gradient-to-r from-green-200 via-green-400 to-green-600 dark:from-green-600 dark:via-green-500 dark:to-green-400 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      />
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300 mt-2">
        {[0, 1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`${
              value <= ratingFilter ? 'text-green-600 font-bold' : ''
            }`}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Restaurant Cards Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {list.map((restaurant) => (
      <Link
        key={restaurant.info.id}
        to={`/restaurant/${restaurant.info.id}`}
        className="no-underline"
      >
        <Restaurantcart
          info={restaurant.info}
          className="rounded-xl shadow-lg p-5 bg-white hover:shadow-xl transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white"
        />
      </Link>
    ))}
  </div>
</div>

  );
};

export default Body;
