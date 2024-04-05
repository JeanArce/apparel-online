import { Fragment } from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { title, quantity, image, price, discountedPrice } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={image.url} alt={`${title}`} />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x
          {price !== discountedPrice && (
            
            <span>
              <strike>${price}</strike>
              ${discountedPrice}
            </span>
          )}

          {price === discountedPrice && <span>${discountedPrice}</span> }

        </span>
      </div>
    </div>
  );
};

export default CartItem;
