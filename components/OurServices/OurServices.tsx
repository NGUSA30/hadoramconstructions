import React from 'react';

import { MdArchitecture, MdBuild, MdDesignServices, MdLandscape, MdOutlineHome } from 'react-icons/md';

const OurServices = () => {
    return (
        // <div className="relative w-full h-auto py-24 bg-cover bg-center bg-[url('/images/2.JPG')] flex flex-col">
        // <div className="absolute inset-0 bg-black/80">
        <div className="relative w-full h-auto py-20 bg-cover bg-center bg-polarDriftColor flex flex-col">

            <h1 data-aos="fade-up"  className="font-bold pt-2 md:pt-4 text-black text-3xl md:text-4xl text-center">
                Our <span className="text-black">Services</span>
            </h1>
            <p data-aos="fade-up" className='text-black text-justify pt-4 md:pt-4 text-md md:text-xl px-6 md:px-10 lg:px-14 xl:px-16'>
                At Hadoram Contracting, quality is at the core of everything we do. From concept to completion, we deliver exceptional craftsmanship, attention to detail, and innovative solutions that exceed expectations.
                Trust us to build with precision, reliability, and excellence—every time.
            </p>

            {/* MAIN GRID */}
            <div className="relative w-[90%] mt-10 md:mt-20 gap-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {/* Architectural Design */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="p-4 w-fit  bg-poseyBlueColor">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-opacity-20 bg-black">
                            <MdArchitecture className="w-12 h-12 text-tostadaColor" />
                        </div>
                        <h1 className='text-black font-bold text-xl'>Architectural Design</h1>
                    </div>
                    <p className='text-black py-2 leading-relaxed text-justify'>
                        We create custom designs for residential, commercial, and industrial spaces, including concept development, 3D modeling, and detailed blueprints while ensuring code compliance.
                    </p>
                </div>

                {/* Renovation */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className="p-4 w-fit  bg-poseyBlueColor">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-opacity-20 bg-black">
                            <MdDesignServices className="w-12 h-12 text-tostadaColor" />
                        </div>
                        <h1 className='text-black font-bold text-xl'>Renovation</h1>
                    </div>
                    <p className='text-black py-2 leading-relaxed text-justify'>
                        We upgrade and modernize existing spaces with structural changes, room reconfigurations, and modern finishes to meet your evolving needs.
                    </p>
                </div>

                {/* Interior Design */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-4 w-fit  bg-poseyBlueColor">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-opacity-20 bg-black">
                            <MdOutlineHome className="w-12 h-12 text-tostadaColor" />
                        </div>
                        <h1 className='text-black font-bold text-xl'>Interior Design</h1>
                    </div>
                    <p className='text-black py-2 leading-relaxed text-justify'>
                        We design personalized interiors by selecting materials, furniture, and lighting that balance style, functionality, and your unique preferences.
                    </p>
                </div>

                {/* Construction */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" className="p-4 w-fit  bg-poseyBlueColor">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-opacity-20 bg-black">
                            <MdBuild className="w-12 h-12 text-tostadaColor" />
                        </div>
                        <h1 className='text-black font-bold text-xl'>Construction</h1>
                    </div>
                    <p className='text-black py-2 leading-relaxed text-justify'>
                        We manage the construction process from planning to execution, ensuring high-quality, safe, and timely delivery of residential, commercial, and industrial projects.
                    </p>
                </div>

                {/* Landscape Design */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-4 w-fit  bg-poseyBlueColor">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-opacity-20 bg-black">
                            <MdLandscape className="w-12 h-12 text-tostadaColor" />
                        </div>
                        <h1 className='text-black font-bold text-xl'>Landscape Design</h1>
                    </div>
                    <p className='text-black py-2 leading-relaxed text-justify'>
                        We design functional and beautiful outdoor spaces with gardens, patios, and sustainable features that enhance your property&apos;s appeal.
                    </p>
                </div>

            </div>
        </div>

    );
}

export default OurServices;
