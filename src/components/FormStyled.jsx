import styled from "styled-components";

export const FormTitle = styled.h2`
color : #fff;
margin-bottom: 20px;
margin-left:auto;
margin-right: auto;
font-size: 30px;

@media screen and (max-width: 767px){
    font-size: 24px;
    margin-bottom: 5px;
  }
`

export const Form = styled.form`
width: 400px;
border: 2px solid #76b041;
  margin: 20px auto;
  padding: 30px;
  background-color: #2e282a;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 767px){
    width: 200px;
    padding: 15px;
    gap: 15px;
  }
`

export const Wraper = styled.div`
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
export const InputStyle = styled.input`
padding: 10px;
  border: 2px solid #76b041;
  background-color: #fff;
  border-radius: 6px;
  font-size: 16px;

  @media screen and (max-width: 767px){
    font-size: 12px;
    padding: 5px;
  }
`

export const FormButton = styled.button`
padding: 10px;
  background-color: #76b041;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;

  @media screen and (max-width: 767px){
    font-size: 14px;
    padding: 5px;
  }
`