function TransportSecurity() {
  return (

<section
  id="transport-security"
  className="documentation-subsection"
>
  <h2>Tietoliikenteen suojaaminen</h2>

<p>(kesken pahasti)</p>
  <p>
    IRISin tietoliikenteen suojaaminen keskittyy
    IRC-clientien ja palvelinten sekä palvelinten
    välisten yhteyksien salaamiseen. TLS:n avulla
    voidaan suojata verkossa siirrettävien tietojen
    luottamuksellisuus ja eheys.
  </p>

  <h3>TLS-suojatut yhteydet</h3>
{/*
IRC-clientin ja palvelimen välinen TLS-yhteys (C2S).
Palvelinten välinen TLS-yhteys (S2S).
Salaus liikenteen luottamuksellisuuden ja eheyden suojaamiseksi.
TLS-yhteyksien käyttöönotto palvelimen konfiguraatiossa.
*/}
  <h3>Varmenteiden tarkistus</h3>
  {/*
  Palvelimen TLS-varmenne.
Varmenteen voimassaolon tarkistaminen.
Varmenteen nimen ja palvelimen osoitteen vastaavuus.
Luotetun varmentajan tarkistaminen.
S2S-yhteyksissä mahdollinen molemminpuolinen tunnistaminen (mTLS).
  */}

  <h3>Salaamattomien yhteyksien käsittely</h3>
  {/*
  - Sallitaanko salaamattomat IRC-yhteydet?
- Voidaanko salaamaton yhteys ohjata TLS-porttiin?
- Sallitaanko salaamattomat S2S-yhteydet?
- Miten palvelin käsittelee yhteyden, joka ei täytä vaadittuja suojausvaatimuksia?
  */}
</section>
  );
}

export default TransportSecurity;