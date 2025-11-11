import ScrollToTop from '../components/ScrollToTop'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/footer'
import Header from '../components/ui/header'



const OutletPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default OutletPage
