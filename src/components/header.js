import React from "react";
// import EditNoteIcon from '@mui/icons-material/EditNote';

const Header = () => {
    return (
        <>
            <div className="iq-sidebar  sidebar-default">
                <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                    <a href="index.html" className="header-logo">
                        <img
                            src="/images/logo.png"
                            className="img-fluid rounded-normal light-logo"
                            alt="logo"
                        />
                        <h4 className="logo-title ml-3">NotePlus</h4>
                    </a>
                    <div className="iq-menu-bt-sidebar">
                        <i className="las la-times wrapper-menu"></i>
                    </div>
                </div>
                <div className="sidebar-caption dropdown">
                    <a href="#" className="iq-user-toggle d-flex align-items-center justify-content-between"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/images/user/1.jpg" className="img-fluid rounded avatar-50 mr-3" alt="user" />
                        <div className="caption">
                            <h6 className="mb-0 line-height">Pankaj Kumar</h6>
                        </div>
                    </a>
                </div>
                <div className="data-scrollbar" data-scroll="1">
                <div className="iq-search-bar device-search mb-3">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        <input type="text" className="text search-input" placeholder="Search"/>
                    </form>
                </div>
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="active">
                            <a href="#" className="svg-icon">
                                <i>
                                    <svg className="svg-icon" id="iq-main-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </i>
                                <span>Your Notes</span>
                            </a>
                            <ul id="index" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="p-3"></div>
            </div>
            </div>
        </>
    );
};

export default Header;
