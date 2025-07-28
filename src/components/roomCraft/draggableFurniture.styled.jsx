import styled from "styled-components";

export const DraggableItem = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: move;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-image: url(${(props) => props.bg});
`;