
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home,Login,Signup} from './pages/index.js'
import {Provider} from 'react-redux'
import { store } from './store/store.js'
const router=createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
 
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
  
   
   <RouterProvider router={router}/>
  
   
    <App />
     
    </Provider>
)
