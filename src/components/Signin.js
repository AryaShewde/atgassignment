import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdLock } from "react-icons/md";
import gogog from "../img/goglo.png"
import faclo from "../img/faclo.svg"

const Signin = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='d-flex flex-column gap-3'>
            <input type="text" placeholder='Email' className='inpcol border border-0 rounded fs-6 p-2' />
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                className='texxt inpcol border border-0 rounded fs-6 p-2'
            />
            <span className="toggle-password" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <div className='d-flex align-items-center justify-content-between'>
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
            <button className='p-2 border border-0 conbtn my-2 rounded'>Continue</button>
            <div className='d-flex align-items-center'>
                <hr className='dash'/>
                <div className='opty'>Or connect with</div>
                <hr className='dash'/>
            </div>
            <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                <div><img className='gogimg' src={gogog} alt="" /></div>
                <div className='m-auto'>Continue with Google</div>
            </div>
            <div className='d-flex align-items-center p-2 mt-2 border border-2 border-primary gog rounded'>
                <div><img className='gogimg' src={faclo} alt="" /></div>
                <div className='m-auto'>Continue with FaceBook</div>
            </div>
        </div>
    )
}

export default Signin
