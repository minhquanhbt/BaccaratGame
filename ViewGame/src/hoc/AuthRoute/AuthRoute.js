import React from "react";
import {useSelector} from 'react-redux';
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const token = useSelector(state => state.loginUser.token);
  const { type } = props;
  if (type === "guest" && token) return <Redirect to="/home" />;
  else if (type === "private" && token) return <Redirect to="/" />;
  return <Route {...props} />;
};

 
export default AuthRoute;