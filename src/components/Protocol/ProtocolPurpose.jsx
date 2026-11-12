import "./CSS/ProtocolPurpose.css";

const protocolFeatures = [
  {
    number: "01",
    title: "Binäärinen vs. tekstipohjainen viestintä",
    description:
      "Perinteiset tekstiprotokollat, kuten IRC:n rivipohjainen viestintä, ovat helposti luettavia ja debugattavia. Binäärimuoto mahdollistaa rakenteisemman tiedonsiirron, jossa viestityypit tunnistetaan suoraan opkoodeista ja numeeriset arvot voidaan esittää ilman tekstimuunnoksia."
  },
  {
    number: "02",
    title: "Oma protokolla vs. JSON",
    description:
      "JSON soveltuu hyvin yleiskäyttöiseen tiedonsiirtoon, mutta sisältää tekstimuotoisen rakenteen ja kenttien nimet jokaisessa viestissä. IRIS-S2S käyttää omaa viestirakennetta, joka voidaan määritellä nimenomaan palvelinten välisiä IRC-verkon tapahtumia varten."
  },
  {
    number: "03",
    title: "Oma viestirakenne vs. valmiit formaatit",
    description:
      "Esimerkiksi Protocol Buffers ja MessagePack tarjoavat valmiita binäärisiä tiedonsiirtoratkaisuja. IRIS-S2S:n oma viestirakenne antaa mahdollisuuden hallita viestityyppejä, yhteyden muodostamista ja verkkokohtaisia toimintoja saman protokollan määrittelyssä."
  },
  {
    number: "04",
    title: "Hajautettu verkonhallinta",
    description:
      "Yksittäiseen palvelimeen rajoittuva viestintä ei riitä hajautetussa IRC-verkossa. IRIS-S2S välittää verkon tapahtumia palvelinten välillä ja sisältää yhteyden uudelleenmuodostamiseen sekä tilan synkronointiin liittyvää logiikkaa."
  },
  {
    number: "05",
    title: "	IRIS-verkon tarpeisiin suunniteltu oma protokolla",
    description:
         "IRIS-S2S:n viestityypit, yhteydenmuodostus ja verkkotapahtumien käsittely voidaan suunnitella IRIS-verkon omien tarpeiden mukaan. Toteutus ei ole sidottu yleiskäyttöiseen tiedonsiirtomuotoon tai ulkopuolisen protokollan toimintamalliin. Protokollaa voidaan kehittää verkon mukana."
  }
];

export default function ProtocolPurpose() {
  return (
    <section className="protocol-purpose">
      <div className="protocol-purpose-heading">
        <span className="section-kicker">PROTOCOL DESIGN</span>
        <h2>Miksi oma IRIS-S2S-protokolla?</h2>
<p>
  IRIS-S2S on IRIS-verkon palvelinten väliseen viestintään
  suunniteltu protokolla. Sen avulla verkon palvelimet
  vaihtavat tietoja ja välittävät tapahtumia toisilleen.
</p>
<p>
  Se on erillinen IRC-asiakasprotokollasta, jota käytetään
  käyttäjien IRC-asiakkaiden ja palvelinten väliseen viestintään.
</p>
      </div>

      <div className="protocol-purpose-list">
        {protocolFeatures.map((feature) => (
          <div className="protocol-purpose-item" key={feature.number}>
            <span className="protocol-purpose-number">{feature.number}</span>

            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}