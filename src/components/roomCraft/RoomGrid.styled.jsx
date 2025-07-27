import styled from "styled-components";

export const RoomGridStl = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd; 
`

export const GridCell = styled.div`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover {
    background: #f0f0f05d;
  }
`;

export const RoomBackground = styled.div`
  background-image: url(${(props) => props.image});
  background-size: 33% 33%;
  background-position: center;
  padding: 150px 0;

`