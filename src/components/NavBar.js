import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, SHOP_ROUTE,ABOUTUS_ROUTE,VACANCY_ROUTE} from "../utils/consts";
import {Button, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom"
import '../css/Navbar.css';
import logo1 from '../assets/logo1.png'

import logo2 from '../assets/logo2.png'



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        
        <Navbar className='fixed-top navb1'   variant="dark" >
            <Container className='navbcontainer'>
                <div class="navbcont">
                <NavLink className='navl1'  to={MAINPAGE_ROUTE} ><Image className='log1'  src={logo1}  height={50}/><Image className='log2'  src={logo2}  height={50}/></NavLink>
                <div></div>
                <NavLink className='navl2'   to={SHOP_ROUTE}>Каталог</NavLink>
                <NavLink className='navl2'   to={ABOUTUS_ROUTE}>О нас</NavLink>
                <NavLink className='navl2'   to={VACANCY_ROUTE}>Вакансии</NavLink>
                
                </div>
                
                
            </Container>
        </Navbar>

    );
});

export default NavBar;
