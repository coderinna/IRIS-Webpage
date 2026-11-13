function SecurityNavbar() {
  const base = '#documentation?path=security&section=';

  return (
    <nav className="documentation-toc" aria-label="Sisällysluettelo">
      <div>Sisällysluettelo</div>

      <ul>
        <li>
          <a href={`${base}irc-safety`}>
            IRC:n turvallinen käyttö
          </a>
        </li>

        <li>
          <a href={`${base}transport-security`}>
            Tietoliikenteen suojaaminen
          </a>
        </li>

        <li>
          <a href={`${base}s2s-security`}>
            Palvelinten välinen tietoturva (S2S)
          </a>
        </li>

        <li>
          <a href={`${base}daemon-security`}>
            IRC-daemonin tietoturva
          </a>
        </li>

        <li>
          <a href={`${base}server-reliability`}>
            Palvelimen toimintavarmuus
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SecurityNavbar;