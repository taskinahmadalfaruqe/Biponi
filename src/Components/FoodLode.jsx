import PropTypes from "prop-types";
import { MdOutlineAdd } from "react-icons/md";
import Swal from "sweetalert2";
const FoodLode = ({ singledata }) => {
  const handelItem = (data) => {
    const addCardInStorage = [];
    const localStorageCard = JSON.parse(localStorage.getItem("items"));
    if (!localStorageCard) {
      addCardInStorage.push(data);
      localStorage.setItem("items", JSON.stringify(addCardInStorage));
      location.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add To Cart Successfully",
        showConfirmButton: true,
        timer: 1500,
      });

    } else {
      addCardInStorage.push(...localStorageCard, data);
      localStorage.setItem("items", JSON.stringify(addCardInStorage));
      location.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add To Cart Successfully",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };
  return (
    <div className="bg-whiteColor p-1 lg:p-5 rounded-2xl flex flex-col gap-5 justify-between">
      <img src={singledata.image} alt="image" />
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-bold text-md lg:text-3xl">{singledata.price}</p>
          <p className="text-[8px] md:text-[12px] lg:text-[15px]">
            {singledata.food_name}
          </p>
          <p className="text-[8px] md:text-[12px] lg:text-[15px]">
            {singledata.quentity}
          </p>
        </div>
        <button
          className="flex gap-2 bg-bgColor w-full rounded-lg justify-center items-center py-2"
          onClick={() => {
            handelItem(singledata);
          }}
        >
          <MdOutlineAdd></MdOutlineAdd>
          Add
        </button>
      </div>
    </div>
  );
};

FoodLode.propTypes = {
  singledata: PropTypes.object.isRequired,
  handelItem: PropTypes.func,
};
export default FoodLode;
