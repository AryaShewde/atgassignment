import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='footer d-flex justify-content-around'>
                <div className='d-flex flex-column'>
                    <h3 className='bold'>Hobbycue</h3>
                    <h4>About Us</h4>
                    <h4>Our Services</h4>
                    <h4>Work with Us</h4>
                    <h4>FAQ</h4>
                    <h4>Contact Us</h4>
                </div>
                <div className='d-flex flex-column'>
                    <h3 className='bold'>How Do I</h3>
                    <h4>Sign Up</h4>
                    <h4>Add a Listing</h4>
                    <h4>Claim Listing</h4>
                    <h4>Post a Query</h4>
                    <h4>Add a Blog Post</h4>
                    <h4>Other Queries</h4>
                </div>
                <div className='d-flex flex-column'>
                    <h3 className='bold'>Quick Links</h3>
                    <h4>Listings</h4>
                    <h4>Blog Posts</h4>
                    <h4>Shop / Store</h4>
                    <h4>Community</h4>
                </div>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex flex-column'>
                        <h3 className='bold'>Social Media</h3>
                        <div className='d-flex gap-2'>
                            <div className='social'><FaFacebookF /></div>
                            <div className='social'><FaTwitter /></div>
                            <div className='social'><FaInstagram /></div>
                            <div className='social'><FaPinterest /></div>
                            <div className='social'><FaGooglePlusG /></div>
                            <div className='social'><FaYoutube /></div>
                            <div className='social'><FaTelegramPlane /></div>
                            <div className='social'><MdMail /></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3 className='bold'>Invite Friends</h3>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="inpserend m-0" type="search" placeholder="Email Id" aria-label="Search" />
                                <button className="searchiconend border border-0" type="submit">Invite</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lastfooter'><p>© Purple Cues Private Limited</p></div>
        </>
    )
}

export default Footer
