import { GrLanguage } from "react-icons/gr";
const Navbar = () => {
  return (
    <div className="bg-[#F5F4F2] border-b border-borderColor py-3 text-[10px] md:text-[17px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div>Logo</div>
            <div className="border border-borderColor p-1 rounded-md">
              <form className="bg-transparent">
                <select name="Address" className="bg-transparent ">
                  <option value="newAddress">Add A New Address</option>
                  <option value="oldAddress" selected>Kabanbai street, 25</option>
                </select>
              </form>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 justify-center items-center">
              <GrLanguage></GrLanguage>
              <p>English</p>
            </div>
            <button className="p-2 bg-bgColor rounded-xl font-bold px-3">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
