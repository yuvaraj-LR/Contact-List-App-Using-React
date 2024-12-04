import React, { useState } from 'react'

function Sidebar() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div className='flex sidebar'>
            {/* Dropdown for mobile and tabs */}
            <div className="sidebar_dropdown">
                <button className="btn brown_outline_btn flex flex_space_between m-auto menu_btn" onClick={() => setToggleDropdown(!toggleDropdown)}>
                    <span>Menu</span>
                    <span><i class="fa-solid fa-caret-down"></i></span>
                </button>

                <ul className={`flex flex-column flex_center  ${toggleDropdown ? 'dropdown_list' : 'hidden'}`}>
                    <li className='dropdown_li'>Home</li>
                    <li className='dropdown_li'>Contact Us</li>
                    <li className='dropdown_li'>About Us</li>
                    <button className='btn brown_btn'>Login</button>
                </ul>
            </div>

            {/* Sidebar for laptops and desktops */}
            <div className="sidebar_container">
                <div className="sidebar_menu_desk">
                    <ul className="sidebar_menu_desk_ul">
                        <li className="sidebar_menu_desk_li">
                            <span className="sidebar_desk_icon"><i class="fa-solid fa-house"></i></span>
                            <span className="sidebar_desk_icon">Home</span>
                        </li>
                        <li className="sidebar_menu_desk_li">
                            <span className="sidebar_desk_icon"><i class="fa-solid fa-address-card"></i></span>
                            <span className="sidebar_desk_icon">About us</span>
                        </li>
                        <li className="sidebar_menu_desk_li">
                            <span className="sidebar_desk_icon"><i class="fa-solid fa-address-book"></i></span>
                            <span className="sidebar_desk_icon">Contact Us</span>
                        </li>
                    </ul>
                </div>  

                <div className="sidebar_login_desk">
                    <button className="btn flex flex_center flex_gap_10 w-100 brown_btn ">
                        <span><i class="fa-solid fa-right-to-bracket"></i></span>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar