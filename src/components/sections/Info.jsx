
import profileImg from "../../assets/profile.jpg";
import "./Info.scss"


export default function Info() {
    return (
        <div id="info-cont">
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
                        <a href="http://" id="resume">
                            Resume <i className="fa-regular fa-circle-down"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p id="introduction">
                Hi, I am Solomon Thang, a passionate Software Developer who enjoys solving problems and buliding cool and impactful softwares.
            </p>
        </div>
    )
}