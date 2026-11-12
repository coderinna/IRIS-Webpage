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

function Navbar({
  isDocumentSectionOpen,
  setIsDocumentSectionOpen
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

const toggleDocumentation = () => {
  const nextState = !isDocumentSectionOpen;

  setIsDocumentSectionOpen(nextState);

  window.location.hash = nextState ? 'documentation' : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setIsOpen(false);
};

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <a
          className="navbar__brand"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setIsDocumentSectionOpen(false);
            handleLinkClick();
          }}
        >
          <img src={logo} alt="IRIS logo" />
          <span>IRIS</span>
        </a>

        {!isDocumentSectionOpen && (
          <>
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
          </>
        )}

        <button
          className="navbar__documentation-button"
          onClick={toggleDocumentation}
        >
          {isDocumentSectionOpen
            ? '← Takaisin sivustolle'
            : 'Documentation ↗'}
        </button>

      </div>
    </header>
  );
}

export default Navbar;