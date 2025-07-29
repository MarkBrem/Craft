import styled from "styled-components";

export const HowItWorksTitle = styled.h2`
  font-family: "Manrope";
  font-size: 30px;
  text-align: center;
  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;

export const HowItWorksList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;

  gap: 40px;

  list-style: none;

  margin: 30px 0 0 0;
  padding: 0;

  @media screen and (max-width: 767px){
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    gap:10px;
    width: 130px;
  }
`;

export const HowItWorksListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  width: 200px;

  min-height: 160px;
  @media screen and (max-width: 767px){
    width: 130px;
  }
`;

export const CardTitle = styled.h3`
  font-family: "Manrope";
  font-size: 19px;
  margin-top: 10px;
  @media screen and (max-width: 767px){
    font-size: 14px;
  }
`;

export const HowItWorksText = styled.p`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 17px;
  margin-top: 15px;
  @media screen and (max-width: 767px){
    font-size: 12px;
  }
`;

export const SectionHowItWorks = styled.div`
    padding: 150px 0;
    @media screen and (max-width: 767px){
    padding: 40px 0;
  }
`