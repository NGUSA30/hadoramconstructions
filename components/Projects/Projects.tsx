"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faArrowLeft,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import Image from "next/image";
import db from "../../static-db/gallery.json";
import { gallery } from "../../static-db/models/gallery";
const Projects = () => {
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [imgPop, setImgPop] = useState<boolean>(false);

    const swipeImg = (moveType: string) => {
        if (moveType == "prv") {
            if (selectedImg == 0) setSelectedImg(db.gallery.length - 1);
            else setSelectedImg(selectedImg - 1);
        }

        if (moveType == "nxt") {
            if (selectedImg == db.gallery.length - 1) setSelectedImg(0);
            else setSelectedImg(selectedImg + 1);
        }
    };

    return (
        <section data-aos="fade-right" data-aos-anchor-placement="top-center" className="bg-no-repeat bg-cover bg-center bg-[url('/images/2.jpg')] ">
            <div className="w-full bg-black/60 ">
                <h1 data-aos="fade-up"  className="font-bold pt-10 md:pt-24 text-tostadaColor text-3xl md:text-4xl text-center">
                    Projects
                </h1>
                <p data-aos="fade-up" className="text-white text-justify pt-12 md:pt-16 text-md md:text-xl px-6 md:px-10 lg:px-14 xl:px-16">
                    At Hadoram, we blend innovation with craftsmanship to create
                    exceptional architectural designs and high-quality constructions. Our
                    works range from contemporary structures to timeless masterpieces,
                    each built with precision, functionality, and aesthetic appeal.
                    Explore our gallery to witness our dedication to transforming visions
                    into reality.
                </p>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100" className="container mx-auto">
                    <div className="md:flex md:flex-wrap items-center justify-center py-10 px-6 ">
                        {db.gallery.map((loc: gallery, i: number) => {
                            return (
                                <a
                                    onClick={() => {
                                        setSelectedImg(i);
                                        setImgPop(true);
                                    }}
                                    key={i}
                                    className="w-1/5 cursor-pointer hover:scale-110 transition-all ease-linear"
                                >
                                    <Image
                                        src={`/gallery/${loc.img}`}
                                        width={300}
                                        height={250}
                                        alt={loc.name}
                                        className="w-full h-64 object-cover"
                                    />
                                </a>
                            );
                        })}
                    </div>
                    {imgPop && (
                        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-85 justify-between flex items-center z-[100] gap-3">
                            <a
                                onClick={() => {
                                    setImgPop(false);
                                }}
                                className="absolute top-2 right-2 cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    className="w-5 h-5  text-white"
                                    icon={faTimes}
                                    title="Close"
                                />
                            </a>
                            <a
                                onClick={() => { swipeImg('prv') }}
                                className="ml-2 hover:translate-x-2 transition-all ease-linear cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    className="w-5 h-5  text-white"
                                    icon={faArrowLeft}
                                    title="Left"
                                />
                            </a>
                            <div>
                                <Image
                                    src={`/gallery/${db.gallery[selectedImg].img}`}
                                    alt={db.gallery[selectedImg].name}
                                    width={850}
                                    height={600}
                                    className=" w-full max-w-[650px] h-auto"
                                />
                                <h3 className="text-center text-poseyBlueColor font-bold text-lg md:text-3xl mt-3">{db.gallery[selectedImg].name}</h3>
                            </div>
                            <a
                                onClick={() => { swipeImg('nxt') }}
                                className="mr-2 hover:-translate-x-2 transition-all ease-linear cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    className="w-5 h-5  text-white"
                                    icon={faArrowRight}
                                    title="Right"
                                />
                            </a>
                            <nav className="absolute left-0 right-0 bottom-5 flex justify-center px-4 gap-3">
                                {
                                    db.gallery.map((loc: gallery, i: number) => {
                                        return (
                                            <a
                                                key={i}
                                                onClick={() => { setSelectedImg(i) }}
                                                className={`hover:translate-y-2 transition-all ease-linear cursor-pointer ${selectedImg == i ? "-translate-y-2" : ""}`}
                                            >
                                                <Image src={`/gallery/${loc.img}`} className={`md:w-[100px] md:h-{80px}`} alt={loc.name} width={200} height={180} />
                                            </a>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
