import React from 'react'

const Resume = () => {
  return (
    <section id="resume">
      <h5>My Recent Work</h5>
      <h2>Resume</h2>

      <div className="container portfolio_container">
        <article key={id} className="portfolio_item">
        <div className="portfolio_item-image">
            <img src={image} alt={title} />
        </div>
        <h3 className="text-light">{title}</h3>
        <div className="portfolio_item-cta">
            <a href={github} className="btn">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Resume