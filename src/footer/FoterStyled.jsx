import styled from 'styled-components';
export const FooterSection = styled.footer`
display: flex;
text-align: center;
background-color: #2e282a;
padding: 40px 0;
`

export const FooterLogo = styled.img`
width: 120px;
height: auto;

@media screen and (max-width: 767px){
    width: 90px;
  }
`

export const ContactList = styled.ul`
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px;
`

export const Contacts = styled.p`
color: #fff;
@media screen and (max-width: 767px){
    font-size: 12px;
  }
`

export const LogoItem = styled.div`
`

export const WishList = styled.div`
text-align: right;
@media screen and (max-width: 767px){
    display: none;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  flex-direction: row;
  width: 100%; 
  gap: 20px; 
  @media screen and (max-width: 767px){
    gap: 5px;
  }
`;