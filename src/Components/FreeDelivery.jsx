import freeDeliveryIcon from "../assets/orig.png";
import { BiSolidBadge } from "react-icons/bi";
const FreeDelivery = () => {
  return (
    <div className="mt-8 rounded-xl p-1 md:p-3" style={{ background: "rgba(90, 195, 26,0.3)" }}>
      <div className="flex items-center gap-5 text-GreenColor">
        <div className="relative flex justify-center items-center">
          <BiSolidBadge className="text-GreenColor text-6xl font-bold"></BiSolidBadge>
          <img src={freeDeliveryIcon} alt="icon" className="absolute  w-8" />
        </div>
        <div className="flex flex-col font-bold">
        Free delivery <span className="font-normal">of any order </span>
        </div>
      </div>
    </div>
  );
};
export default FreeDelivery;
