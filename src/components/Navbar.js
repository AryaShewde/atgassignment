import React from 'react'
import { MdSearch } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from './Popup';
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className='navbarcomp d-flex p-2 align-items-center'>
            <div className='d-flex align-items-center holelogo'>
                <p className='logo m-2 bord fst-italic fw-bold rounded'>h</p>
                <div className='logotxt'>
                    <h3 className='my-0 mx-2 titnav fst-italic fw-bold'>hobby<span>cue</span></h3>
                    <p className='my-0 mx-2 fst-italic fw-bold'>Your Hobby, Your Community</p>
                </div>
            </div>
            <div className='d-flex align-items-center mx-3 justify-content-between secnav'>
                <form className="d-flex" role="search">
                    <input className="inpser m-0" type="search" placeholder="Search here.." aria-label="Search" />
                    <button className="searchicon border border-0" type="submit"><MdSearch /></button>
                </form>
                <div className='d-flex align-items-center mx-3 marset'>
                    <div className=" dropdown mx-4 d-flex align-items-center">
                        <button className="none bg-transparent border border-0 fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdExplore className='expicon fs-4 mx-1' />Explore <MdOutlineKeyboardArrowDown />
                        </button>
                        <ul className="none dropdown-menu border border-0 w-200 rounded-0 mt-4 shadow-sm">
                            <li><a className="dropdown-item" href="#">People - Community</a></li>
                            <hr className='my-2' />
                            <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                            <hr className='my-2' />
                            <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                            <hr className='my-2' />
                            <li><a className="dropdown-item" href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div className='none'>
                        <button className="bg-transparent border border-0 fw-bold" type="button">
                            <RiShieldStarFill className='expicon fs-4 mx-1' />Hobbies <MdOutlineKeyboardArrowDown />
                        </button>
                    </div>
                    <div className='none eicon fs-4 mx-4'><FaBookmark /></div>
                    <div className='eicon2 fs-4 mx-4'><FaBell /></div>
                    <div className='none eicon fs-4 mx-4'><PiShoppingCartSimpleFill /></div>
                    <div className='signinlogo none'>
                        <button className='bg-transparent'>Sign In</button>
                    </div>
                </div>
                <div className='humburgerr'>
                    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className='eicon fs-4'><GiHamburgerMenu /></div>
                    {/* <div className='eicon fs-4'><RxCross2 /></div> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header pophe">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel"><p className='logo m-2 bord fst-italic fw-bold rounded'>h</p></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <Popup/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
