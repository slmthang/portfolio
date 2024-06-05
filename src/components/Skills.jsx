
import { useState } from "react"
import "./Skills.scss"


export default function Skills() {


    return (
        <div id="skills-cont" className="center">
            <ul id="skills" className="center">
                <h1 class="section-title">Skills</h1>
                <li className="skill boxShadow">
                    <h1>Languages</h1>
                    <ul>
                        <li>Python, JavaScript, Bash, Java, C++ & PHP</li>
                    </ul>
                </li>
                <li className="skill boxShadow">
                    <h1>Databases</h1>
                    <ul>
                        <li>MySql, MongoDB, SQLite3</li>
                    </ul>
                </li>
                <li className="skill boxShadow">
                    <h1>Frameworks</h1>
                    <ul>
                        <li>React & Flask</li>
                    </ul>
                </li>
                <li className="skill boxShadow">
                    <h1>Testing</h1>
                    <ul>
                        <li>JEST & PyTest</li>
                    </ul>
                </li>
                <li className="skill boxShadow">
                    <h1>Tools</h1>
                    <ul>
                        <li>Git, Docker, JIRA, CircleCI and Figma</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}