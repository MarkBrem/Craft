import { useDrag } from "react-dnd";
import { DraggableItem, DeleteButtonStl } from "./draggableFurniture.styled";
import { MdDeleteOutline } from "react-icons/md";

export const DraggableFurniture = ({
  item,
  onDeleteBtn,
  isSelected,
  onSelect,
}) => {
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
        onClick={(e)=>{ e.stopPropagation();
          onSelect()
        }}
      >
        {isSelected && (
          <DeleteButtonStl
            type="click"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteBtn(item.id);
            }}
          >
            <MdDeleteOutline size={17} />
          </DeleteButtonStl>
        )}
      </DraggableItem>
    </>
  );
};
