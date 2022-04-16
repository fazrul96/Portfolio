import React, { useState } from "react";
import { Card, Avatar, Badge } from 'antd';

const { Meta } = Card;

const gridStyle = {
    width: '50%',
    textAlign: 'left'
};

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

const frontendData = [
    {
        id:1,
        title: 'Bootstrap',
        level: 'Intermediate'
    },
    {
        id:2,
        title: 'ReactJS',
        level: 'Beginner'
    },
    {
        id:3,
        title: 'HTML5',
        level: 'Intermediate'
    },
    {
        id:4,
        title: 'Javascript',
        level: 'Beginner'
    },
    {
        id:5,
        title: 'CSS',
        level: 'Intermediate'
    },
    {
        id:6,
        title: 'Git',
        level: 'Intermediate'
    }
]

const backendData = [
    {
        id:1,
        title: 'PHP',
        level: 'Intermediate'
    },
    {
        id:2,
        title: 'Ruby',
        level: 'Beginner'
    },
    {
        id:3,
        title: 'VBA',
        level: 'Intermediate'
    },
    {
        id:4,
        title: 'Python',
        level: 'Beginner'
    },
    {
        id:5,
        title: 'Java',
        level: 'Beginner'
    },
    {
        id:6,
        title: 'SQL',
        level: 'Intermediate'
    }
]

const additionalData = [
    {
        id:1,
        title: 'Adobe Photoshop',
        level: 'Intermediate'
    },
    {
        id:2,
        title: 'Adobe After Effect',
        level: 'Beginner'
    },
    {
        id:3,
        title: 'Unity',
        level: 'Beginner'
    }
]

const developmentList = {
    Frontend: 
    <>
        {
          frontendData.map(({id, title, level}) => {
            return (
            <Badge.Ribbon key={id} text="New">
                <Card.Grid key={id} style={gridStyle}>
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={title}
                        description={level}
                    />
                </Card.Grid>
            </Badge.Ribbon>
            )
          })
        }
    </>,
    Backend: 
    <>
        {
          backendData.map(({id, title, level}) => {
            return (
            <Badge.Ribbon key={id} text="New">
                <Card.Grid key={id} style={gridStyle}>
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={title}
                        description={level}
                    />
                </Card.Grid>
            </Badge.Ribbon>
            )
          })
        }
    </>,
    Additional: 
    <>
        {
          additionalData.map(({id, title, level}) => {
            return (
            <Badge.Ribbon key={id} text="New">
                <Card.Grid key={id} style={gridStyle}>
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={title}
                        description={level}
                    />
                </Card.Grid>
            </Badge.Ribbon>
            )
          })
        }
    </>
};

const Experience = () => {
    const [activeTabKey, setActiveTabKey] = useState('Frontend');

    const onTabChange = key => {
        setActiveTabKey(key);
    };
  
    return (
        <section id="experience">
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className="site-card-wrapper">
            <Card
                style={{ width: '100%', textAlign: 'center'}}
                title="Development Skills"
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={key => {
                onTabChange(key);
                }}
            >
                {developmentList[activeTabKey]}
            </Card>
            
          </div>
        </section>
    )
}

export default Experience