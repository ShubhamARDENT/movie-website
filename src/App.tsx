
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Body'
import Error from './components/error'
import NavBar from './components/NavBar'


const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

function App() {
  const Approuter = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
  ])

  return <RouterProvider router={Approuter} />
}

export default App
