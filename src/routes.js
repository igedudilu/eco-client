import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, MAINPAGE_ROUTE, ABOUTUS_ROUTE, VACANCY_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Vacancy from "./pages/Vacancy";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import mainPage from "./pages/mainPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: MAINPAGE_ROUTE,
        Component: mainPage
    },
    {
        path: ABOUTUS_ROUTE,
        Component: AboutUs
    },
    {
        path: VACANCY_ROUTE,
        Component: Vacancy
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
