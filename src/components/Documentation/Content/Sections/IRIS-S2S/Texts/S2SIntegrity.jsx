function S2SIntegrity() {
  return (
    <section id="s2s-integrity" className="documentation-section">

      <h2>Verkon eheys ja virhetilanteet</h2>

      <p>
        Hajautetun palvelinverkon luotettavuus perustuu siihen,
        että palvelimet käsittelevät vastaanotetut tapahtumat
        johdonmukaisesti ja tunnistavat tilanteet, joissa
        verkkotila voi poiketa toisistaan eri palvelimilla.
      </p>

      <h3 id="s2s-data-consistency">Verkon tilan johdonmukaisuus</h3>

      <p>
        Käyttäjien, kanavien ja palvelinten tilatietojen täytyy
        pysyä mahdollisimman yhtenäisinä koko verkossa.
        Palvelinten välinen synkronointi auttaa ylläpitämään
        tätä johdonmukaisuutta.
      </p>

      <h3 id="s2s-error-handling">Virhetilanteiden käsittely</h3>

      <p>
        Palvelinten välisessä viestinnässä voi esiintyä virheellisiä
        viestejä, odottamattomia yhteyden katkeamisia tai tilanteita,
        joissa vastaanotettua tapahtumaa ei voida käsitellä.
        Virheiden hallittu käsittely on tärkeää verkon vakauden
        kannalta.
      </p>

      <h3 id="s2s-security">Tietoturva ja luotettavuus</h3>

      <p>
        Palvelinverkon turvallisuus edellyttää palvelinten
        tunnistamista, yhteyksien hallintaa ja viestien
        asianmukaista käsittelyä. Näiden toimintojen avulla
        voidaan ehkäistä luvattomia yhteyksiä ja virheellistä
        tiedonsiirtoa.
      </p>

    </section>
  );
}

export default S2SIntegrity;