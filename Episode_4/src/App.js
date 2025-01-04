import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const Restaurantcart = ({ info }) => {
    return (
        <div className="cart">
            <img
    style={{
        width: '100%',
        height: 'auto', // Ensure the aspect ratio is maintained
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    }}
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} // Dynamic image URL
    alt="Restaurant Thumbnail"
/>

            <h3>{info.name}</h3>
            <h4>{info.locality}</h4>
            <h5>{info.avgRatingString || info.avgRating}</h5> {/* Use avgRatingString or avgRating */}
            <h6>{info.sla.slaString}</h6>
        </div>
    );
};

const resobj = [
    {
        id: "253987",
        name: "McDonald's",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/3cd12663-93b8-45c1-b9d4-77e77dcf0956_253987.JPG",
        locality: "DD City Mall",
        sla: {
            slaString: "25-30 mins",
        },
        avgRating: 4.4,
    },
    {
        id: "581581",
        name: "Grameen Kulfi",
        cloudinaryImageId: "sfj390yz54wis6bblzfd",
        locality: "Tensen Road",
        sla: {
            slaString: "15-20 mins",
        },
        avgRating: 4.8,
    },
    {
        id: "861483",
        name: "Pastas By Pizza Hut",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/638189d3-5ffd-483b-af1f-5eaa9988a5ad_861483.jpg",
        locality: "DD City Mall",
        sla: {
            slaString: "30-35 mins",
        },
        avgRating: 3.8,
    },
    {
        id: "575261",
        name: "Veg Daawat by Behrouz",
        cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
        locality: "University Road",
        areaName: "City Center",
        costForTwo: "₹700 for two",
        cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
        sla: {
            slaString: "30-35 mins",
        },
        avgRating: 3.8,
        veg: true,
    },
    {
        id: "458045",
        name: "Veg Meals by Lunchbox",
        cloudinaryImageId: "ulukm5zkoakkdwcaxhv7",
        locality: "University Road",
        areaName: "City Center",
        costForTwo: "₹200 for two",
        cuisines: [
                        "Biryani",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
        avgRating: 4.6,
        veg: true,
        parentId: "21938",
        avgRatingString: "4.6",
        totalRatingsString: "96",
        sla: {
                deliveryTime: 25,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
           },
        availability: {
                         nextCloseTime: "2025-01-01 05:00:00",
                         opened: true
                       }
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar"
                style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        width: '300px',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
            </div>
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '10px',
                }}
            >
                {resobj.map((restaurant) => (
                    <Restaurantcart key={restaurant.id} info={restaurant} />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="applayout">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
