import { useEffect, useState, Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../utils/shop/shop.util";
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import './product-detail.styles.scss';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addItemToCart, setIsCartOpen, isCartOpen } = useContext(CartContext);
    const addProductToCart = () => {
        addItemToCart(product);
        if(!isCartOpen) {
            setIsCartOpen(true);
        }
      
    };
    
    useEffect(() => {
        const getProduct = async() => {
            const productData = await fetchProductById(id);
            console.log(productData);
            setProduct(productData.data);
        };

        getProduct();
    },[id]);

    return (
      <Fragment>
        {product && (
          <div className="productDetailContainer">
            <div className="left">
              <img src={product.image.url} alt="Product Image" />
            </div>

            <div className="right">
              <h1>{product.title}</h1>
              <p className="descp">{product.description}</p>
              <p className="price">${product.price}</p>

              <Button
                onClick={() => addProductToCart()}
                type="button"
                buttonType={BUTTON_TYPE_CLASSES.inverted}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        )}
      </Fragment>
    );

};

export default ProductDetail