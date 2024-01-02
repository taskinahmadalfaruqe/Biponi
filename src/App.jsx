import Additionally from "./Page/Additionally";
import Beverages from "./Page/Beverages";
import Combo from "./Page/Combo";
import ComboBusket from "./Page/ComboBusket";
import JucyChicken from "./Page/JucyChicken";
import NewItems from "./Page/NewItems";
import Snaks from "./Page/Snaks";

const App = () => {

  return (
    <div className="bg-bgColor relative">
      <div className="col-span-4 xl:col-span-3">
        <NewItems></NewItems>
        <ComboBusket></ComboBusket>
        <JucyChicken></JucyChicken>
        <Snaks></Snaks>
        <Combo></Combo>
        <Beverages></Beverages>
        <Additionally></Additionally>
      </div>
    </div>
  );
};

export default App;