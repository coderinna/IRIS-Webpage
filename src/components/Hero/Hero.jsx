import logo from '../../assets/logo.png';
import './Hero.css';

const heroStats = [
  'IRC Daemon',
  'IRIS-S2S',
  'Distributed Network'
];

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

      <div className="hero__content">
        <div className="hero__logo">
          <img src={logo} alt="Legendary IRIS" />
        </div>

        <p className="hero__eyebrow">
          🌸 LEGENDARY IRIS
        </p>

        <h1 className="hero__title">
          Modern IRC.
          <span> Distributed.</span>
        </h1>

        <p className="hero__description">
          A custom IRC daemon and server-to-server network
          designed from the protocol up.
        </p>

<p className="hero__tribute">
  🇫🇮 Suomesta, niinku alkuperäinenkin. ❤️ You are awesome, Jarkko!
  <br />
  🌸 Nyt tyttöjen tekemänä.
</p>

        <div className="hero__stats">
          {heroStats.map((stat) => (
            <span
              key={stat}
              className="hero__stat"
            >
              {stat}
            </span>
          ))}
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
            href="https://github.com/NinaPaivinen/IRIS-Webpage"
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

