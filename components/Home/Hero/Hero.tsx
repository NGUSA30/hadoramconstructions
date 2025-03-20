import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className={`relative w-full  h-[110vh] sm:h-screen bg-cover bg-center bg-[url('/images/3.jpg')] shadow-xl flex justify-center flex-col`}>
      <div  className="absolute h-[110vh] sm:h-screen inset-0 bg-black/50 justify-center mx-auto mb-[120px] md:mb-[10px]  flex gap-4 flex-col items-center ">
        <h1 data-aos="fade-up" className=" text-xl font-extrabold md:text-5xl  text-polarDriftColor">HADORAM <span className="text-tostadaColor">CONTRACTING </span><span>SERVICES</span></h1>
        <p data-aos="fade-up" className="text-white text-md md:text-xl md:text-center items-center text-wrap justify-center content text-justify px-5  font-regular">
          we specialize in crafting architectural masterpieces that blend creativity,
          functionality, and sustainability. Whether it&apos;s innovative designs, breathtaking interiors,
          or cutting-edge construction,
          we bring your dreams to life with precision and passion.
        </p>
        <Link
        data-aos="fade-up"
          href={"projects"}
          className=" px-3.5 py-2 m-1 w-fit lg:flex overflow-hidden relative group cursor-pointer border-2 font-medium border-polar text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-polarDriftColor top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-white transition duration-300 group-hover:text-black ease">
            Explore
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
