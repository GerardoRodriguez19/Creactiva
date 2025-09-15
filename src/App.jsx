import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import Header from './components/Header'
import Blog from './pages/Blog'
import Talleres from './pages/Talleres'
import Nosotros from './pages/Nosotros'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: '/talleres',
        element: <Talleres />
      },
      {
        path: '/nosotros',
        element: <Nosotros />
      }
    ]
  },
])
  
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
