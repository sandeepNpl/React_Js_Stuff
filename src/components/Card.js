import React from "react";
import { FaBlackTie, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
function Card(props) {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="card"
      style={{
        width: "200px",
        height: "250px",
        backgroundColor: "rgb(216, 216, 216)",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img
        src={props.item.image}
        width={300}
        height={170}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width:"100%"

        }}
      />
      <FaHeart
        size="20"
        style={{ color: isFav ? "red" : "black",margin:'3px  160px 0  0 ' }}
        onClick={() => {
          setIsFav(!isFav);
          if (isFav) {
            props.newCount(props.item);
          } else {
            props.newCount(props.item);
          }
        }}
      />
      <FaShoppingCart 

        onClick={()=>{
          props.addCart(props.id)
        }}

      />
      <br />
      <br />
      {props.item.name}
      <br /> 
      {props.item.price}
    </div>
  );
}

export default Card;
