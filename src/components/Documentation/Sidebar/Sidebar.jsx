import './CSS/Sidebar.css';

function DocumentationSidebar({ menuOpen, setMenuOpen }) {
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <aside
      className={`iris-documentation-sidebar ${
        menuOpen ? 'is-open' : ''
      }`}
    >
      <button
        className="iris-documentation-menu-toggle"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle documentation menu"
      >
        <span>Dokumentaatio</span>
        <span>{menuOpen ? '−' : '+'}</span>
      </button>
<nav className="iris-documentation-nav">
  <a href="#documentation?path=introduction" onClick={closeMenu}>Johdanto</a>
  <a href="#documentation?path=irc" onClick={closeMenu}>IRC</a>
  <a href="#documentation?path=architecture" onClick={closeMenu}>Arkkitehtuuri</a>
  <a href="#documentation?path=s2s-protocol" onClick={closeMenu}>S2S-protokolla</a>
  <a href="#documentation?path=authentication" onClick={closeMenu}>Palvelinten tunnistautuminen</a>
  <a href="#documentation?path=client-protocol" onClick={closeMenu}>Asiakasprotokolla</a>
  <a href="#documentation?path=network-state" onClick={closeMenu}>Verkon tilanhallinta</a>
  <a href="#documentation?path=security" onClick={closeMenu}>Tietoturva</a>
  <a href="#documentation?path=deployment" onClick={closeMenu}>Käyttöönotto</a>
</nav>
    </aside>
  );
}

export default DocumentationSidebar;