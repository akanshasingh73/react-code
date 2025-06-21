const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line medium"></div>
            <div className="shimmer-line long"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
