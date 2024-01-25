import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { IoPlay } from "react-icons/io5";
import dance from "../img/Screenshot (111).png"
import { AiFillAudio } from "react-icons/ai";

const Music = () => {
    return (
        <div className='music'>
            <div className='musicele border border-0 rounded'>
                <div className='headmuc d-flex align-items-center gap-2'>
                    <div className='logomuc'><ImQuotesLeft /></div>
                    <h3>Testimonials</h3>
                </div>
                <div>
                    <p className='my-4'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                </div>
                <div className='downmuc d-flex align-items-center justify-content-between gap-4'>
                    <div className='leftmuc rounded d-flex gap-3 align-items-center'>
                        <div className='d-flex gap-2 align-items-center'>
                            <IoPlay className='playpau' />
                            <input className='mucinp' type="range" name="" id="" value={0} />
                            <p className='m-0'>0:00</p>
                        </div>
                        <div className='danceimg'>
                            <img src={dance} alt="" />
                            <AiFillAudio className='mike' />
                        </div>
                    </div>
                    <div className='rightmuc d-flex align-items-center gap-3'>
                        <img src={dance} alt="" />
                        <div>
                            <h4 className='m-0 mucdr'>Shubha Nagarajan</h4>
                            <p className='m-0'>Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music
