import Image from "next/image";
import "@/app/globals.css";

export default function LandingTitle() {
  return (
    <div className="z-50 h-screen ">
      {/* Background Image */}
      <Image 
        src="/images/1.jpg"
        alt="Title"
        layout="fill"
        objectFit="cover"
        quality={100}   
        className="bg-none"
      />
      
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-none text-center px-4">
        <div 
          className="text-5xl md:text-7xl sm:text-4xl text-white z-20 mb-4" 
          style={{ fontFamily: 'Thai' }}
        >
          HoLy Bake
        </div>
        <div 
          className="text-2xl md:text-3xl sm:text-xl text-white z-20" 
          style={{ fontFamily: 'Thai' }}
        >
          ขนมอร่อย มีคุณภาพ ไร้ไขมันทรานส์
        </div>
      </div>
    </div>
  );
}
