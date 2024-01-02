import PropTypes from "prop-types";
const LodeCart = ({ valu, index }) => {
  return (
    <div className="flex gap-1 justify-between items-center text-[14px] text-start w-[100%]">
      <div>{index}: </div>
      <div className="text-start w-full"> {valu.food_name}</div>
      <div>{valu.price}</div>
    </div>
  );
};

LodeCart.propTypes = {
  valu: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default LodeCart;
