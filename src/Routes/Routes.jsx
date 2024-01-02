import { createBrowserRouter } from "react-router-dom";
import NewItems from "../Page/NewItems";
import ComboBusket from "../Page/ComboBusket";
import JucyChicken from "../Page/JucyChicken";
import Snaks from "../Page/Snaks";
import Combo from "../Page/Combo";
import Beverages from "../Page/Beverages";
import Additionally from "../Page/Additionally";
import Layouts from "../Layout/Layouts";
import App from "../App";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Layouts></Layouts>,
        children:[
            {
                path: '/',
                element: <App></App>
            },
            {
                path: '/newItems',
                element: <NewItems></NewItems>
            },
            {
                path: '/comboBaskets',
                element: <ComboBusket></ComboBusket>
            },
            {
                path: '/juicyChicken',
                element: <JucyChicken></JucyChicken>
            },
            {
                path: '/snacks',
                element: <Snaks></Snaks>
            },
            {
                path: '/combo',
                element: <Combo></Combo>
            },
            {
                path: '/beverages',
                element: <Beverages></Beverages>
            },
            {
                path: '/additionally',
                element: <Additionally></Additionally>
            }
        ]
    }
]);

export default Routes;