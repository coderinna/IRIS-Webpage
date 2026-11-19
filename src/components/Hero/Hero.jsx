import logo from '../../assets/logo.png';
import './Hero.css';
import networkImage from './IRIS.png';
import hereImage from './Screenshot-IRIS1.png'

function Hero() {
  const handleExplore = () => {
    document
      .getElementById('architecture')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };


  return (
    <section className="hero">
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />

<div className="hero__main_image">
  <img src={hereImage} alt="Legendary IRIS" />
</div>

      <div className="hero__content">


<div className="hero__logo">
  <img src={logo} alt="Legendary IRIS" />
</div>


        <p className="hero__eyebrow">
      Legendary IRC. Reimagined for the Modern Era.
        </p>

        <h1 className="hero__title">
         IRIS IRC
          <span>DAEMON</span>
        </h1>

        <p className="hero__description">
    IRIS Internet Reley Chat Daemon ja server-server -verkko,
     joka on suunniteltu omasta S2S-protokollasta lähtien.

        </p>

<p className="hero__tribute">
🇫🇮 Suomesta – kuten alkuperäinen IRC-daemonikin.
  <br /></p>


<div className="hero__image">
  <img
    src={networkImage}
    alt="IRIS distributed network architecture"
  />
</div>
        <div className="hero__actions">
          <button
            className="hero__button hero__button--primary"
            type="button"
            onClick={handleExplore}
          >
            Explore IRIS
            <span>↓</span>
          </button>

          <a
            className="hero__button hero__button--secondary"
            href="https://github.com/coderinna/IRIS-Webpage"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

