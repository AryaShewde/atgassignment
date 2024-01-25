import React from 'react'
import poster from "../img/Screenshot (112).png"
import { IoIosArrowUp } from "react-icons/io";

const Poster = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: Smooth scrolling animation
        });
      };
    return (
        <>
            <div className='poster'>
                <h1 className='fst-italic'>Your <span className='s1'>Hobby</span>, Your <span className='s2'>Community</span>...</h1>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='posbtn rounded text-white border border-0 p-2 fs-5'>Get started</button>
                    <div className='top'  onClick={scrollToTop}><IoIosArrowUp /></div>
                </div>
            </div>
            <img className='posterimg' src={poster} alt="" />
        </>
    )
}

export default Poster
