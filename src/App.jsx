import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import FreeDelivery from "./Components/FreeDelivery";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-bgColor">
      <Navbar></Navbar>
      <div className="grid grid-cols-5 gap-2 container pt-8">
        <div className="col-span-1">SUB Menu</div>
        <div className="col-span-4 xl:col-span-3">
          <Banner></Banner>
          <FreeDelivery></FreeDelivery>
        </div>
        <div className="col-span-1 hidden xl:flex">Chat</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
