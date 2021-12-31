import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLeft>
                <h1>Listify</h1>
            </NavbarLeft>
            <NavbarRight>
                <p>Log Out</p>
            </NavbarRight>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.nav`
    max-width: 100%;
    display: flex;
    padding: 20px 30px;
    align-items: center;
    background-color: #1db954;
    color: white;
`;

const NavbarLeft = styled.div`
    flex: 0.6;
`;

const NavbarRight = styled.div`
    flex: 0.4;
    text-align: right;
`;