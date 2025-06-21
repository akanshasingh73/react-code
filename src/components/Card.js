import { CARD_IMAGE_URL } from "../utils/constant";

const ResCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = props?.resData?.info;
  return (
    <div className="res-card">
      <img src={CARD_IMAGE_URL + cloudinaryImageId}></img>
      <p>{name}</p>
      <p>{avgRating}</p>
      <p>{cuisines?.join(", ")}</p>
    </div>
  );
};

export default ResCard;
