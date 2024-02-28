import { PICTURES } from "../../data"
import Caroussel from "../caroussel/caroussel"
import "./mainpic.css"

export default function MainPicture() {
    return (
    <>
    <div className="top">
        <h1>URBAN GALLERY</h1>
        <img className="main-pic" src={PICTURES[0].image} alt="couloir rose" />
    </div>
    <div className="low">
        <Caroussel/>
    </div>
    
    </>
        
    )
}