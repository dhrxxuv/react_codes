import React, { useEffect, useState } from "react";
import Restaurantcart from "./Restaurantcart";
import { Shimmer } from "react-shimmer";
import { Link } from "react-router";

const Body = () => {
    const [originalList, setOriginalList] = useState([]);
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [buttonClick, setButtonClick] = useState(false);
    const [buttonname, setbuttonname] = useState("filter on");

    const handleButtonClick = () => {
        setButtonClick((prev) => !prev);
    };

    useEffect(() => {
        if (buttonClick) {
            const filteredList = originalList.filter((restaurant) => {
                console.log(restaurant.info.avgRatingString);
                return parseFloat(restaurant.info.avgRatingString) > 4.5;
            });
            setbuttonname("turn off filter");
            setList(filteredList);
        } else {
            setbuttonname("turn on filter");
            setList(originalList);
        }
    }, [buttonClick, originalList]);

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await response.json();
                const restaurants =
                    json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                setOriginalList(restaurants);
                setList(restaurants);
                setLoading(false);

                console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
                setLoading(false);
            }
        };
        fetching();
    }, []);

    const handleSearch = () => {
        const filteredList = originalList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setList(filteredList);
    };

    if (loading) {
        return (
            <div className="shimmer-container">
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
                <Shimmer className="shimmer-cart" />
            </div>
        );
    }

    if (list.length === 0) {
        return <div>No restaurants found</div>;
    }

    return (
        <div className="body" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div
                className="search-bar"
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
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
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    style={{
                        padding: "10px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            <div className="filter" style={{ marginBottom: "20px" }}>
                <button
                    className="filter-btn"
                    onClick={handleButtonClick}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {buttonname}
                </button>
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
                {list.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurant/${restaurant.info.id}`}
                        style={{ textDecoration: "none" }} // Remove underline from Link
                    >
                        <Restaurantcart
                            info={restaurant.info}
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                padding: "15px",
                                backgroundColor: "#fff",
                                transition: "transform 0.3s",
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
