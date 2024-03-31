import { Routes, Route } from "react-router-dom";

import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import Success from "../../components/success/success.component";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Routes>
      <Route
        index
        element={
          <Fragment>
            <div className="checkout-container">
              <div className="checkout-wrapper">
                <div className="checkout-header">
                  <div className="header-block">
                    <span>Product</span>
                  </div>

                  <div className="header-block">
                    <span>Description</span>
                  </div>

                  <div className="header-block">
                    <span>Quantity</span>
                  </div>

                  <div className="header-block">
                    <span>Price</span>
                  </div>

                  <div className="header-block">
                    <span>Remove</span>
                  </div>
                </div>

                {cartItems.map((cartItem) => {
                  const { id } = cartItem;
                  return <CheckoutItem key={id} cartItem={cartItem} />;
                })}

                <span className="total">Total: ${cartTotal}</span>
              </div>
            </div>

            {cartItems && cartItems.length > 0 && (
              <div className="pay-container">
                <Button onClick={() => navigate('/checkout/success')} type="button" buttonType={BUTTON_TYPE_CLASSES.inverted}>
                  Pay
                </Button>
              </div>
            )}
          </Fragment>
        }
      ></Route>
      <Route 
        path="/success" 
        element={
            <Success><p>Thank you for shopping with us. Shop again</p></Success>
        }
      >  
      </Route>
    </Routes>
  );
};

export default Checkout;
