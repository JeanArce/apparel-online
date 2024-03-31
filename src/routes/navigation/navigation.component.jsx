import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";


import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {

   const { isCartOpen } = useContext(CartContext);


    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer>
            <Logo width={45} height={45} />
          </LogoContainer>

          <NavLinks>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <CartIcon />
          </NavLinks>

          {isCartOpen && <CartDropdown></CartDropdown>}
        </NavigationContainer>

        <Outlet />

        <Footer></Footer>
      </Fragment>
    );
};

export default Navigation;