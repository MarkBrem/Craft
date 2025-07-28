import styled from "styled-components";

export const BasketList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
margin-top: 10px;
`

export const BasketItem = styled.li`    
width: 200px;
border: solid 2px #2e282a;
border-radius: 10px;
padding: 10px 10px 10px 10px;
`

export const BasketContainer = styled.div`
width: 900px;
margin-top: 20px; 
padding: 10px;
background-color: #76b041;
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