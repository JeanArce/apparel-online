import { useState, useEffect, Fragment } from "react";
import { fetchProducts } from "../../utils/shop/shop.util";
import ProductCard from "../../components/product-card/product-card.component";
import './home.styles.scss';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async() => {
            const productsJson = await fetchProducts();

            console.log(productsJson);
            setProducts(productsJson.data);
        };
        getProducts();
    }, []);

  
    return (
      <Fragment>
        <h2 className="category-title">Products</h2>

        {
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        }
      </Fragment>
    );
};



export default Home;