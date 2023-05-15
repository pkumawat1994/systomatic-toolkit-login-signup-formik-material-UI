import React from "react";
import stock from "../../assets/images/stock.jpg";

const Welcome = () => {
  return (
    <>
      <div className="container " style={{ backgroundColor: "#000000" }}>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <img src={stock} alt="stock-image" className="image" />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
