import banner from "../assets/Banner.jpg";
import { IoMdStar } from "react-icons/io";
import { GrCircleInformation } from "react-icons/gr";
const Banner = () => {
  return (
    <div className="relative rounded-xl md:rounded-3xl overflow-hidden">
      <img
        src={banner}
        alt="Banner Image"
        className="h-[150px] md:h-[250px] lg:h-[350px] xl:h-[400px] bg-cover w-full "
      />
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          background:
            "linear-gradient(231.36deg, rgba(26, 0, 0, 0) 35.77%, #1A0000 90.7%)",
        }}
      ></div>
      <div className="absolute inset-0 flex  items-end justify-start text-white p-3 md:p-5  lg:p-10">
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold">KFC</h1>
          <div className="flex gap-3 md:gap-5 text-black">
            <div className="flex gap-1 md:gap-3 justify-center items-center bg-bgColor border border-borderColor p-1  rounded-lg md:rounded-2xl md:px-5">
              <IoMdStar className=" text-xl md:text-3xl font-bold"></IoMdStar>
              <div>
                <p className="text-sm md:text-2xl font-bold">4.5</p>
                <p className="text-sm md:text-lg">200+</p>
              </div>
            </div>
            <div className="flex gap-1 md:gap-3 justify-center items-center bg-bgColor border border-borderColor p-1  rounded-lg md:rounded-2xl px-2 md:px-5">
              <GrCircleInformation className="text-xl md:text-3xl font-bold" ></GrCircleInformation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
