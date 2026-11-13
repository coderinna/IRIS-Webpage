function S2SNavbar() {
  const base = '#documentation?path=s2s&section=';

  return (
    <nav className="documentation-toc" aria-label="Sisällysluettelo">

      <div>Sisällysluettelo</div>

      <ul>
        <li>
          <a href={`${base}s2s-overview`}>Palvelinverkon yleiskuva</a>
        </li>

        <li>
          <a href={`${base}s2s-protocol`}>IRIS-S2S-protokollan rakenne</a>
        </li>

        <li>
          <a href={`${base}s2s-server-identity`}>Palvelinten tunnistaminen</a>
        </li>

        <li>
          <a href={`${base}s2s-connections`}>Palvelinten väliset yhteydet</a>
        </li>

        <li>
          <a href={`${base}s2s-routing`}>Viestien välitys ja reititys</a>
        </li>

        <li>
          <a href={`${base}s2s-synchronization`}>Käyttäjien ja kanavien synkronointi</a>
        </li>

        <li>
          <a href={`${base}s2s-recovery`}>Yhteyksien palautuminen ja uudelleensynkronointi</a>
        </li>

        <li>
          <a href={`${base}s2s-integrity`}>Verkon eheys ja virhetilanteet</a>
        </li>
      </ul>

    </nav>
  );
}

export default S2SNavbar;