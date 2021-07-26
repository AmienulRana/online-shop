import JumbotronImg from "./Jumbotron";
import Collection from "./Collection";
import HomeProduct from "./HomeProduct";
import Footer from "../Footer";
import Navigasi from "../Navbar";

const AppHome = () => {
  return (
    <div>
      <Navigasi />
      <JumbotronImg />
      <Collection />
      <HomeProduct />
      <Footer />
    </div>
  );
};
export default AppHome;
