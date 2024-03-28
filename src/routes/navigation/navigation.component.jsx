import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";


import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {

   const { isCartOpen } = useContext(CartContext);


    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer>
            <CrwnLogo />
          </LogoContainer>

          <NavLinks>
            <NavLink to="/">Shop</NavLink>
            <CartIcon />
          </NavLinks>

          {isCartOpen && <CartDropdown></CartDropdown>}
        </NavigationContainer>

        <Outlet />
      </Fragment>
    );
};

export default Navigation;