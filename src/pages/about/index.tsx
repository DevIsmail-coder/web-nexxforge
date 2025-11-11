import Choose from "./choose"
import Mission from "./mission"
import Teams from "./teams"


const AboutUs = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="flex flex-col gap-3 items-center justify-center">
        <Mission />
        <Choose />
        <Teams />
      </main>
    </div>
  )
}

export default AboutUs
