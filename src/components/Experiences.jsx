

import { useState } from "react"
import "./Experiences.scss"


export default function Experiences() {

    const [expand, setExpand] = useState(false);

    function toggleExpand() {
        if (expand) {
            setExpand(false);
        } else {
            setExpand(true);
        }
    }

    return (
        <div id="experiences-cont" className="center">
            <div id="title" className="center" onClick={toggleExpand}>
                <h1>
                    <i className="fa-solid fa-atom"></i>
                    Experiences
                </h1>
                {!expand ? 
                    <i className="fa-solid fa-chevron-right"></i>
                :   <i className="fa-solid fa-chevron-down"></i>}
            </div>
            {expand ? (
                    <ul id="experiences" className="center">
                        <li className="experience boxShadow">
                            <div className="center">
                                <h1>Position</h1>
                                <h2>~ Company Name | 00/0000-99/9999</h2>
                            </div>

                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Fusce vehicula ac eros vitae varius. Vestibulum libero nisl, porttitor ac ipsum non, blandit malesuada erat</li>
                                <li>Suspendisse vitae lacus ante. Integer ut augue condimentum, ultrices erat non, aliquam ante</li>
                                <li>Maecenas hendrerit maximus cursus. Donec fermentum mattis leo ut fermentum</li>
                            </ul>
                        </li>
                        <li className="experience boxShadow">
                            <div className="center">
                                <h1>Position</h1>
                                <h2>~ Company Name | 00/0000-99/9999</h2>
                            </div>

                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Fusce vehicula ac eros vitae varius. Vestibulum libero nisl, porttitor ac ipsum non, blandit malesuada erat</li>
                                <li>Suspendisse vitae lacus ante. Integer ut augue condimentum, ultrices erat non, aliquam ante</li>
                                <li>Maecenas hendrerit maximus cursus. Donec fermentum mattis leo ut fermentum</li>
                            </ul>
                        </li>
                    </ul>    
            ) : null }
            
        </div>
    )
}
