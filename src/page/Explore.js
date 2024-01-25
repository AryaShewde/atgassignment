import React from 'react'
import Popup2 from '../components/dethome/Popup'
import home from "../img/homedes.png"

const Explore = () => {
    return (
        <div>
            <div className='mt-1 explore'>
                <div className='d-flex gap-5 settt'>
                    <div className='detailexp'>
                        <h1>Explore your <span className='lightbl'>hobby</span> or <span className='darkbl'>passion</span></h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                    </div>
                    <div className='signdet'>
                        <Popup2 />
                    </div>
                </div>
                <div className='homeimg'>
                    <img src={home} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Explore
