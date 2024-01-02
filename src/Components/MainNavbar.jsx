import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <div>
      <div className="flex justify-start items-center md:gap-2 cursor-pointer text-[7px] md:text-[11px] lg:text-xl bg-whiteColor rounded-md md:rounded-2xl lg:rounded-3xl p-1 py-3 lg:p-3">
        {" "}
        <FaArrowLeft> </FaArrowLeft> All Resturent
      </div>
      <div>
        <h2 className="text-HedingColor font-medium text-xl md:text-2xl mt-3">
          Menu
        </h2>
        <div className="text-[8px] md:text-lg  ">
          <ul className="space-y-3 mt-2 w-full flex flex-col">
            <li className="w-[100%]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-1 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                All Items
              </NavLink>
            </li>
            <li className="w-[100%]">
              <NavLink
                to="/newItems"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-1 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                New items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comboBaskets"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Combo Baskets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/juicyChicken"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Juicy chicken
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/snacks"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Snacks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/combo"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Combo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/beverages"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Beverages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/additionally"
                className={({ isActive }) =>
                  isActive
                    ? "active flex rounded-md px-1 py-2 bg-whiteColor w-[100%]"
                    : " flex rounded-md px-0 md:px-2 py-2 hover:bg-whiteColor w-[100%]"
                }
              >
                Additionally
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
