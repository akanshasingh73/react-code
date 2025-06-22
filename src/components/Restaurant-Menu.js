import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);
    const json = await data.json();
    setRestaurantMenu(json.data);
  };

  if (!restaurantMenu) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;

  const menuList =
    restaurantMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-info">
          {cuisines.join(", ")}· {costForTwoMessage}
        </p>
      </div>

      <div className="menu-section">
        <h2>Menu</h2>
        <ul className="menu-list">
          {menuList.map((menu) => {
            return (
              <li key={menu.card.info.id} className="menu-item">
                <div>
                  <h4>{menu.card.info.name}</h4>
                  {menu.card.info?.description && (
                    <p>{menu.card.info?.description}</p>
                  )}
                  {menu.card.info?.ratings.aggregatedRating.rating && (
                    <div className="rating">
                      ⭐ {menu.card.info?.ratings.aggregatedRating.rating}
                    </div>
                  )}
                </div>
                <span className="price">
                  ₹
                  {menu.card.info.price / 100 ||
                    menu.card.info.defaultPrice / 100}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
