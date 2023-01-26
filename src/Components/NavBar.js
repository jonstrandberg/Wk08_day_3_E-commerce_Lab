import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyle = styled.ul`
    width: 100%;
    list-style: none;
    padding: 1em;
    margin: 0;
    background-color: #208C6D;
    height: 2em;
    font-weight: bold;
    color: black;
`
const NavBarLayout = styled.li`
    background-color: #208C6D;
    &:hover {
    background-color: #5CAB9B;
    }
    width: 3em;
    display: inline;
    padding: 1.8em;
    text-align: center;
    justify-content: space-between;
    position: relative;
`


const NavBar = () => {


    return (
            <NavBarStyle>
                <NavBarLayout>
                    <Link to="/">Home</Link>
                </NavBarLayout>
                <NavBarLayout>
                    <Link to="/Products">Products</Link>
                </NavBarLayout>
                <NavBarLayout>
                    <Link to="/ShoppingBasket">Shopping Basket</Link>
                </NavBarLayout>
            </NavBarStyle>
    )

}

export default NavBar