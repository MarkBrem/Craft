import styled from "styled-components";

export const DraggableItem = styled.div`
  position: absolute;
  width: 85px;
  height: 85px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: move;
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
  background-image: url(${(props) => props.$bg});
  transform: rotate(${(props) => props.$rotation}deg);
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 85px;
  height: 85px;
  pointer-events: none;
`;

export const DeleteButtonStl = styled.button`
  position: absolute;
  top: -10px;
  left: -10px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: white;
  pointer-events: auto;
`;

export const RotateButtonStl = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: white;
  pointer-events: auto;
`;
