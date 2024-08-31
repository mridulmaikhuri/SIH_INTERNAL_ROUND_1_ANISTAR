import React from 'react'

function Department({image, title}) {
    return (
        <div className='border border-black w-fit p-3 text-xl text-center'>
            <img src={image} alt={title} className="rounded-lg w-[19vw] h-[19vw]"/>
            <p className='font-bold'>{title}</p>
        </div>
    )
}

export default Department