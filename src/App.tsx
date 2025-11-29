import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandPage from './pages/landing'
import Login from './Auth/login'
import OutletPage from './global'
import AboutUs from './pages/about'
import Contact from './pages/contact'
import Footer from './components/ui/footer'


function App() {

  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "",
      element: <OutletPage />,
      children: [
        {
          path: "/",
          element: <LandPage />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/contact-us",
          element: <Contact />
        },
        {
          path: "/footer",
          element: <Footer />
        },
      ]
    }
  ])


  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
