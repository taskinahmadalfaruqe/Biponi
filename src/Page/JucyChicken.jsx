import { useEffect, useState } from "react";
import FoodLode from "../Components/FoodLode";

const JucyChicken = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/juicyChicken.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="mt-8 space-y-3">
      <h2 className="text-HedingColor font-medium  text-xl md:text-2xl">
      Juicy Chicken
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-2 items-start justify-center">
        {food.map((singledata) => (
          <FoodLode key={singledata.hex_id} singledata={singledata}></FoodLode>
        ))}
      </div>
    </div>
  );
};
export default JucyChicken;