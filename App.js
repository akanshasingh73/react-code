import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png"
        ></img>
      </div>
      <div className="nav-bar">
        <ul className="inline-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img src={props.image}></img>
      <p>{props.resName}</p>
      <p>{props.rating}</p>
      <p>{props.cuisine}</p>
    </div>
  );
};
const MainContainer = () => {
  return (
    <div className="container">
      <div className="search"></div>
      <div className="res-container">
        <ResCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/97377e54937c079fe269d744aa66274a"
          resName="Biryani Blues"
          rating="4.2 stars"
          cuisine="Biryani, Hyderabadi, Lucknowi"
        ></ResCard>
        <ResCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_741003.JPG"
          resName="Chaayos Chai+Snacks=Relax"
          rating="4.1 stars"
          cuisine="Bakery, Beverages, Chaat, Desserts"
        ></ResCard>
        <ResCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b318c0b4bc2169550145ace1d6e791a2"
          resName="Cheesecake & Co."
          rating="4.7 stars"
          cuisine="Desserts, Bakery"
        ></ResCard>
      </div>
    </div>
  );
};

const App = () => (
  <div className="app">
    <Header></Header>
    <MainContainer></MainContainer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
