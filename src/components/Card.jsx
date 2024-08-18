/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { PiHeartLight } from "react-icons/pi";
import { FcLike } from "react-icons/fc";

const Card = ({ data }) => {
    const [like, setLike] = useState(false);

    return (
        <div className='card'>
            <div className='back'>
                <img src={data?.image} alt="product" />
            </div>
            <div className="title" style={{cursor: "pointer"}}>{data.title}</div>
            <div className='text' style={{cursor: 'pointer'}}>Sign in or Create an account to see pricing</div>
            {
                like
                    ? <FcLike className='like' onClick={() => setLike(!like)}/>
                    : <PiHeartLight className='like' onClick={() => setLike(!like)}/>
            }
        </div>
    )
}

export default Card
