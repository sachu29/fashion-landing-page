import { React, useState } from "react";
import "./NewArrivalCard.css";
import SampleImg from "../../assets/shoe-img.png";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";

const NewArrivalCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleHeartClick = () => {
    console.log("click");
    setIsClicked(!isClicked); 
  };
  return (
    <>
      <div className="card-container mb-3  col-sm-3 col-md-3">
        <div className="card-img-container mb-3">
          <img src={SampleImg} alt="" className="card-img" />
          <span className="card-wish-list fs-5" onClick={handleHeartClick}>
            {!isClicked ? <GoHeart /> : <GoHeartFill className="text-danger" />}
          </span>
        </div>
        {/*  */}
        <div className="product-content d-flex justify-content-between align-items-center">
          <div>
            <p className="product-name">Carabinar Set</p>
            <strong className="product-amount">$ 12.00</strong>
          </div>
          <div className="add-to-cart ">
            <LiaShoppingBagSolid />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalCard;
