import React from 'react';
import './portfolio.css';
import portfolio from '../../../../assets/images/portfolio1.jpg';
import { Image } from "antd";

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

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <Image.PreviewGroup>
                    <Image src={image} alt={title} />
                  </Image.PreviewGroup>
                </div>
                <h3 className="text-light">{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio