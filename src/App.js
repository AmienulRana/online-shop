import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AppHome from "./home/AppHome";
import CategoryJacket from "./category/Category";
import Login from "./login/Login.js";
import Registrasi from "./registrasi/Registrasi.js";
import Detail from "./detail/Detail.js";
import Cart from "./cart/Cart.js";
import Categories from "./categories/Categories";
import Authorized from "./Authorized";

// authorized context
const AuthorizedContext = React.contexs;

function App() {
  const [status, setStatus] = useState(false);
  const login = (detail) => {
    setStatus(detail);
  };
  const [otorasi, setOtorasi] = useState({
    statusLogin: false,
    AccessToken: null,
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/category/:nama" component={CategoryJacket} />
        <Route exact path="/login" component={() => <Login login={login} />} />
        ;
        <Route path="/register" component={Registrasi} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </Router>
  );
}

export default App;
