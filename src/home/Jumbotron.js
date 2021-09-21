import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const JumbotronImg = (props) => {
  return (
    <div>
      <Jumbotron>
        <div className="text-center position-relative">
          <h1 className="display-3 title-jumbotron">
            New <span>Day</span> <br /> New <span>Fashion</span>
          </h1>
          <p className="lead">
            Come shop with us at <span>affordable</span> prices
          </p>
          <Link to="/categories">
            <button className="lets-shop">Lets Shop</button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumbotronImg;
