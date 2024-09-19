"use client"

import MAP from "../assets/map.png";
import HOTLINE from "../assets/hotline.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="h-screen w-full bg-home flex items-center bg flex-col justify-center">
        <h1 className="text-white text-[24px] md:text-[48px] lg:text-[68px] xl:text-[88px] font-black">Welcome To Our Trans-Oil</h1>
        <h2 className="text-white text-[20px] md:text-[32px] font-black">We accept EuroCard</h2>
      </div>
      <div className="container mx-auto">
        <div className="w-full flex justify-center bg-black flex-col items-center pt-20 pb-10">
          <h1 className="text-white">Trans-Oils delivery area</h1>
          <h1 className="text-[#FEF431] text-xl font-black mt-2">We deliver on time and to large parts of Styria</h1>
          <Image src={MAP} alt="map" className="w-[600px] h-auto" />
          <h1 className="text-white text-center text-sm lg:text-lg font-bold my-2">Delivery areas: Graz, Graz-Umgebung, Deutschlandsberg, Leibnitz, Feldbach and Voitsberg.</h1>
          <div className="p-4 bg-[#FEF431] rounded font-bold mt-8">More information about the delivery area</div>
        </div>
      </div>
      <div className="bg-black">
        <div className="parallax">
          <div className="h-[500px]"></div>
        </div>
      </div>
      <div className="absolute top-3/4 right-20 animate-bounce">
        <Image src={HOTLINE} width={150} height={105} alt="hotline" />
      </div>
    </div>
  )
}

export default Home;