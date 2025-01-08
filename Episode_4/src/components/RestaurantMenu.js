import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
  const [menuCards, setMenuCards] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId=${id}`
        );
        const data = await response.json();

        const cards =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        setMenuCards(cards);
        console.log(cards)
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [id]);

  const renderCard = (card, index) => {
    const cardData = card?.card?.card;

    if (!cardData) return null;

    // Identify card type and render dynamically
    if (cardData.carousel) {
      // Carousel Card
      return (
        <div key={index} className="carousel-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Top Picks'}</h3>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
            {cardData.carousel.map((item, idx) => (
              <div key={idx} style={{ minWidth: '200px', textAlign: 'center' }}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.dish.info.imageId}`}
                  alt={item.dish.info.name}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
                <p>{item.dish.info.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cardData.itemCards) {
      // Recommended Items Card
      return (
        <div key={index} className="items-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Recommended Items'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {cardData.itemCards.map((itemCard, idx) => (
              <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px' }}>
                <h4>{itemCard.card.info.name}</h4>
                {itemCard.card.info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemCard.card.info.imageId}`}
                    alt={itemCard.card.info.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                )}
                <p>{itemCard.card.info.price ? `₹${itemCard.card.info.price / 100}` : 'Price not available'}</p>
                <p>{itemCard.card.info.description || 'No description available'}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Handle other card types or unknown structures
      return (
        <div key={index} className="unknown-card" style={{ marginBottom: '20px' }}>
          <h3>{cardData.title || 'Unknown Section'}</h3>
          <p>Content not recognized or unavailable</p>
        </div>
      );
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Restaurant Menu</h1>
      {menuCards.length > 0 ? (
        menuCards.map((card, index) => renderCard(card, index))
      ) : (
        <p style={{ textAlign: 'center' }}>Loading menu...</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
