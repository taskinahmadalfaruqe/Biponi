import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const AppSoter = () => {
  return (
    <div className="border-t border-borderColor py-5 bg-[#f5f5f5]">
      <div className="container">
        <h2 className="text-[#1e1e1e] font-medium  text-xl md:text-2xl">
          Even easier in the app
        </h2>
        <div className="flex gap-5 pt-5">
          <div className="flex gap-2 justify-center items-center px-3 py-1 border border-borderColor rounded-lg w-fit uppercase text-[#9b9e9c] cursor-pointer">
            <div>
              <FaApple></FaApple>
            </div>
            <div>App Soter</div>
          </div>

          <div className="flex gap-2 justify-center items-center px-3 py-1 border border-borderColor rounded-lg w-fit uppercase text-[#9b9e9c] cursor-pointer">
            <div>
              <FaGooglePlay></FaGooglePlay>
            </div>
            <div>Play Soter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSoter;
