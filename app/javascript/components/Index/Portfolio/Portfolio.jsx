import React from 'react';
import { Image, Card } from "antd";

import portfolio from '../../../../assets/images/portfolio1.jpg';

const { Meta } = Card;

const data = [
  {
    id:1,
    image: portfolio,
    title: 'Homestay',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:2,
    image: portfolio,
    title: 'Intelligent Food',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:3,
    image: portfolio,
    title: 'Guard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const gridStyle = {
  width: '50%',
  justifyContent: 'center',
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Card title="List of Projects Available" style={{ width: '100%', textAlign: 'center'}}>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <Card.Grid key={id} style={gridStyle}>
                <Image.PreviewGroup>
                  <Image src={image} alt={title} />
                </Image.PreviewGroup>
                <Card
                  bordered={false}
                  actions={[
                    "Intro",
                    "Github",
                    "Demo",
                  ]}>
                  
                  <Meta
                    title={title}
                    description="This is the description"
                  />
                </Card>
              </Card.Grid>
            )
          })
        }
      </Card>      
    </section>
  )
}

export default Portfolio