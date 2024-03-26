import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const WebLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebLayout;
