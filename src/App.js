import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHome from "./home/AppHome";
import CategoryJacket from "./category/Category";
import Login from "./login/Login.js";
import Registrasi from "./registrasi/Registrasi.js";
import Detail from "./detail/Detail.js";
import Cart from "./cart/Cart.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/category/:nama" component={CategoryJacket} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Registrasi} />
        <Route path="/detail" component={Detail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
