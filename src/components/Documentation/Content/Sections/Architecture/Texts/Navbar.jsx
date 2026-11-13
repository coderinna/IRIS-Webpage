function ArchitectureNavbar() {
  const base = '#documentation?path=architecture&section=';

  return (
    <nav className="documentation-toc" aria-label="Sisällysluettelo">
      <div>Sisällysluettelo</div>

      <ul>

        <li>
          <a href={`${base}architecture-core`}>
            IRC-daemonin rakenne
          </a>
        </li>

        <li>
          <a href={`${base}architecture-modules`}>
            Ohjelmiston moduulit
          </a>
        </li>

        <li>
          <a href={`${base}architecture-client`}>
            Asiakasyhteyksien hallinta
          </a>
        </li>

        <li>
          <a href={`${base}architecture-network`}>
            Verkkokerros
          </a>
        </li>

        <li>
          <a href={`${base}architecture-data-flow`}>
            Tiedonkulku ja tapahtumien käsittely
          </a>
        </li>

        <li>
          <a href={`${base}architecture-components`}>
            Komponenttien välinen yhteistyö
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ArchitectureNavbar;