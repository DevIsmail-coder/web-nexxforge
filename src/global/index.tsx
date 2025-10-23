
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/footer'
import Header from '../components/ui/header'

const OutletPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default OutletPage
