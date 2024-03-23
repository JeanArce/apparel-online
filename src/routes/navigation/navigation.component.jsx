import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavigationContainer, LogoContainer } from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer>
            <CrwnLogo />
          </LogoContainer>


        </NavigationContainer>

        <Outlet />
      </Fragment>
    );
};

export default Navigation;