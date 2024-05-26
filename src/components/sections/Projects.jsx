
import { useState } from "react"
import "./Projects.scss"


export default function Projects() {

    const [expand, setExpand] = useState(false);

    function toggleExpand() {
        if (expand) {
            setExpand(false);
        } else {
            setExpand(true);
        }
    }

    return (
        <div id="projects-cont" className="center">
            <div id="title" className="center" onClick={toggleExpand}>
                <h1>
                    <i className="fa-solid fa-folder"></i>
                    Projects
                </h1>
                {!expand ? 
                    <i className="fa-solid fa-chevron-right"></i>
                :   <i className="fa-solid fa-chevron-down"></i>}
            </div>
            {expand ? (
                    <ul id="projects">
                    <li className="project">
                        <div className="center">
                                <div className="center">
                                    <h1>Project Name</h1>
                                    <h2>Languages & Tools: A, B, C, D</h2>
                                </div>
                                <h2>Source | LIVE</h2>
                        </div>
                        
                        <ul>
                            <li>descrioption A</li>
                            <li>descrioption B</li>
                            <li>descrioption C</li>
                            <li>descrioption D</li>
                        </ul>
                    </li>
                    <li className="project">
                        <div className="center">
                                <div className="center">
                                    <h1>Project Name</h1>
                                    <h2>Languages & Tools: A, B, C, D</h2>
                                </div>
                                <h2>Source | LIVE</h2>
                        </div>
                        
                        <ul>
                            <li>descrioption A</li>
                            <li>descrioption B</li>
                            <li>descrioption C</li>
                            <li>descrioption D</li>
                        </ul>
                    </li>
                    <li className="project">
                        <div className="center">
                                <div className="center">
                                    <h1>Project Name</h1>
                                    <h2>Languages & Tools: A, B, C, D</h2>
                                </div>
                                <h2>Source | LIVE</h2>
                        </div>
                        
                        <ul>
                            <li>descrioption A</li>
                            <li>descrioption B</li>
                            <li>descrioption C</li>
                            <li>descrioption D</li>
                        </ul>
                    </li>
                </ul>
            ): null}
        </div>
    )
}