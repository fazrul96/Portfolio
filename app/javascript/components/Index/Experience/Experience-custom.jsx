import React from "react";
import { FaBootstrap, FaReact, FaHtml5, FaJs, FaCss3, FaGit, FaPhp, FaDatabase, FaCode, FaPython, FaJava } from '@ant-design/icons';
import './experience.css';

const frontend = [
    {
        id:1,
        icon: <FaBootstrap className="experience_details-icon" />,
        title: 'Bootstrap',
        description: 'Intermediate'
    },
    {
        id:2,
        icon: <FaReact className="experience_details-icon" />,
        title: 'ReactJS',
        description: 'Beginner'
    },
    {
        id:3,
        icon: <FaJs className="experience_details-icon" />,
        title: 'Javascript',
        description: 'Intermediate'
    },
    {
        id:4,
        icon: <FaHtml5 className="experience_details-icon" />,
        title: 'HTML',
        description: 'Intermediate'
    },
    {
        id:5,
        icon: <FaCss3 className="experience_details-icon" />,
        title: 'CSS',
        description: 'Intermediate'
    },
    {
        id:6,
        icon: <FaGit className="experience_details-icon" />,
        title: 'Git',
        description: 'Intermediate'
    }
];

const backend = [
    {
        id:1,
        icon: <FaPhp className="experience_details-icon" />,
        title: 'PHP',
        description: 'Intermediate'
    },
    {
        id:2,
        icon: <FaCode className="experience_details-icon" />,
        title: 'Ruby',
        description: 'Beginner'
    },
    {
        id:3,
        icon: <FaCode className="experience_details-icon" />,
        title: 'VBA',
        description: 'Intermediate'
    },
    {
        id:4,
        icon: <FaPython className="experience_details-icon" />,
        title: 'Python',
        description: 'Beginner'
    },
    {
        id:5,
        icon: <FaJava className="experience_details-icon" />,
        title: 'Java',
        description: 'Beginner'
    },
    {
        id:6,
        icon: <FaDatabase className="experience_details-icon" />,
        title: 'SQL',
        description: 'Intermediate'
    }
];

const tabList = [
    {
        key: 'Frontend',
        tab: 'Frontend',
    },
    {
        key: 'Backend',
        tab: 'Backend',
    },
    {
        key: 'Additional',
        tab: 'Additional',
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        {
                            frontend.map(({id, icon, title, description}) => {
                            return (
                                <article key={id} className="experience_details">
                                {icon}
                                    <div>
                                        <h4>{title}</h4>
                                        <small className="text-light">{description}</small>
                                    </div>
                                </article>
                            )
                            })
                        }
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        {
                            backend.map(({id, icon, title, description}) => {
                            return (
                                <article key={id} className="experience_details">
                                {icon}
                                    <div>
                                        <h4>{title}</h4>
                                        <small className="text-light">{description}</small>
                                    </div>
                                </article>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience