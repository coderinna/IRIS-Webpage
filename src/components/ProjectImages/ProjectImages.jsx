// src/components/ProjectImages/ProjectImages.jsx

import './ProjectImages.css';

import IMG from './images/im5.png';
import IMG2 from './images/img2.png';
import IMG3 from './images/img3.png';
import IMG4 from './images/im7.png';
import IMG5 from './images/im8.png';
import IMG6 from './images/im9.png';
import IMG7 from './images/img4.png';
import IMG8 from './images/im6.png';

import IMG_7 from './images/img5.png';
import IMG_8 from './images/img6.png';
import IMG_9 from './images/img7.png';

const images = [
  {
    id: 1,
    title: 'IRIS',
    description: 'Worst possible Debug hell - Monta IRIS serveriä, monta  IRC clienttiä.',
    image: IMG
  },
  {
    id: 2,
    title: 'IRIS',
    description: 'More debug hell - perus IRC komentojen (message) tekoa',
    image: IMG2
  },
  {
    id: 3,
    title: 'IRIS',
    description: 'and f*cking More debug hell. Naurettiin tälle undefinedille jo oikeasti.',
    image:  IMG3
  },
  {
    id: 4,
    title: 'IRIS',
    description: 'Debug torture - offered by IRIS. 3 irc clienttiä Kolmella eri IRIS serverillä. NAMES commandin hieromisesta.',
    image:  IMG4
  },
  {
    id: 5,
    title: 'IRIS',
    description: 'Debug torture vol 2-  Noticen maaliin saattamista',
    image:  IMG5
  },
  {
    id: 6,
    title: 'IRIS',
    description: 'Debug MAXIME torture - IRIS Serveri sammutettiin → serveri käynnistyi/restarttasi → S2S-yhteys palautui → muut serverit yhdistivät siihen uudelleen → verkon toiminta palautui.',
    image:  IMG6
  },
  {
    id: 7,
    title: 'IRIS',
    description: 'Avaimella suojatun kanavan testailua.',
    image:  IMG_7
  },
  {
    id: 8,
    title: 'IRIS',
    description: 'Oppien testailua',
    image:  IMG_8
  },
  {
    id: 9,
    title: 'IRIS',
    description: 'TOPIC rakentelun ajoilta. Testattu oikeuksia.',
    image:  IMG_9
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
       Kuvia matkan varrelta IRIS projectista.
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