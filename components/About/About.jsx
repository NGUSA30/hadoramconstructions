import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className=" bg-black py-24">
      <div className=" mx-auto w-[90%] items-center justify-center grid grid-cols-1 lg:grid-cols-2 ">
        {/* {IMAGE CONTENT} */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="mx-auto">
          <Image

            src="/images/Untitled-1.png"
            alt="about"
            width={500}
            height={400}
          />
        </div>
        {/* {TEXT CONTENT} */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className=" font-bold pt-6 w-fit text-polarDriftColor text-3xl md:text-4xl ">
            About <span className="text-tostadaColor">us</span>
          </h1>
          <div className="py-8  mx-auto flex flex-col text-polarDriftColor gap-6  ">
            <p className="text-wrap content md:text-xl text-md text-justify">
              At we specialize in creating spaces that harmonize aesthetics,
              functionality, and sustainability. With a passion for innovation
              and a commitment to excellence, we deliver bespoke architectural
              solutions that reflect our clients' unique visions. From concept
              to completion.
            </p>
            <p className="text-wrap content md:text-xl text-md text-justify">
              we collaborate closely to ensure every detail aligns with your
              goals, delivering timeless designs that inspire and transform.
            </p>
            <p className="text-wrap content md:text-xl text-md text-justify">
              Our expertise spans residential, commercial, and industrial
              projects, blending creativity with technical precision to redefine
              how spaces are experienced. At Hadoram, we don’t just design
              buildings—we craft environments that leave a lasting impression.
            </p>
            <h1 className="font-semibold text-lg">
              Hadoram Festus ,{" "}
              <span className="text-bold text-poseyBlueColor">CEO</span>
            </h1>
          </div>
          <a
            href="#"
            className="mt-5 text-polarDriftColor font-bold pb-1 border-b-2 border-tostadaColor hover:cursor-pointer"
          >
            Learn More &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
