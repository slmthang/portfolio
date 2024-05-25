

import "./Skills.scss"


export default function Skills() {
    return (
        <div id="skills-cont" className="center">
            <h1>Skills</h1>
            <div id="skills">
                <div className="skill">
                    <h1>Primary Languages</h1>
                    <p>- Python & JavaScript</p>
                </div>
                <div className="skill">
                    <h1>Familiar Languages</h1>
                    <p>- Bash, Java, C++ & PHP</p>
                </div>
                <div className="skill">
                    <h1>Databases</h1>
                    <p>- MySql, MongoDB, SQLite3</p>
                </div>
                <div className="skill">
                    <h1>Frameworks</h1>
                    <p>- React & Flask</p>
                </div>
                <div className="skill">
                    <h1>Testing</h1>
                    <p>- JEST & PyTest</p>
                </div>
                <div className="skill">
                    <h1>Tools</h1>
                    <p>- Git, Docker, JIRA, CircleCI and Figma</p>
                </div>
            </div>
        </div>
    )
}