import { useDrag } from "react-dnd";
import {
  DraggableItem,
  DeleteButtonStl,
  RotateButtonStl,
  ButtonWrapper,
} from "./draggableFurniture.styled";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineRotate90DegreesCw } from "react-icons/md";

export const DraggableFurniture = ({
  item,
  onDeleteBtn,
  isSelected,
  onSelect,
  onRotate,
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
        $isDragging={isDragging}
        $left={item.x}
        $top={item.y}
        $bg={item.foto2d}
        $rotation={item.rotation}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        {isSelected && (
          <ButtonWrapper>
            <DeleteButtonStl
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteBtn(item.id);
              }}
            >
              <MdDeleteOutline size={17} />
            </DeleteButtonStl>

            <RotateButtonStl
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRotate(item.id);
              }}
            >
              <MdOutlineRotate90DegreesCw size={17} />
            </RotateButtonStl>
          </ButtonWrapper>
        )}
      </DraggableItem>
    </>
  );
};
