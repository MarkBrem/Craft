import styled from "styled-components";

export const BasketList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
margin-top: 20px;

@media screen and (max-width: 767px) {
    gap: 15px;
  }
`
export const BasketTitle = styled.h2`
font-size: 24px;

@media screen and (max-width: 767px) {
    font-size: 20px;
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
border: 1px solid #ccc;
border-radius: 10px;
padding: 20px 10px 20px 10px;

@media screen and (max-width: 767px) {
    width: 170px;
    height: 120px;
  }
`

export const BasketContainer = styled.div`
width: 900px;
margin-top: 70px; 
padding: 30px;
background-color: #fff;
border-radius: 50px;
border: 1px solid #ccc;


@media screen and (max-width: 767px) {
    width: 260px;
    padding: 5px;
  }
`

export const BasketButton = styled.button`
display: flex;
background-color: #ffffff;
border: 1px solid #ccc;
color: #b2b2b2;
border-radius: 100%;
padding: 5px ;
margin-top: 10px;
cursor: pointer;
justify-content: center;
align-items: center;


`

export const Delete = styled.button`
display: flex;
background-color: #fff;
border: 1px solid #b2b2b2;;
color: #ccc;
border-radius: 25px;
padding: 5px ;
margin-top: 10px;
cursor: pointer;
justify-content: center;
align-items: center;
`

export const ButtonList = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`

export const MainItemContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
`
export const ImageBascetContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const TextBascetConatiner = styled.div`
  width: 140px;

  text-align: center;
`