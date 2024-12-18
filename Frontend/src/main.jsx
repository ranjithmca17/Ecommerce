import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import {Provider} from "react-redux";
import { store } from './redux/store.jsx'
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <RouterProvider router={router} />
    </Provider> 
)