import ArchitectureNavbar from './Texts/Navbar.jsx';

function Architecture() {
  return (
    <section
      id="architecture"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        04
      </span>

      <h1>Järjestelmäarkkitehtuuri</h1>

<p>
  Tässä osiossa esitellään IRIS IRCd:n tekninen arkkitehtuuri,
  ohjelmiston sisäinen rakenne sekä keskeiset järjestelmäkomponentit
  ja niiden väliset riippuvuudet.
</p>

<p>
  Dokumentaatio tarkastelee järjestelmää arkkitehtuuritasolla:
  miten ohjelmiston eri kerrokset ja moduulit on jäsennelty,
  miten niiden välinen vastuunjako on toteutettu ja miten
  komponentit muodostavat yhdessä toimivan IRC-palvelinohjelmiston.
</p>

<p>(kesken)</p>

      <ArchitectureNavbar />


    </section>
  );
}

export default Architecture;