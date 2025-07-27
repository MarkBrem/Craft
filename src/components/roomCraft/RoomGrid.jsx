import { Container } from "../../container/Container"
import { RoomGridStl, GridCell, RoomBackground } from "./RoomGrid.styled"
import floorTexture from '../../foto/c6a47533567533d7eb19209983b773e8.jpg'
import bgImage from "../../foto/bgimage2.jpg"

export const RoomGrid = () =>{
    return <>
    <RoomBackground image = {bgImage}>
    <Container>
    <RoomGridStl image={floorTexture}>
        {Array.from({length: 36}).map((_, index)=>{
           return <GridCell key ={index} />
        })}
    </RoomGridStl>

    </Container>
    </RoomBackground>    
    </>
}