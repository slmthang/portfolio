
import { useState } from "react"
import "./Certificates.scss"


export default function Certificates() {

    const [expand, setExpand] = useState(false);

    function toggleExpand() {
        if (expand) {
            setExpand(false);
        } else {
            setExpand(true);
        }
    }

    return (
        <div id="certificates-cont" className="center">
            <div id="title" className="center" onClick={toggleExpand}>
                <h1>
                    <i className="fa-solid fa-scroll"></i>
                    Certificates
                </h1>
                {!expand ? 
                    <i className="fa-solid fa-chevron-right"></i>
                :   <i className="fa-solid fa-chevron-down"></i>}
            </div>
            {expand ? (
                <div id="certificates">
                    <>
                        <div className="certificate">
                            <ul>
                                <li style={{listStyle: "square"}}>
                                    <h1>CySA+</h1>
                                    <h2>CompTIA | 02/2024 - 02/2027</h2>
                                </li>
                            </ul>
                        </div>
                        <div className="certificate">
                            <ul>
                                <li style={{listStyle: "square"}}>
                                    <h1>ISC2-CC</h1>
                                    <h2>ISC2 | 12/2023 - 12/2026</h2>
                                </li>
                            </ul>
                        </div>
                    </>
                </div>
            ):null}
        </div>
    )
}