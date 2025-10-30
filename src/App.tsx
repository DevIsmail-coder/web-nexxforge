import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandPage from './pages/landing'
import Signup from './Auth/signup'
import Login from './Auth/login'
import ForgotPassword from './Auth/forgot-password'
import ResetPassword from './Auth/reset-password'
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
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/forget-password",
      element: <ForgotPassword />
    }, {
      path: "/reset-password",
      element: <ResetPassword />
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
