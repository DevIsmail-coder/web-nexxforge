import Enrol from "./enrol"
import Journey from "./journey"
import Registration from "./registration"
import School from "./school"
import Testimonial from "./testimonial"


const LandPage = () => {
  return (
    <div 
     style={{ fontFamily: "'Montserrat', sans-serif" }}
    className="w-full flex flex-col items-center">
      <Enrol />
      <Registration />
      <School />
      <Testimonial />
      <Journey />
    </div>
  )
}

export default LandPage
