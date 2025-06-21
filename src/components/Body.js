import { useEffect, useState } from "react";
import ResCard from "./Card";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //React Hooks

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.607211825973454&lng=77.4281413556182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(topRatedRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <ResCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
