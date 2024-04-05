import { useState, useEffect, Fragment } from "react";
import { fetchProducts } from "../../utils/shop/shop.util";
import ProductCard from "../../components/product-card/product-card.component";
import './home.styles.scss';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);


  
  const handleSearch = (e) => {

    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    setProductsList(filteredProducts);

  };

  useEffect(() => {
    const getProducts = async() => {
      const productsJson = await fetchProducts();

        
      setProducts(productsJson.data);
      setProductsList(productsJson.data);

    };
    getProducts();
  }, []);

  
  return (
    <Fragment>
      <h2 className="category-title">Products</h2>

      <input
        type="text"
        className="searchInput"
        name="searchInput"
        placeholder="Search Product"
        onChange={handleSearch}
      />

      {
        <div className="category-container">
          {productsList &&
            productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      }
    </Fragment>
  );



};



export default Home;