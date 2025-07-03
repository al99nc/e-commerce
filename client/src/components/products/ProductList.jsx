import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.picture} alt={product.title} />
            <h3>{product.title}</h3>
            <p>
              <strong>${product.price}</strong>
            </p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
