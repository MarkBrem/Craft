import styled from "styled-components";

export const FormTitle = styled.h2`
color : #fff;
margin-bottom: 20px;
margin-left:auto;
margin-right: auto;
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
`

export const FormButton = styled.button`
padding: 10px;
  background-color: #76b041;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
`