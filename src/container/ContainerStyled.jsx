import styled from "styled-components";

export const ContainerStyled = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 768px;

  text-align: center;

  margin-left: auto;
  margin-right: auto;

  padding: 10px 15px 10px 15px;

  @media screen and (max-width: 767px){
    width: 320px;
    padding: 0;
  }

  @media screen and ( min-width: 1140px;){
    width: 1140px;
  }
`;