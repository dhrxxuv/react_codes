const Restaurantcart  = ({ info }) => {
    return (
        <div className="cart">
            <img
    style={{
        width: '100%',
        height: 'auto', 
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
            <h6>{info.costForTwo}</h6>
            <h6>{info.cuisines.join(' , ')}</h6>
        </div>
    );
};



export default Restaurantcart 