"use client"

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVissibility = () => {
            if (window.scrollY > 300) setIsVisible(true)
            else setIsVisible(false)
        }
        window.addEventListener("scroll", toggleVissibility)
        return (
            window.addEventListener("scroll", toggleVissibility)
        )
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div className='fixed animate-pulse bottom-4 right-4'>
            {isVisible && (
                <button onClick={scrollToTop} className='bg-poseyBlueColor rounded-full text-black h-10 w-10 flex items-center justify-center focus:outline-none'>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
