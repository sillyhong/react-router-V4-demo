
import React from 'React';
import {NavLink} from 'react-router-dom';
import './nav.css'
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact  to='/'>A页面</NavLink> |&nbsp;
            <NavLink activeClassName='active' to='/B'>B页面</NavLink> |&nbsp;
            <NavLink activeClassName='active' to='/C/ILoveWeb'>C页面</NavLink> |&nbsp;
            <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink> |&nbsp;
            <NavLink activeClassName='active' to='/react'>404</NavLink>
        </div>
    </div>
)

export default NavBar;