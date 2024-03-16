import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavigationContainer } from "./navigation.styles";

const Navigation = ({children, sample}) => {
    return (
      <Fragment>
        <NavigationContainer>
          <p>{children}</p>
          <p>{sample}</p>
        </NavigationContainer>

        <Outlet />
      </Fragment>
    );
};

export default Navigation;