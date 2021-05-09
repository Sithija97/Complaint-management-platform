import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CloudIcon from '@material-ui/icons/Cloud';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Caputure from "./Capture.PNG"

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src={Caputure}
                    alt="logo"
                />
                <h1>Homie</h1>
            </div>

            <div className="header_middle">
                <Link to='/'>
                    <div className="header_option header_option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                </Link>
                <Link to='/todo'>
                    <div className="header_option">
                        <CheckCircleIcon fontSize="large" />
                    </div>
                </Link>
                <Link to='/grocery'>
                    <div className="header_option">
                        <LocalMallIcon fontSize="large" />
                    </div>
                </Link>
                <Link to='/calander'>
                    <div className="header_option">
                        <CalendarTodayIcon fontSize="large" />
                    </div>
                </Link>
                <Link to='/weather'>
                    <div className="header_option">
                        <CloudIcon fontSize="large" />
                    </div>
                </Link>
                <Link to='/money'>
                    <div className="header_option">
                        <AccountBalanceWalletIcon fontSize="large" />
                    </div>
                </Link>
            </div>

            <div className="header_right">
                <div className="header__info">
                    <Avatar />
                    <h4>sithija</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
