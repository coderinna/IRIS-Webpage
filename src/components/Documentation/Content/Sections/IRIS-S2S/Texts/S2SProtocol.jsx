function S2SProtocol() {
  return (
    <section id="s2s-protocol" className="documentation-section">

      <h2>IRIS-S2S-protokollan rakenne</h2>

      <p>
        IRIS-S2S on IRIS-projektia varten kehitetty oma
        palvelinten välinen protokolla. Se määrittelee, miten
        palvelimet muodostavat yhteyksiä, tunnistavat viestit
        ja vaihtavat tietoa keskenään.
      </p>

      <p>
        Protokolla on erillinen tavallisesta IRC-asiakasprotokollasta.
        IRC-asiakas kommunikoi palvelimen kanssa IRC-komentojen avulla,
        kun taas palvelinten välinen liikenne käyttää IRIS-S2S:n
        määrittelemää viestirakennetta.
      </p>

      <h3 id="s2s-message-structure">Viestirakenne</h3>

      <p>
        Palvelinten väliset viestit sisältävät tiedon viestin tyypistä
        sekä sen käsittelyyn tarvittavat tiedot. Viestirakenne
        mahdollistaa eri tapahtumien käsittelyn niiden tarkoituksen
        perusteella.
      </p>

      <h3 id="s2s-message-types">Viestityypit</h3>

      <p>
        Protokollan viestityypit määrittelevät, millaista toimintoa
        palvelimelta toiselle välitetään. Tällaisia tapahtumia ovat
        esimerkiksi käyttäjien liittyminen kanaville ja palvelinten
        väliset tilapäivitykset.
      </p>

      <h3 id="s2s-message-processing">Viestien käsittely</h3>

      <p>
        Vastaanottava palvelin tunnistaa saapuvan viestin tyypin,
        käsittelee sen vastaavan toiminnon kautta ja päivittää
        tarvittaessa paikallista verkkotilaa.
      </p>

    </section>
  );
}

export default S2SProtocol;