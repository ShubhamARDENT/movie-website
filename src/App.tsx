
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Body'
import Error from './components/error'
import NavBar from './components/NavBar'
import Pokedex from './components/pokdex'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const Applayout = () => {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
      </QueryClientProvider>
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
        },
        {

          path: '/pokedex',
          element: <Pokedex />
        }
      ]
    },
  ])

  return <RouterProvider router={Approuter} />
}

export default App
