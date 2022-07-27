import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    title: "ICE CREAM - My first team project (HTML, CSS, JavaScript)",
    github: "https://github.com/KurbatovAS/project5",
    demo: "https://kurbatovas.github.io/project5/",
  },
  {
    id: 2,
    title: "Filmoteka - Movie search service! (HTML, CSS, JavaScript) ",
    github: "https://github.com/KurbatovAS/project6",
    demo: "https://kurbatovas.github.io/project6/",
  },
  {
    id: 3,
    title:
      "Slim mom -Weight loss App (JavaScript, React.js, Redux, Node.js, MongoDB)",
    github: "https://github.com/Lelyak-Andriy/slim-mom-project",
    demo: "https:slim-mom.netlify.app/",
  },
  {
    id: 4,
    title: "Phonebook App(JavaScript, React.js, Redux)",
    github: "https://github.com/Lelyak-Andriy/goit-react-hw-08-phonebook",
    demo: "https://stately-puppy-4a51aa.netlify.app",
  },
  {
    id: 5,
    title: "Movies Search Service (JavaScript, React.js, RestAPI)",
    github: "https://github.com/Lelyak-Andriy/goit-react-hw-05-movies",
    demo: "https://sparkly-strudel-db1d39.netlify.app/",
  },
  {
    id: 6,
    title: "Image Finder (JavaScript, React.js, RestAPI)",
    github: "https://github.com/Lelyak-Andriy/goit-react-hw-04-images",
    demo: "https://lelyak-andriy.github.io/goit-react-hw-04-images/",
  },
  {
    id: 7,
    title: "Feedback (JavaScript, React.js)",
    github: "https://github.com/Lelyak-Andriy/goit-react-hw-04-feedback",
    demo: "https://lelyak-andriy.github.io/goit-react-hw-04-feedback/",
  },
  {
    id: 8,
    title: "Countries information (HTML, CSS, JavaScript, RestAPI)",
    github: "https://github.com/Lelyak-Andriy/goit-js-hw-10",
    demo: "https://lelyak-andriy.github.io/goit-js-hw-10/",
  },
  {
    id: 9,
    title: "Web studio (HTML, CSS, JavaScript)",
    github: "https://github.com/Lelyak-Andriy/goit-markup-hw-08",
    demo: "https://lelyak-andriy.github.io/goit-markup-hw-08/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                {/* <div className="portfolio__item-image">
                  <img srс={ice} alt={title} />
                </div> */}
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
