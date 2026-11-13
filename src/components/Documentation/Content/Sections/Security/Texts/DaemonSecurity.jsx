function DaemonSecurity() {
  return (
    <section
      id="daemon-security"
      className="documentation-subsection"
    >
      <h2>IRC-daemonin tietoturva</h2>
<p>(kesken pahasti)</p>
      <p>
        IRC-daemonin tietoturva keskittyy palvelinohjelmiston
        ja siihen yhdistettyjen IRC-clientien välisen
        viestinnän suojaamiseen. Tavoitteena on varmistaa,
        että asiakkaiden lähettämät komennot ja tiedot
        käsitellään hallitusti ja että käyttäjille
        myönnetään vain heidän oikeuksiinsa kuuluvia toimintoja.
      </p>

      <h3>Client-yhteyksien hallinta (C2S)</h3>
      <p>
        IRC-clientien ja palvelimen välisten yhteyksien
        muodostaminen, ylläpito ja sulkeminen.
      </p>

      <h3>Viestien ja komentojen validointi</h3>
      <p>
        Asiakkaiden lähettämien IRC-viestien rakenteen,
        komentojen ja parametrien tarkistaminen ennen
        niiden käsittelyä.
      </p>

      <h3>Käyttäjien tunnistaminen</h3>
      <p>
        Käyttäjien tunnistamiseen ja kirjautumiseen
        liittyvät mekanismit sekä tunnistetietojen käsittely.
      </p>

      <h3>Käyttäjä- ja operaattorioikeudet</h3>
      <p>
        Käyttäjille ja operaattoreille määritellyt oikeudet
        sekä niiden tarkistaminen komentojen suorittamisen
        yhteydessä.
      </p>

      <h3>Kanavien käyttöoikeudet</h3>
      <p>
        Kanavien tilojen, käyttäjäroolien ja
        käyttöoikeuksien hallinta. Esimerkiksi kanavan
        MODE-asetukset voivat rajoittaa sitä, kuka saa
        suorittaa tiettyjä toimintoja.
      </p>
    </section>
  );
}

export default DaemonSecurity;