import Restaurantcart from "./Restaurantcart";
import resobj from "../../db/db";

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


export default Body