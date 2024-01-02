import AppSoter from "./Components/AppSoter";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import CompanyInformation from "./Components/CompanyInformation";
import FoodLode from "./Components/FoodLode";
import Footer from "./Components/Footer";
import FreeDelivery from "./Components/FreeDelivery";
import MainNavbar from "./Components/MainNavbar";
import Navbar from "./Components/Navbar";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const App = () => {
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
          <FoodLode></FoodLode>
        </div>

        <div className="col-span-1 hidden xl:flex  bg-white rounded-t-3xl p-5 h-[100vh]">
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

export default App;
