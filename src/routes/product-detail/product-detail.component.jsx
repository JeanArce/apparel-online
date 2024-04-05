import { useEffect, useState, Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../utils/shop/shop.util";
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import StarRatings from "react-star-ratings";
import './product-detail.styles.scss';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addItemToCart, setIsCartOpen, isCartOpen } = useContext(CartContext);
    const addProductToCart = () => {
        addItemToCart(product);
        if(!isCartOpen) {
            setIsCartOpen(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
        }
      
    };
    
    useEffect(() => {
        const getProduct = async() => {
          const productData = await fetchProductById(id);
          setProduct(productData.data);
        };

        getProduct();
    },[id]);

    return (
      <Fragment>
        {product && (
          <Fragment>
            <div className="productDetailContainer">
              <div className="left">
                <img src={product.image.url} alt="Product Image" />
              </div>

              <div className="right">
                <h1>{product.title}</h1>
                <p className="descp">{product.description}</p>
                {product.price !== product.discountedPrice && (
                  <p className="price">
                    <strike>${product.price}</strike> ${product.discountedPrice}
                  </p>
                )}

                {product.price === product.discountedPrice && (
                  <p className="price">${product.price}</p>
                )}

                <Button
                  onClick={() => addProductToCart()}
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.inverted}
                >
                  Add To Cart
                </Button>

                <div className="reviewsContainer">
                  {product.reviews && product.reviews.length > 0 && (
                    <Fragment>
                      <h2>Reviews</h2>
                      <ul>
                        {product.reviews.map((el, i) => {
                          return (
                            <li key={i}>
                              <strong>{el.username}</strong>, {el.description}{" "}
                              <StarRatings
                                rating={el.rating}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="blue"
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );

};

export default ProductDetail