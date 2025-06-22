import { useEffect, useState } from "react";
import ResCard from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const MainContainer = () => {
  
  // Whenever a state variable is updated, React re-triggers the reconciliation cycle (re-renders the component).
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  // If `searchText` is in the dependency array, the useEffect runs everytime whenever `searchText` changes.
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredRestaurants(allRestaurants);
    }
  }, [searchText]);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.607211825973454&lng=77.4281413556182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(topRated);
  };

  const handleKeyDown = (key) => {
    if (key === "Enter") handleSearch();
  };

  // Render shimmer while loading
  if (loading) return <Shimmer />;

  return (
    <div className="container">
      <div className="filter">
        <div>
          <input
            className="search-text"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      {filteredRestaurants.length === 0 ? (
        <p style={{ padding: "1rem", textAlign: "center", fontSize: "18px" }}>
          No restaurants found.
        </p>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
