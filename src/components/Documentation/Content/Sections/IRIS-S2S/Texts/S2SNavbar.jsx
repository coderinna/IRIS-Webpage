function S2SNavbar() {
  const base = '#documentation?path=s2s&section=';

  return (
    <nav className="documentation-toc" aria-label="Sisällysluettelo">

      <div>Sisällysluettelo</div>

      <ul>
        <li>
          <a href={`${base}s2s-overview`}>Hajatettu palvelinverkko yleiskuva</a>
        </li>

        <li>
          <a href={`${base}s2s-protocol`}>IRIS-S2S-protokollan rakenne</a>
        </li>



      </ul>

    </nav>
  );
}

export default S2SNavbar;