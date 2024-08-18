/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { LiaAppStore } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import { PiHeartLight } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='container'>
            <div className='top'>
                <RiReactjsLine className='icon-1' style={{ cursor: 'pointer' }}/>
                {
                    open
                        ? <IoMdClose className='hamburger-close' onClick={() => setOpen(!open)} />
                        : <GiHamburgerMenu className='hamburger-open' onClick={() => setOpen(!open)} />
                }

                <div className='logo'>LOGO</div>
                <div className='icons'>
                    <FiSearch className='icon-2' style={{ cursor: 'pointer' }} />
                    <PiHeartLight className='icon-3' style={{ cursor: 'pointer' }} />
                    <TbShoppingBag className='icon-4' style={{ cursor: 'pointer' }} />
                    <HiOutlineUser className='icon-5' style={{ cursor: 'pointer' }} />
                    <select style={{ cursor: 'pointer' }}>
                        <option value="ENG">ENG</option>
                        <option value="INDIA">INDIA</option>
                    </select>
                </div>
            </div>
            <div className='bottom'>
                <ul>
                    <li>SHOP</li>
                    <li>SKIllS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            {
                open
                    ? <div className='mobile-menu'>
                        <ul>
                            <li>SHOP</li>
                            <li>SKIllS</li>
                            <li>STORIES</li>
                            <li>ABOUT</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    : (<></>)
            }

            <div className='border'></div>
        </div>
    )
}

export default Navbar
