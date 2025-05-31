import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <div className="bg-gray-100">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
