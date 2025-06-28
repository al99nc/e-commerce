import ProductCard from "./ProductCard";
import { fetchProductById } from "../../services/api";

function ProductList(props) {
  const handleProductClick = async (id) => {
    const product = await fetchProductById(id);
    console.log("Fetched product:", product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {props.products.map((product) => {
        console.log("Product in list:", product);
        return (
          <ProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            onClick={() => handleProductClick(product.id)}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
