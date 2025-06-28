import React from "react";
function ProductPage(props) {
  // Render the products or a placeholder
  return (
    <div
      onClick={() => {
        return console.log("cloc");
      }}
    >
      <button>Click me</button>
    </div>
  );
}
export default ProductPage;
