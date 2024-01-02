import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MainNavbar from "../Components/MainNavbar";
import Cart from "../Components/Cart";
import AppSoter from "../Components/AppSoter";
import CompanyInformation from "../Components/CompanyInformation";
import Footer from "../Components/Footer";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import Banner from "../Components/Banner";
import FreeDelivery from "../Components/FreeDelivery";
const Layouts = () => {

  return (
    <div className="bg-bgColor relative">
      <Navbar></Navbar>

      <div className="grid grid-cols-5 gap-1 md:gap-3 xl:gap-5 container pt-8 relative">
        <div className="col-span-1 sticky h-fit">
          <MainNavbar></MainNavbar>
        </div>

        <div className="col-span-4 xl:col-span-3">
          <Banner></Banner>
          <FreeDelivery></FreeDelivery>
          <Outlet></Outlet>
        </div>

        <div className="col-span-1 hidden xl:flex   rounded-t-3xl p-3 bg-whiteColor h-fit ">
          <Cart></Cart>
        </div>
      </div>

      <AppSoter></AppSoter>
      <CompanyInformation></CompanyInformation>
      <Footer></Footer>
      <div className="fixed bottom-5 left-4 h-16 w-16 rounded-full bg-[#FCE000] flex justify-center items-center">
        <BiSolidMessageRoundedDots className="text-2xl font-bold"></BiSolidMessageRoundedDots>
      </div>
    </div>
  );
};

export default Layouts;
