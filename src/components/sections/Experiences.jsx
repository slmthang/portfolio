

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
                    <ul id="experiences">
                        <li className="experience">
                            <div className="center">
                                <h1>Position</h1>
                                <h2>Company | 00/0000-00/0000</h2>
                            </div>

                            <ul>
                                <li>descrioption A</li>
                                <li>descrioption B</li>
                                <li>descrioption C</li>
                                <li>descrioption D</li>
                            </ul>
                        </li>
                        <li className="experience">
                            <div className="center">
                                <h1>Position</h1>
                                <h2>Company | 00/0000-00/0000</h2>
                            </div>

                            <ul>
                                <li>descrioption A</li>
                                <li>descrioption B</li>
                                <li>descrioption C</li>
                                <li>descrioption D</li>
                            </ul>
                        </li>
                        <li className="experience">
                            <div className="center">
                                <h1>Position</h1>
                                <h2>Company | 00/0000-00/0000</h2>
                            </div>

                            <ul>
                                <li>descrioption A</li>
                                <li>descrioption B</li>
                                <li>descrioption C</li>
                                <li>descrioption D</li>
                            </ul>
                        </li>
                    </ul>    
            ) : null }
            
        </div>
    )
}
