import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity, discountedPrice } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image.url} alt={`${title}`} />
      </div>

      <span className="name">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      {price === discountedPrice && <span className="price">{price}</span>}

      {price !== discountedPrice && (
        <span className="price">
          <strike>${price}</strike>
          <br />
          ${discountedPrice}
        </span>
      )}

      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
