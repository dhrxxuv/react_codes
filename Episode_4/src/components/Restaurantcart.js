import { useTheme } from "../utils/useContextTheme";


const Restaurantcart = ({ info }) => {
    const theme = useTheme()
    return (
        <div
            className={`cart ${
                theme === 'dark'
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-white text-black shadow-md'
            } rounded-lg p-3 hover:shadow-lg transition-transform transform hover:scale-105`}
        >
            <img
                className="w-full h-32 object-cover rounded-t-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} // Dynamic image URL
                alt="Restaurant Thumbnail"
            />
            <div className="p-2">
                <h3 className="text-lg font-semibold truncate">{info.name}</h3>
                <h4 className="text-sm text-gray-500 dark:text-gray-300 truncate">
                    {info.locality}
                </h4>
                <h5 className="text-sm text-yellow-500 font-medium">
                    ⭐ {info.avgRatingString || info.avgRating}
                </h5>
                <h6 className="text-xs text-gray-500 dark:text-gray-300">
                    {info.sla.slaString}
                </h6>
                <h6 className="text-xs text-gray-500 dark:text-gray-300">
                    {info.costForTwo}
                </h6>
                <h6 className="text-xs text-gray-500 dark:text-gray-300 truncate">
                    {info.cuisines.join(', ')}
                </h6>
            </div>
        </div>
    );
};

export default Restaurantcart;
