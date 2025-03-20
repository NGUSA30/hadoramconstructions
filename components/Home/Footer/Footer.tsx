import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faTiktok,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <div className="bg-black  pt-20 pb-20">
            <div  data-aos="fade-left" className="w-[90%] md:w-[80%]  mx-auto items-start grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* {first part} */}
                <div className="space-y-5">
                    <h1 className="text-xl text-white font-bold ">Our Services</h1>

                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        Renovation
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        Construction
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        Interior Design
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        Landscape Design
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        Archtectural Design
                    </p>
                </div>
                {/* {first part} */}
                <div className="space-y-5">
                    <h1 className="text-xl text-white font-bold ">Company</h1>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <Link href={'/'} > Home</Link>
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <Link href={'about-us'} >About Us</Link>
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <Link href={'our-services'} >Our Services</Link>
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <Link href={'projects'} >Projects</Link>
                    </p>
                    <p className="text-poseyBlueColor w-fit font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <Link href={'testimonials'} >Testimonials</Link>
                    </p>
                </div>


                <div className="space-y-5">
                    <h1 className="text-xl text-white font-bold ">Contacts</h1>
                    <p className="text-poseyBlueColor w-fit gap-x-2 flex font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <FontAwesomeIcon
                            className="w-5 h-5 text-white"
                            icon={faWhatsapp}
                            title="Instagram"
                        />

                        <a href="https://wa.me/255745244940"><span> +255-745-244-940</span></a>
                    </p>
                    <p className="text-poseyBlueColor w-fit gap-x-2 flex font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <FontAwesomeIcon
                            className="w-5 h-5 text-white"
                            icon={faPhone}
                            title="Instagram"
                        />

                        <a href="tel:+255745244940"><span> +255-745-244-940</span></a>
                    </p>

                    <p className="text-poseyBlueColor w-fit gap-x-2 flex font-medium cursor-pointer text-sm hover:text-tostadaColor">
                        <FontAwesomeIcon
                            className="w-5 h-5 text-white"
                            icon={faEnvelope}
                            title="Instagram"
                        />
                        <a href="mailto:hadoramhadoram@gmail.com"><span> info@hadoramconstructions.co.tz</span></a>

                    </p>

                </div>
                <div className="space-y-5">
                    <h1 className="text-xl text-white font-bold ">Location</h1>
                    <p className="text-poseyBlueColor w-fit gap-x-2 flex font-medium cursor-pointer text-sm hover:text-tostadaColor">

                        <FontAwesomeIcon
                            className="w-5 h-5 text-white"
                            icon={faLocation}
                            title="Instagram"
                        />
                        <a href="https://maps.apple.com/?address=Maramba%20Road,%20Kinondoni,%20Tanzania&ll=-6.791100,39.115800&q=Maramba%20Road&t=m"></a>
                        <span> Dar-es-salaam , Tanzania</span>
                        <a />
                    </p>
                </div>
                {/* <div className="space-y-3">
                    <h1 className="text-tostadaColor font-extrabold uppercase text-3xl">
                        Hadoram{" "}
                    </h1>
                    <div className="w-48 h-48 -ml-3 ">
                        <Image alt="brand-logo" src={logo} />
                    </div>
                </div> */}

            </div>
            {/* {bottom part} */}
            <div className="mt-8 w-[90%] md:w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-poseyBlueColor w-fit">
                <p className="text-left text-xs md:text-center">Copyright © 2025 Hadoram. All rights reserved</p>

                <div className="flex items-center space-x-4 mt-4 md:mt-0">

                    <span className="text-poseyBlueColor w-fit">
                        <a href="#"><FontAwesomeIcon
                            className="w-4 h-4 text-white"
                            icon={faTwitter}
                            title="Instagram"
                        /></a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/share/1FJEKRLXkJ/?mibextid=wwXIfr">
                            <FontAwesomeIcon
                                className="w-4 h-4 text-white"
                                icon={faFacebook}
                                title="Instagram"
                            />
                        </a>

                    </span>
                    <span>
                        <a href="https://www.instagram.com/hadoramconstructionn?igsh=d2ljMnN4ZXVlNXR6">
                            <FontAwesomeIcon
                                className="w-4 h-4 text-white"
                                icon={faInstagram}
                                title="Instagram"
                            />
                        </a>

                    </span>
                    <span>
                        <a href="#">
                            <FontAwesomeIcon
                                className="w-4 h-4 text-white"
                                icon={faTiktok}
                                title="Instagram"
                            />
                        </a>

                    </span>
                </div>

            </div>
        </div>
    );
};

export default Footer;
