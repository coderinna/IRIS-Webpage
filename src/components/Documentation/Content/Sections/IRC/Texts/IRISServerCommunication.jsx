function IRISServerCommunication() {
  return (
    <>
      <h2 id="irc-server-communication">Palvelinten välinen viestintä</h2>

      <p>
        IRIS tukee useamman IRC-palvelimen muodostamaa verkkoa,
        jossa palvelimet vaihtavat tietoja keskenään IRIS-S2S-protokollan
        avulla. Palvelinten välinen viestintä mahdollistaa käyttäjien
        ja kanavien toiminnan myös palvelinrajat ylittävässä verkossa.
      </p>

      <h3 id="irc-s2s-protocol">IRIS-S2S-protokolla</h3>

      <p>
        IRIS-S2S on IRIS-projektissa kehitetty oma palvelinten välinen
        viestintäprotokolla. Sen avulla palvelimet muodostavat yhteyksiä
        ja vaihtavat verkon toiminnan edellyttämiä tapahtuma- ja tilatietoja.
      </p>

      <h3 id="irc-user-routing">Käyttäjien reititys</h3>

      <p>
        Hajautetussa IRC-verkossa käyttäjä voi olla yhteydessä eri
        palvelimeen kuin keskustelun muut osallistujat. Palvelinten
        välinen reititys välittää käyttäjien viestit oikeisiin
        verkon osiin.
      </p>

      <h3 id="irc-channel-sync">Kanavien synkronointi</h3>

      <p>
        Palvelimet vaihtavat kanaviin liittyviä tietoja, jotta verkon
        eri osissa voidaan ylläpitää yhtenäistä näkymää kanavien
        jäsenistä ja niiden tilasta. Synkronoinnissa huomioidaan
        esimerkiksi käyttäjien liittymiset ja poistumiset sekä
        kanavien tilaan liittyvät muutokset.
      </p>

      <h3 id="irc-server-recovery">Palvelinyhteyden palautuminen</h3>

      <p>
        Palvelinten välisen yhteyden katketessa verkko voi jakautua
        erillisiin osiin. Yhteyden palauduttua palvelimet muodostavat
        yhteyden uudelleen ja vaihtavat tarvittavia tilatietoja
        verkon yhtenäisyyden palauttamiseksi.
      </p>
    </>
  );
}

export default IRISServerCommunication;