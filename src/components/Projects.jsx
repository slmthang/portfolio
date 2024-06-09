
import { useState } from "react"
import "./Projects.scss"
import calendarImg from '../assets/calendar.jpg';
import chatImg from '../assets/chat.jpg';
import sentenceGenImg from '../assets/sentenceGen.jpg';
import sentimentAnalyzer from '../assets/sentimentAnalyzer.jpg';


export default function Projects() {

    return (
            <div id="projects-cont" className="center">

                <header className="section-title center"><h2>Projects</h2></header>

                <ul id="projects" className="center">
                    <li className="project boxShadow">
                        <div className="center">
                                <div className="center">
                                    <h1>Calendar App</h1>
                                    <h2>~ HTML, CSS, JavaScript, Flask, MySql, MongoDB & Docker</h2>
                                </div>
                        </div>
                        
                        <div id="screenshot" className="center">
                            <img src={calendarImg} alt="calendar app screenshot" />
                        </div>

                        <ul>
                            <li>a web-based calendar app that provides an interactive calendar</li>
                            <li>can create, manage and see all of their calendar data across all devices, and all in one place</li>
                            <li>simple and clean UI of the app allows users to organize and plan their days with ease</li>
                        </ul>

                        <ul className="links">
                            <li>
                                <a href="https://github.com/slmthang/capp">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </li>   
                        </ul>
                    </li>
                    <li className="project boxShadow">
                        <div className="center">
                                <div className="center">
                                    <h1>Sentiment Analyzer</h1>
                                    <h2>~ Python</h2>
                                </div>
                        </div>

                        <div id="screenshot" className="center">
                            <img src={sentimentAnalyzer} alt="sentiment analyzer screenshot" />
                        </div>
                        
                        <ul>
                            <li>program is implemented using the ’Naive Bayes Algorithm’</li>
                            <li>is trained and tested using a subset of the Pang and Lee 2002 Sentiment Classification / Movie Review data, created by Ted Pedersen (tpederse@d.umn.edu)</li>
                            <li>program yields 80.8% accuracy based on the testing and training data.</li>
                        </ul>

                        <ul className="links">
                            <li>
                                <a href="https://github.com/slmthang/sentiment-analyzer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </li>   
                        </ul>
                    </li>
                    <li className="project boxShadow">
                        <div className="center">
                                <div className="center">
                                    <h1>Sentence Generator</h1>
                                    <h2>~ Python</h2>
                                </div>
                        </div>

                        <div id="screenshot" className="center">
                            <img src={sentenceGenImg} alt="sentence generator screenshot" />
                        </div>
                        
                        <ul>
                            <li>a sentence generator that is developed using the n-gram models</li>
                            <li>program has three models that can be used to generate sentences: uni-gram, bi-gram, and tri-gram</li>
                            <li>is trained using some text files(ebooks, etc...) and the program will generate sentences using those data</li>
                            <li>quality of sentences that are generated will depend on the size and quality of the input data, and the n-gram model it is used</li>
                        </ul>

                        <ul className="links">
                            <li>
                                <a href="https://github.com/slmthang/sentence-generator">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </li>   
                        </ul>
                    </li>
                    <li className="project boxShadow">
                        <div className="center">
                                <div className="center">
                                    <h1>Simple Chat App</h1>
                                    <h2>~ Python</h2>
                                </div>
                        </div>

                        <div id="screenshot" className="center">
                            <img src={chatImg} alt="chat room app screenshot" />
                        </div>
                        
                        <ul>
                            <li>a simple chat app that allows people to chat online - implemented using websockets</li>
                            <li>html, css, js as frontend and Flask as backend</li>
                            <li>features: public chat, private chat, chat history</li>
                        </ul>

                        <ul className="links">
                            <li>
                                <a href="https://github.com/slmthang/chat-app">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </li>   
                        </ul>
                    </li>
                </ul>
            </div>
    )
}