import {
  Binary,
  Fingerprint,
  ShieldCheck,
  Network,
  Activity
} from "lucide-react";

import "./Introduction.css"

const features = [
  {
    icon: Binary,
    title: "Oma Frame Protokolla",
    paragraphs: [
      <>
        IRIS käyttää omaa binääristä viestikehysrakennetta,
        IRIS Frame Protokollaa. Se määrittelee IRIS palvelinten
        välisen tiedonsiirron rakenteen, viestityypit ja
        viestien käsittelyn.
      </>,
      <>
        Protokolla hyödyntää TLV-koodausta (Type-Length-Value),
        jonka avulla viestien sisältö voidaan jäsentää
        rakenteellisesti ja laajennettavasti.
      </>
    ]
  },
  {
    icon: Fingerprint,
    title: "Palvelin- ja client-identiteetit",
    paragraphs: [
      <>
        IRIS käyttää yksilöllisiä palvelin- ja
        asiakastunnisteita. Palvelimet tunnistetaan
        serverId-tunnisteella ja IRC-asiakkaat clientId-tunnisteella.
      </>,
      <>
        Näistä muodostuva yhdistetty identiteetti mahdollistaa
        asiakkaiden yksilöinnin hajautetussa verkossa sekä
        niiden alkuperäisen palvelimen tunnistamisen.
      </>
    ]
  },
  {
    icon: ShieldCheck,
    title: "Kaksisuuntainen valtuutus",
    paragraphs: [
      <>
        IRIS sisältää palvelinten välisen autentikointi- ja
        valtuutusjärjestelmän. Se tarkistaa sekä vastaanotettujen
        että lähetettävien toimintojen käyttöoikeudet.
      </>,
      <>
        TrustRegistry hallitsee palvelinten luottamussuhteita.
        Oikeuksien peruuttaminen voidaan kohdistaa myös
        jo muodostettuihin aktiivisiin yhteyksiin.
      </>
    ]
  },
  {
    icon: Network,
    title: "Hajautettu palvelinverkko",
    paragraphs: [
      <>
        IRIS mahdollistaa useiden itsenäisten IRC-palvelinten
        yhdistämisen yhteiseksi verkoksi. Palvelimet ylläpitävät
        tietoa verkon rakenteesta ja välittävät käyttäjiin
        sekä kanaviin liittyvää tilaa toisilleen.
      </>,
      <>
        Arkkitehtuuri sisältää palvelintopologian hallinnan,
        käyttäjien propagoinnin, palvelinten välisen
        viestireitityksen sekä kanavien tilan synkronoinnin.
      </>
    ]
  },
  {
    icon: Activity,
    title: "Viestien luotettavuuden hallinta",
    paragraphs: [
      <>
        IRIS sisältää mekanismeja palvelinten välisen
        viestiliikenteen luotettavuuden ja eheyden hallintaan.
        Näihin kuuluvat yksilölliset Message ID -tunnisteet,
        viestien deduplikointi, ACK-kuittaukset ja
        sequence number -järjestelmä.
      </>,
      <>
        Näiden mekanismien avulla järjestelmä voi tunnistaa
        päällekkäisiä viestejä, seurata viestien käsittelyä
        ja valvoa niiden järjestystä.
      </>
    ]
  }
];

function Introduction() {
  return (
    <section
      id="introduction"
      className="documentation-section Documentation_Introduction"
    >
      <span className="documentation-section-number">01</span>

      <h1>Johdanto</h1>

      <p>
        IRIS on Node.js-ympäristössä toteutettu IRC-palvelinohjelmisto
        eli IRC-daemon. Se tarjoaa yhteensopivan rajapinnan IRC-asiakasohjelmille
        sekä oman palvelinten väliseen viestintään tarkoitetun IRIS-S2S
        protokollan.
      </p>

      <p>
        IRISin ydintavoitteena on rakentaa oma, kevyempi ja
        helposti ymmärrettävä IRC-infrastruktuuri. Järjestelmä
        perustuu omaan protokollaan ja hajautettuun
        palvelinarkkitehtuuriin, joiden avulla itsenäiset
        IRC-palvelimet voivat muodostaa yhteisen hajautetunverkon.
      </p>

<p>
  IRISin kehityksessä painotetaan oman teknologian
 <strong> ymmärrettävyyttä, modulaarisuutta ja ylläpidettävyyttä</strong>.
  Koodirakenne on suunniteltu modulaariseksi, jolloin
  järjestelmän eri toiminnot on jaettu selkeisiin,
  toisistaan vastuullisesti eroteltuihin kokonaisuuksiin.
  Tämä helpottaa koodin ylläpitoa, testaamista ja
  jatkokehittämistä.
</p>
     

      <h2>IRISin tekniset ratkaisut</h2>

      <p>
        IRIS ei perustu valmiiseen palvelinten väliseen
        protokollaan, vaan sen verkkokommunikaatio, palvelinten
        välinen tiedonsiirto ja hajautetun verkon toiminta
        on rakennettu omaa IRIS-S2S-protokollaa varten.
      </p>

      <div className="Documentation_Introduction_Features">
        {features.map(({ icon: Icon, title, paragraphs }) => (
          <article
            className="Documentation_Introduction_Feature"
            key={title}
          >
            <div className="Documentation_Introduction_FeatureHeader">
              <Icon size={22} strokeWidth={1.6} />
              <h3>{title}</h3>
            </div>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>

      <p>
        Dokumentaatiota täydennetään kun kiinnostaa ja keretään, se on vaiheessa ja puuttellinen...
      </p>
    </section>
  );
}

export default Introduction;