import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdLock } from "react-icons/md";
import gogog from "../../img/goglo.png"
import faclo from "../../img/faclo.svg"

const Signin2 = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addListener(handleMediaQueryChange);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);
    return (
        <div className='d-flex flex-column gap-3'>
            {isMobile ? (
                <div className='d-flex flex-column gap-3'>
                    <input type="text" placeholder='Email' className='inpcol border border-0 rounded fs-6 p-2' />
                    <div className='d-flex align-items-center'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='texxxt inpcol border border-0 rounded fs-6 p-2'
                        />
                        <span className="ttttt" onClick={handleTogglePassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className='homegap d-flex align-items-center justify-content-between'>
                        <label className='checkl d-flex align-items-center fs-5'>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <div className='d-flex align-items-center'>
                            <MdLock className='fs-5 mx-2' />
                            <div className='fs-5'>Forgot password?</div>
                        </div>
                    </div>
                    <button className={`p-2 border border-2 border-dark conbtn my-2 rounded ${isMobile ? (""):("bg-transparent text-black")} bold`}>Continue</button>
                </div>
            ) : (
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                        <div><img className='gogimg' src={gogog} alt="" /></div>
                        <div className='m-auto'>Continue with Google</div>
                    </div>
                    <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                        <div><img className='gogimg' src={faclo} alt="" /></div>
                        <div className='m-auto'>Continue with Facebook</div>
                    </div>
                </div>
            )}
            <div className='d-flex align-items-center'>
                <hr className='dash' />
                <div className='opty'>Or connect with</div>
                <hr className='dash' />
            </div>
            {isMobile ? (
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                        <div><img className='gogimg' src={gogog} alt="" /></div>
                        <div className='m-auto'>Continue with Google</div>
                    </div>
                    <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                        <div><img className='gogimg' src={faclo} alt="" /></div>
                        <div className='m-auto'>Continue with Facebook</div>
                    </div>
                </div>
            ) : (
                <div className='d-flex flex-column gap-3'>
                    <input type="text" placeholder='Email' className='inpcol border border-0 rounded fs-6 p-2' />
                    <div className='d-flex align-items-center'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='texxxt inpcol border border-0 rounded fs-6 p-2'
                        />
                        <span className="ttttt" onClick={handleTogglePassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className='homegap d-flex align-items-center justify-content-between'>
                        <label className='checkl d-flex align-items-center fs-5'>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <div className='d-flex align-items-center'>
                            <MdLock className='fs-5 mx-2' />
                            <div className='fs-5'>Forgot password?</div>
                        </div>
                    </div>
                    <button className={`p-2 border border-2 conbtn my-2 rounded ${isMobile ? (""):("bg-transparent text-black border-dark")} bold`}>Continue</button>
                </div>
            )}
        </div>
    )
}

export default Signin2
