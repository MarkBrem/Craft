import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeadrerSection = styled.header`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
background-color: #2e282a;
` 

export const LogoContainer = styled.div`
margin-left: 20px;
margin-right: auto;
`

export const NavList = styled.ul`
display: flex;
flex-direction: row;
gap: 60px;
@media screen and (max-width: 767px){
  margin-left: 25px;
  margin-right: 25px;
    gap: 20px;
  }
`

export const NavItem = styled.li`
display: flex;
align-items: center;
  
`

export const UserList = styled.ul`
display: flex;
align-items: center;
margin-left: auto;
margin-right: 60px;
`

export const UserItem = styled.li`
display: flex;
flex-direction: row;
gap: 5px;
`

export const Hello = styled.p`
color: #fff;
@media screen and (max-width: 767px){
    display: none;
  }
` 

export const Logo = styled.img`
width: 95px;
height: auto;
@media screen and (max-width: 767px){
    width: 70px;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding-bottom: 5px;
  color: white;
  text-decoration: none;
  font-size: 18px;

  @media screen and (max-width: 767px){
    font-size: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 3px;
    background-color: #76b041;
    border-radius: 2px;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  &:hover::after {
    transform: scaleX(1);
  }`;