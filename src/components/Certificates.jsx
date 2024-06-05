
import { useState } from "react"
import "./Certificates.scss"


export default function Certificates() {

    return (
            <div id="certificates-cont" className="center">
                <ul id="certificates" className="center">
                    <h1 class="section-title">Certificates</h1>
                    <li className="certificate boxShadow">
                        <ul>
                            <li style={{listStyle: "square"}}>
                                <h1>CySA+</h1>
                                <h2>~ CompTIA | 02/2024 - 02/2027</h2>
                            </li>
                        </ul>
                    </li>
                    <li className="certificate boxShadow">
                        <ul>
                            <li style={{listStyle: "square"}}>
                                <h1>ISC2-CC</h1>
                                <h2>~ ISC2 | 12/2023 - 12/2026</h2>
                            </li>
                        </ul>
                    </li>
                </ul>
                
            </div>
    )
}