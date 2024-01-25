import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Popnav = () => {
    const [selectedPage, setSelectedPage] = useState('page1');

    const handlePageClick = (page) => {
        setSelectedPage(page);
    };
    return (
        <div className='d-flex justify-content-center gap-3 navdiv'>
            <Link to="/" onClick={() => handlePageClick('page1')} className={selectedPage === 'page1' ? 'selected' : ''}><p className=''>Sign In</p></Link>
            <Link to="/joinin" onClick={() => handlePageClick('page2')} className={selectedPage === 'page2' ? 'selected' : ''}><p>Join In</p></Link>
        </div>
    )
}

export default Popnav
