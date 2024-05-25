
import profileImg from "../../assets/profile.jpg";
import "./Info.scss"


export default function Info() {
    return (
        <div id="info-cont">
            <div id="intro" className="center">

                <img src={profileImg} alt=""/>

                <div id="details">
                    <p>716-275-2175</p>
                    <p>slmthang2024@gmail.com</p>
                    <p>github.com/slmthang/</p>
                    <p>slmthang.com</p>
                </div>
            </div>
            <p id="introduction">
                Hi, I am Solomon Thang, a passionate Software Developer who enjoys solving problems and buliding cool and impactful softwares.
            </p>
        </div>
    )
}