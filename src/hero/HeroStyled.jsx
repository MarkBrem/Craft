import styled from "styled-components";

export const HeroTitleStyled = styled.h1`
    font-weight: 700;
    font-size: 48px;
    margin: 0;

    @media screen and (max-width: 767px){
    font-size: 32px;
  }
`
export const HeroTextStyled = styled.p`
    font-size: 22px;
    margin: 30px 0 0 0;
    @media screen and (max-width: 767px){
    font-size: 16px;
    margin: 5px 0 0 0;
  }
`

export const BackgroundHero = styled.div`
  background:linear-gradient(163deg, rgba(119, 176, 65, 0.7) 0%, rgba(119, 176, 65, 0.7) 35%, rgba(255, 200, 20, 0.7) 100%);
  padding: 160px 0;
  text-align: center;
  @media screen and (max-width: 767px){
    padding: 80px 0;
  }
`
