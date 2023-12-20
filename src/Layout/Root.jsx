import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-2xl mt-5 mx-auto px-3">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
