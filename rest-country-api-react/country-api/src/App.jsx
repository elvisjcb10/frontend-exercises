
import './App.css'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },

    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
