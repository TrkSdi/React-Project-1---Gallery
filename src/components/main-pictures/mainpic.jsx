import { PICTURES } from "../../data"

import "./mainpic.css"

export default function MainPicture() {
    return (
    <>
        <div className="top">
            <h1>URBAN GALLERY</h1>
            <img className="main-pic" src={PICTURES[0].image} alt="couloir rose" />
        </div>
        <div className="low">
            <div className="caroussel">
                <ul >
                    { PICTURES.map((item) => (
                    <li key={item.title}><img src={item.image} alt="" /></li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    )
}