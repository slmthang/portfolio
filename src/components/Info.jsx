
import profileImg from "../assets/profile.jpg";
import myResume from "../assets/resume-05-2024.pdf";
import "./Info.scss";
import { useState } from "react";


export default function Info() {

    const [expand, setExpand] = useState(true);

    function toggleExpand() {
        if (expand) {
            setExpand(false);
        } else {
            setExpand(true);
        }
    }

    return (
        <div id="info-cont" className="center">
            <div id="title" className="center" onClick={toggleExpand}>
                <h1>
                    <i className="fa-solid fa-user"></i>
                    Solomon Thang
                </h1>
                {!expand ? 
                    <i className="fa-solid fa-chevron-right"></i>
                :   <i className="fa-solid fa-chevron-down"></i>}
            </div>
            {expand ? (
                <div id="infos" className="center">
                    <div id="info" className="boxShadow">
                    <div id="intro" className="center">

                        <img src={profileImg} alt=""/>

                        <ul id="details">
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+17162752175">
                                    716-275-2175
                                </a>
                            </li>
                            <li>
                                <i className="fa-solid fa-at"></i>
                                <a href="mailto:slmthang2024@gmail.com">
                                    slmthang2024@gmail.com
                                </a>
                            </li>
                            <li>
                                <i className="fa-brands fa-github"></i>
                                <a href="https://github.com/slmthang">
                                    github.com/slmthang/
                                </a>
                            </li>
                            <li>
                                <a href={myResume} id="resume" download="Resume-SolomonThang">
                                    Resume <i className="fa-regular fa-circle-down"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p id="introduction">
                        Hi, I am Solomon Thang, a passionate Software Developer who enjoys solving problems and buliding cool and impactful softwares.
                    </p>
                </div>
                </div>
            ) : null}
        </div>
    )
}