import React from 'react'
import { Link } from 'react-router-dom'
//import Icon from '../../../../assets/icon/setting.svg'
import SidebarIcon from '../../../../assets/icon/Icon.svg'
import SidebarIcon2 from '../../../../assets/icon/Icon2.svg'
import SidebarIcon3 from '../../../../assets/icon/Icon3.svg'
import SidebarIcon4 from '../../../../assets/icon/Icon4.svg'
import SidebarIcon5 from '../../../../assets/icon/Icon5.svg'
import SidebarIcon6 from '../../../../assets/icon/Icon6.svg'
import SidebarIcon7 from '../../../../assets/icon/Icon7.svg'
import SidebarIcon8 from '../../../../assets/icon/Icon8.svg'
import SidebarIcon9 from '../../../../assets/icon/Icon9.svg'
import SidebarIcon10 from '../../../../assets/icon/Icon10.svg'
import SidebarIcon11 from '../../../../assets/icon/Icon11.svg'
import SidebarIcon12 from '../../../../assets/icon/Icon11.svg'
import SidebarIcon13 from '../../../../assets/icon/Icon13.svg'


export default function Sidebar({showSidebar, onToggleSidebar }) {
  

    const myStyle = { width: '16%' };
  return (
    <>
      <aside  className={`app-sidebar sticky ${showSidebar ? 'slidebar-show' : ''}`}  id="sidebar">

{/* <!-- Start::main-sidebar-header --> */}
<div class="main-sidebar-header">
    {/* <a href="index.html" class="header-logo">
        <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
        <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
        <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
        <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />
        <img src="../assets/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white" />
        <img src="../assets/images/brand-logos/toggle-white.png" alt="logo" class="toggle-white" />
    </a> */}
    <h3 style={{fontSize:"23px"}}>Agent</h3>
    <button className='btn cross-side'
                    onClick={onToggleSidebar}><i class="fa-solid fa-circle-xmark"></i></button>
</div>
{/* <!-- End::main-sidebar-header --> */}

{/* <!-- Start::main-sidebar --> */}
<div className="main-sidebar" id="sidebar-scroll">


    {/* <!-- Start::nav --> */}
    <nav class="main-menu-container nav nav-pills flex-column sub-open">
        <div class="slide-left" id="slide-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
        </div>
        <ul class="main-menu">
            {/* <!-- Start::slide__category --> */}
            <li class="slide__category d-none"><span class="category-name">User</span></li>
            {/* <!-- End::slide__category --> */}

            {/* <!-- Start::slide --> */}
                <li class="slide">
                    <Link to='/agent/dashboard' class="side-menu__item">
                        <img src={SidebarIcon8} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Dashboard</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/customer' class="side-menu__item">
                        <img src={SidebarIcon2} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">My Customers</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/booking' class="side-menu__item">
                        <img src={SidebarIcon3} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">My Bookings</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/amendmentcard' class="side-menu__item">
                        <img src={SidebarIcon4} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label"> Amendment Card</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/Queries' class="side-menu__item">
                        <img src={SidebarIcon4} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label"> Queries</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/Packages' class="side-menu__item">
                        <img src={SidebarIcon5} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">My Packages</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/MannualHotel' class="side-menu__item">
                        <img src={SidebarIcon6} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Mannual Hotel</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/ManageMarkup' class="side-menu__item">
                        <img src={SidebarIcon7} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Manage Markup</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/WebCheck-In' class="side-menu__item">
                        <img src={SidebarIcon8} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Web Check-in</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/ReminderWebCheck-in' class="side-menu__item">
                        <img src={SidebarIcon9} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Reminder Web Checkin</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/AgentInvoice' class="side-menu__item">
                        <img src={SidebarIcon11} className='side-menu__icon' style={myStyle}  alt="" />   
                        <span class="side-menu__label">Invoice</span>
                    </Link>
                </li>  
                <li class="slide">
                    <Link to='/agent/AgentGenerateInvoice' class="side-menu__item">
                        <img src={SidebarIcon12} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Generate Invoice</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='*' class="side-menu__item">
                        <img src={SidebarIcon13} className='side-menu__icon' style={myStyle}  alt="" />
                        <span class="side-menu__label">Setting</span>
                    </Link>
                </li>
            </ul>
            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                </nav>
            </div>
            {/* <!-- End::main-sidebar --> */}

        </aside>
    </>
  )
}
