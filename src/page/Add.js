import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const Add = () => {
    return (
        <div className='addsec'>
            <div>
                <div className='addmid d-flex flex-column rounded border border-2'>
                    <div className='d-flex align-items-center'>
                        <FaCirclePlus className='fs-3 m-3 icon4' />
                        <h3>Add your own</h3>
                    </div>
                    <p className='m-3 fs-5'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                    <button className='fit-content rounded bg-transparent listbtn'>Add new</button>
                </div>
            </div>
        </div>
    )
}

export default Add
