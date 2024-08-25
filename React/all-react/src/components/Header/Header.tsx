import React from "react";

import Menu from '@/components/Menu'

import './Header.css'

const Header = () => {
    return <header className="app-header">
        <span className="app-header__logo"></span>
        <Menu />
    </header>
}

export default Header