import React from "react";
//this file is just for this func that shows the porduct Card and this is helpful for styling and some other things
function ProductCard(props) {
  return (
    <div
      onClick={props.onClick}
      className="product-card border p-4 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 cursor-pointer bg-white"
    >
      <img
        src={props.img}
        alt={props.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <span className="text-green-600 font-bold">${props.price}</span>
      </div>
      <p className="text-gray-600 text-sm">{props.description}</p>
    </div>
  );
}

export default ProductCard;
