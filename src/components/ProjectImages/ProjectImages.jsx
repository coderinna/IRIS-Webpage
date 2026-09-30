// src/components/ProjectImages/ProjectImages.jsx

import './ProjectImages.css';

import IMG from './images/img1.png';
import IMG2 from './images/img2.png';

const images = [
  {
    id: 1,
    title: 'IRIS',
    description: 'Debug hell',
    image: IMG
  },
  {
    id: 2,
    title: 'IRIS',
    description: 'More debug hell',
    image: IMG2
  },
  {
    id: 3,
    title: 'IRIS',
    description: 'and f*cking More debug hell',
    image:  IMG2
  }
];

function ProjectImages() {
  return (
    <section
      id="project-images"
      className="project-images"
    >
      <div className="project-images__header">
        <span className="project-images__eyebrow">
          🌸 PROJECT
        </span>

        <h2 className="project-images__title">
          IRIS in <span>Action</span>
        </h2>

        <p className="project-images__description">
          Screenshots, architecture views and development
          snapshots from the IRIS project.
        </p>
      </div>

      <div className="project-images__grid">
        {images.map((item) => (
          <article
            key={item.id}
            className="project-images__card"
          >
            <div className="project-images__image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="project-images__image"
              />
            </div>

            <div className="project-images__content">
              <span className="project-images__number">
                0{item.id}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectImages;