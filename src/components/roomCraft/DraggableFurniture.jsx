import { useDrag } from "react-dnd";
import { DraggableItem } from "./draggableFurniture.styled";

export const DraggableFurniture = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "furniture",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <DraggableItem
        ref={drag}
        isDragging={isDragging}
        left={item.x}
        top={item.y}
        bg={item.foto2d}
      />
    </>
  );
};
