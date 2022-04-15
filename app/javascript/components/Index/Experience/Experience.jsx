import React from "react";
import { UserOutlined } from "@ant-design/icons";
import './experience.css';

const frontend = [
    {
        id:1,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'ReactJS',
        description: 'Experienced'
    },
    {
        id:2,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'Javascript',
        description: 'Experienced'
    },
    {
        id:3,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'HTML',
        description: 'Experienced'
    },
    {
        id:4,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'CSS',
        description: 'Experienced'
    },
    {
        id:5,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'Git',
        description: 'Experienced'
    }
]

const backend = [
    {
        id:1,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'PHP',
        description: 'Experienced'
    },
    {
        id:2,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'Ruby on Rails',
        description: 'Experienced'
    },
    {
        id:3,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'SQL',
        description: 'Experienced'
    },
    {
        id:4,
        icon: <UserOutlined className="experience_details-icon" />,
        title: 'VBA',
        description: 'Experienced'
    }
]

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