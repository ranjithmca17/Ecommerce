// import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import CategoryPage from '../pages/category/CategoryPage';
import Search from '../pages/search/Search';
import ProductsCards from '../pages/shop/ProductsCards';
import ShopPage from '../pages/shop/shopPage';
import SingleProduct from '../pages/shop/productDetails/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/categories/:categoryName',
            element: <CategoryPage/>
        },
        {path:'/search',element:<Search/>},
        {path:'/shop',
          element:<ShopPage/>
        },
        {path:'/shop/:id',element:<SingleProduct/>},

        
    ]
  }
]);


export default router;
