import React from "react";
import './experience.css';
import { UserOutlined } from "@ant-design/icons";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>HTML and CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>Git</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>PHP (Laravel, CI)</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>Ruby on Rails</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <UserOutlined className="experience_details-icon" />
                            <div>
                                <h4>VBA</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience