
import './App.css'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import CountryDetail from './pages/CountryDetail/CountryDetail'
const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/detail/:code",
        element:<CountryDetail  ></CountryDetail>
      }

    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
