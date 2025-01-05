import React, { useState } from "react";
import Restaurantcart from "./Restaurantcart";
import resobj from "../../db/db";

const Body = () => {
    const [buttonClick, setButtonClick] = useState(false);

    const handleButtonClick = () => {
        setButtonClick((prev) => !prev); 
    };

   
    const filteredRestaurants = buttonClick
        ? resobj.filter((restaurant) => parseInt(restaurant.avgRatingString) > 3)
        : resobj;

    return (
        <div className="body">
            {/* Search Bar */}
            <div
                className="search-bar"
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        width: "300px",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                    }}
                />
                <button onClick={handleButtonClick}>Filter Button</button>
            </div>

        
            <div
                className="container"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    gap: "20px",
                    padding: "20px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                }}
            >
                {filteredRestaurants.map((restaurant) => (
                    <Restaurantcart key={restaurant.id} info={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
