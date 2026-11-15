import "./irc-daemonds.css";

function IRC() {
  const daemons = [
    {
      name: "UnrealIRCd",
      language: "C",
      protocol: "Unreal Server Protocol",
      description:
        "Yksi maailman käytetyimmistä IRC-daemoneista. UnrealIRCd on pitkään kehitetty, modulaarinen palvelinohjelmisto, jossa painotetaan tietoturvaa, laajaa ominaisuusvalikoimaa ja verkkojen ylläpidettävyyttä.",
      details:
        "Sisältää oman palvelinten välisen protokollan, käyttäjien UID-tunnisteet, kanavien SJOIN-synkronoinnin sekä palvelinten välisen reitityksen.",
      sources: [
        {
          title: "UnrealIRCd – Official Documentation",
          url: "https://www.unrealircd.org/docs/"
        },
        {
          title: "UnrealIRCd – Server Protocol",
          url: "https://www.unrealircd.org/docs/Server_protocol"
        },
        {
          title: "UnrealIRCd – Source Code",
          url: "https://github.com/unrealircd/unrealircd"
        }
      ]
    },
    {
      name: "InspIRCd",
      language: "C++",
      protocol: "Spanning Tree Protocol",
      description:
        "Modulaarinen IRC-daemon, joka on suunniteltu erityisesti laajojen IRC-verkkojen ylläpitoon. Sen arkkitehtuuri mahdollistaa ominaisuuksien laajentamisen moduulien avulla.",
      details:
        "Palvelinten välinen viestintä perustuu omaan Spanning Tree -protokollaan. Se huolehtii palvelintopologiasta, käyttäjien ja kanavien tilan välittämisestä sekä verkon synkronoinnista.",
      sources: [
        {
          title: "InspIRCd – Official Documentation",
          url: "https://docs.inspircd.org/"
        },
        {
          title: "InspIRCd – Spanning Tree Module",
          url: "https://docs.inspircd.org/4/modules/spanningtree/"
        },
        {
          title: "InspIRCd – Source Code",
          url: "https://github.com/inspircd/inspircd"
        }
      ]
    },
    {
      name: "ngIRCd",
      language: "C",
      protocol: "IRC server linking",
      description:
        "Kevyt ja helposti käyttöönotettava IRC-daemon, joka on suunniteltu erityisesti pieniin ja yksityisiin IRC-verkkoihin.",
      details:
        "Toteuttaa IRC-palvelimen toiminnan C-kielellä. Tukee useiden ngIRCd-palvelinten yhdistämistä samaan verkkoon sekä TLS-suojattuja palvelin- ja asiakasyhteyksiä.",
      sources: [
        {
          title: "ngIRCd – Official Project",
          url: "https://github.com/ngircd/ngircd"
        },
        {
          title: "ngIRCd – Documentation",
          url: "https://ngircd.barton.de/"
        }
      ]
    },
    {
      name: "ircd-hybrid",
      language: "C",
      protocol: "Hybrid / TS-based S2S",
      description:
        "Pitkän kehityshistorian omaava IRC-daemon, jonka juuret ulottuvat 1990-luvun IRC-palvelinohjelmistoihin. Se on ollut merkittävä erityisesti EFnetin kaltaisissa IRC-verkoissa.",
      details:
        "Palvelinten välinen toiminta perustuu aikaleimoja hyödyntävään TS-protokollaperheeseen. Hybridin kehityshistoria liittyy IRC:n perinteisiin palvelinverkkoihin ja niiden tilanhallintaan.",
      sources: [
        {
          title: "ircd-hybrid – Official History",
          url: "https://www.ircd-hybrid.org/history.html"
        },
        {
          title: "ircd-hybrid – Official Project",
          url: "https://www.ircd-hybrid.org/"
        },
        {
          title: "ircd-hybrid – Source Code",
          url: "https://github.com/ircd-hybrid/ircd-hybrid"
        }
      ]
    },
    {
      name: "Ergo",
      language: "Go",
      protocol: "Ei S2S-federointia",
      description:
        "Moderni IRC-palvelin, joka yhdistää IRC-daemonin, käyttäjähallinnan, viestihistorian ja bouncer-toimintoja.",
      details:
        "Ergo on kirjoitettu Go-kielellä. Se on suunniteltu toimimaan itsenäisenä IRC-palvelimena, eikä nykyinen toteutus tue perinteistä palvelinten välistä S2S-linkittämistä.",
      sources: [
        {
          title: "Ergo – Official Website",
          url: "https://ergo.chat/"
        },
        {
          title: "Ergo – Official Manual",
          url: "https://github.com/ergochat/ergo/blob/master/docs/MANUAL.md"
        },
        {
          title: "Ergo – Source Code",
          url: "https://github.com/ergochat/ergo"
        }
      ]
    }
  ];

  return (
    <section
      id="irc"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        06
      </span>

      <h1>IRC Daemonit</h1>

      <p>
        IRC-palvelinohjelmistot eli IRC-daemonit vastaavat
        IRC-verkon toiminnasta, käyttäjien yhteyksistä,
        kanavien hallinnasta ja palvelinten välisestä
        tiedonsiirrosta.
      </p>

      <p>
        IRC-daemonit voivat käyttää samaa IRC-asiakasprotokollaa,
        mutta niiden sisäinen arkkitehtuuri, ohjelmointikielet
        ja palvelinten väliset tiedonsiirtoprotokollat
        voivat poiketa toisistaan.
      </p>


      <article className="Documentation_IRC_Feature Documentation_IRC_IRIS">
  
        <p>
          IRIS on Suomessa kehitetty IRC-daemon, jonka
          palvelinarkkitehtuuri ja palvelinten välinen
          tiedonsiirto perustuvat omaan teknologiaan.
          Se ei ole olemassa olevan IRC-daemonin uudelleenpaketointi
          tai valmiin S2S-protokollan päälle rakennettu toteutus.
        </p>

        <p>
          IRIS käyttää omaa binääristä IRIS Frame Protocol
          -viestikehystä ja TLV-koodausta. Sen päälle rakennettu
          IRIS-S2S vastaa palvelinten välisestä autentikoinnista,
          valtuutuksesta, palvelintopologiasta, käyttäjien
          propagoinnista, viestireitityksestä ja kanavien
          tilan synkronoinnista.
        </p>

        <p>
          Viestinnän luotettavuuden hallintaan kuuluvat
          Message ID -tunnisteet, deduplikointi,
          ACK-kuittaukset ja sequence number -mekanismi.
          Palvelinten luottamussuhteita hallitaan
          TrustRegistry-järjestelmällä.
        </p>
      </article>

      <h3>Teknologioiden keskeinen ero</h3>

      <p>
        Perinteiset IRC-daemonit ovat pääosin C- tai
        C++-kielellä toteutettuja. Myös Go on noussut
        modernien IRC-palvelinten toteutuskieleksi.
        IRIS tuo tähän rinnalle Node.js- ja JavaScript-pohjaisen
        toteutuksen, jossa myös palvelinten välinen
        binäärinen protokolla on kehitetty itsenäisesti.
      </p>

      <p>
        IRISin tavoitteena ei ole jäljitellä olemassa olevien
        daemonien arkkitehtuuria, vaan tarjota oma,
        modulaarinen ja ymmärrettävä vaihtoehto hajautetun
        IRC-infrastruktuurin rakentamiseen.
      </p>


      <h2>Muita IRCd ohjelmistoja</h2>


      <div className="Documentation_IRC_Features">
        {daemons.map(
          ({
            name,
            language,
            protocol,
            description,
            details,
            sources
          }) => (
            <article
              className="Documentation_IRC_Feature"
              key={name}
            >
              <div className="Documentation_IRC_FeatureHeader">
                <h3>{name}</h3>
              </div>

              <div className="Documentation_IRC_Metadata">
                <span>Ohjelmointikieli: {language}</span>
                <p></p>
              </div>

              <p>
                <strong>Protokolla:</strong> {protocol}
              </p>

              <p>{description}</p>

              <p>{details}</p>

              <div className="Documentation_IRC_Sources">
                <h4>Lähteet</h4>

                <ul>
                  {sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        )}
      </div>

    </section>
  );
}

export default IRC;