import { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const navigation = [
  {
    label: 'Architecture',
    href: '#architecture'
  },
  {
    label: 'S2S-Protocolla',
    href: '#protocol'
  },
  {
    label: 'Project images',
    href: '#project-images'
  },
  {
    label: 'Sanasto',
    href: '#sanasto'
  },
  {
    label: 'LICENCE',
    href: '#licence'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/coderinna/IRIS-Webpage'
  }
];

function Navbar() {
  // Tila mobiilivalikon auki/kiinni-olemisen seurantaan
  const [isOpen, setIsOpen] = useState(false);

  // Sulkee valikon, kun linkkiä klikataan (hyödyllinen anchor-linkeille)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="/" onClick={handleLinkClick}>
          <img src={logo} alt="IRIS logo" />
          <span>IRIS</span>
        </a>

        {/* Mobiililinkit saavat 'is-active' -luokan, kun valikko on auki */}
        <nav className={`navbar__links ${isOpen ? 'is-active' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hampurilaisvalikon painike mobiililaitteille */}
        <button 
          className={`navbar__toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Avaa valikko"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
