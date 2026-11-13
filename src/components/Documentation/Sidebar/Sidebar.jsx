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
  <a href="#documentation?path=iris_s2s" onClick={closeMenu}>S2S</a>
  <a href="#documentation?path=architecture" onClick={closeMenu}>Järjestelmäarkkitehtuuri</a>
  <a href="#documentation?path=security" onClick={closeMenu}>Turvallisuus</a>
</nav>
    </aside>
  );
}

export default DocumentationSidebar;