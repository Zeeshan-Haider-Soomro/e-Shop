import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import LoginSignUp from "../pages/LoginSignUp";
import CheckOut from "@/pages/CheckOut";
import Order from "@/pages/Order";
import FilterData from "@/components/FilterData";
import ProductDetail from "@/pages/ProductDetail";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children:[
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
                {
                    path: "/shop",
                    element: <Shop/>
                },
                {
                    path: "/cart",
                    element: <Cart/>
                },
                {
                    path: "/loginsignup",
                    element: <LoginSignUp/>
                },
                {
                    path: "/check-out",
                    element: <CheckOut />
                },
                {
                    path: "/order-confirmation",
                    element: <Order/>
                },
                {
                    path: "filterData",
                    element: <FilterData/>
                },
                {
                    path: "product/:id",
                    element: <ProductDetail/>
                },
                {
                    path: "*",
                    element: <NotFound/>
                },

            ]
        }
    ]
)

export default router