import { PICTURES } from "../../data.js"
import "./caroussel.css"

export default function Caroussel() {
    return (
        <div className="caroussel">
            <ul >
                { PICTURES.map((item) => (
                <li key={item.title}><img src={item.image} alt="" /></li>
                ))}
            </ul>
        </div>
    )
}