import React from 'react'
import { FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa";

const Lists = () => {
    return (
        <div className='lists d-flex flex-column gap-5'>
            <div className='d-flex gap-5 singset'>
                <div className='sinlist1 sinlist d-flex flex-column rounded'>
                    <div className='d-flex align-items-center'>
                        <FaUsers className='fs-3 m-3 icon1' />
                        <h3>People</h3>
                    </div>
                    <p className='m-3 fs-5'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className='fit-content rounded bg-transparent listbtn'>Connect</button>
                </div>
                <div className='sinlist2 sinlist d-flex flex-column rounded'>
                    <div className='d-flex align-items-center'>
                        <IoLocationSharp className='fs-3 m-3 icon2' />
                        <h3>People</h3>
                    </div>
                    <p className='m-3 fs-5'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className='fit-content rounded bg-transparent listbtn'>Connect</button>
                </div>
            </div>
            <div className='d-flex gap-5 singset'>
                <div className='sinlist3 sinlist d-flex flex-column rounded'>
                    <div className='d-flex align-items-center'>
                        <PiShoppingCartSimpleFill className='fs-3 m-3 icon3' />
                        <h3>People</h3>
                    </div>
                    <p className='m-3 fs-5'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className='fit-content rounded bg-transparent listbtn'>Connect</button>
                </div>
                <div className='sinlist4 sinlist d-flex flex-column rounded'>
                    <div className='d-flex align-items-center'>
                        <FaCalendarCheck className='fs-3 m-3 icon4' />
                        <h3>People</h3>
                    </div>
                    <p className='m-3 fs-5'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    <button className='fit-content rounded bg-transparent listbtn'>Connect</button>
                </div>
            </div>
        </div>
    )
}

export default Lists
