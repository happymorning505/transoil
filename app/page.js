import MAP from "../assets/map.png";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      <div className="h-screen w-full bg-home flex items-center bg flex-col justify-center">
        <h1 className="text-white text-[60px] font-black">Welcome To Our Trans-Oil</h1>
        <h2 className="text-white text-[32px] font-black">We accept EuroCard</h2>
      </div>
      <div className="w-full flex justify-center bg-black flex-col items-center pt-20">
        <h1 className="text-white">Trans-Oil's delivery area</h1>
        <h1 className="text-[#FEF431] text-xl font-black mt-2">We deliver on time and to large parts of Styria</h1>
        <Image src={MAP} alt="map" className="w-[600px] h-auto" />
        <h1 className="text-white text-lg font-bold my-2">Delivery areas: Graz, Graz-Umgebung, Deutschlandsberg, Leibnitz, Feldbach and Voitsberg.</h1>
      </div>
      <div className="parallax">
        <div className="container"></div>
      </div>
    </div>
  )
}

export default Home;