import styled from "styled-components";

export const BasketList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
margin-top: 10px;

@media screen and (max-width: 767px) {
    gap: 15px;
  }
`
export const BasketTitle = styled.h2`
font-size: 26px;

@media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const BasketText = styled.p`
font-size: 16px;
@media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const BasketItem = styled.li`    
width: 200px;
height: 100px;
border: solid 2px #2e282a;
border-radius: 10px;
padding: 10px 10px 10px 10px;

@media screen and (max-width: 767px) {
    width: 100px;
    height: 70px;
  }
`

export const BasketContainer = styled.div`
width: 900px;
margin-top: 20px; 
padding: 10px;
background-color: #76b041;

@media screen and (max-width: 767px) {
    width: 260px;
    padding: 5px;
  }
`

export const BasketButton = styled.button`
background-color: #ffffff;
border: none;
border-radius: 100%;
padding: 5px ;
margin-top: 10px;
cursor: pointer;
`

export const Delete = styled.button`
background-color: #FF0000;
color: #fff;
border: none;
border-radius: 100%;
padding: 5px ;
margin-top: 10px;
cursor: pointer;
`

export const ButtonList = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`