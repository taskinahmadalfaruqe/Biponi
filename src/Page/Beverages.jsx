import { useEffect, useState } from "react";
import FoodLode from "../Components/FoodLode";

const Beverages = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/Beverages.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div>
      <div className="mt-8 space-y-3">
        <h2 className="text-HedingColor font-medium  text-xl md:text-2xl">
          Beverages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-2 items-start justify-center">
          {food.map((singledata) => (
            <FoodLode
              key={singledata.hex_id}
              singledata={singledata}
            ></FoodLode>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Beverages;
