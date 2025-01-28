import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restname, menuCards } = useRestaurantMenu(id);
  const[index,setShowIndex] = useState(null)



console.log(menuCards)
  const filtercarts = menuCards.filter(c=>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' )
  console.log(filtercarts)
  
  
  
  return (
    // <div style={{ padding: '20px' }}>
    //   {loading && <p>Loading menu...</p>}
    //   {error && <p style={{ color: 'red' }}>{error}</p>}

    //   {!loading && !error && restaurantDetails && (
    //     <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    //       <h1>{restaurantDetails.name}</h1>
    //       <p>{restaurantDetails.areaName}, {restaurantDetails.city}</p>
    //       <p>Rating: {restaurantDetails.avgRating || 'Not available'} ★</p>
    //       <p>Cost for two: ₹{restaurantDetails.costForTwo / 100 || 'N/A'}</p>
    //     </div>
    //   )}

    //   {!loading && !error && menuCards.length > 0 && (
    //     <div>
    //       {menuCards.slice(0, 3).map((card, index) => {
    //         const cardData = card?.card?.card;

    //         if (!cardData) return null;

    //         if (cardData.carousel) {
    //           return (
    //             <div key={index} className="carousel-card" style={{ marginBottom: '20px' }}>
    //               <h3>{cardData.title || 'Top Picks'}</h3>
    //               <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
    //                 {cardData.carousel.slice(0, 5).map((item, idx) => (
    //                   <div key={idx} style={{ minWidth: '200px', textAlign: 'center' }}>
    //                     <img
    //                       src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.dish.info.imageId}`}
    //                       alt={item.dish.info.name}
    //                       style={{ width: '100%', borderRadius: '10px' }}
    //                     />
    //                     <p>{item.dish.info.name}</p>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           );
    //         } else if (cardData.itemCards) {
    //           return (
    //             <div key={index} className="items-card" style={{ marginBottom: '20px' }}>
    //               <h3>{cardData.title || 'Recommended Items'}</h3>
    //               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
    //                 {cardData.itemCards.slice(0, 3).map((itemCard, idx) => (
    //                   <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px' }}>
    //                     <h4>{itemCard.card.info.name}</h4>
    //                     {itemCard.card.info.imageId && (
    //                       <img
    //                         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemCard.card.info.imageId}`}
    //                         alt={itemCard.card.info.name}
    //                         style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
    //                       />
    //                     )}
    //                     <p>{itemCard.card.info.price ? `₹${itemCard.card.info.price / 100}` : 'Price not available'}</p>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           );
    //         }

    //         return null;
    //       })}
    //     </div>
    //   )}
    // </div>

<div className="w-full max-w-7xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
  {/* Restaurant Name Section */}
  <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{restname}</h1>
  
  {/* Menu Categories Section */}
  <div className="space-y-8">
    {filtercarts.map((cards, index) => (
      <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        <RestaurantCategory 
        data={cards?.card?.card} 
        showItem = {index===0 && true}
        setShowIndex={()=>setShowIndex}
        />
      </div>
    ))}
  </div>
</div>

  );
};

export default RestaurantMenu;
