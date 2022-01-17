import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log("From ProtectRoute", isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default connect(mapStateToProps, null)(ProtectedRoute);
