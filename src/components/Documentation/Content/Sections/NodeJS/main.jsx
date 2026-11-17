
function NodeJS() {
  return (
    <section
      id="node-js"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        05
      </span>

      <h1>Node.js</h1>

      <p>
        IRIS on toteutettu Node.js-ympäristössä käyttäen
        JavaScript-ohjelmointikieltä, joka on poikkeava ratkaisu muiden valtavirta IRC daemondien C-kielistä.
      </p>

      <h2>Node.js:n tausta ja kehitys</h2>

      <p>
        Node.js julkaistiin vuonna 2009 eli sitä ei ole ollut edes olemassa, kun monet IRC daemondit valmistuneet.
     </p>  <p>
        NodeJS:n tavoitteena oli tarjota
        <strong> JavaScript-ympäristö palvelinpuolen ohjelmointiin</strong> ja
        erityisesti tehokkaaseen, tapahtumapohjaiseen verkkoliikenteen
        käsittelyyn.
     </p>


<p>
  Node.js perustuu Googlen V8 JavaScript -moottoriin ja
  libuv-kirjastoon, joka toteuttaa tapahtumasilmukan sekä
  alustariippumattoman asynkronisen I/O-käsittelyn.
  Verkkoliikenteessä libuv hyödyntää käyttöjärjestelmän
  tarjoamia ei-estäviä I/O-mekanismeja.
  Tämän ansiosta yksi tapahtumasilmukka voi käsitellä
  useita samanaikaisia verkkoyhteyksiä ilman, että
  jokaiselle yhteydelle tarvitaan omaa käyttöjärjestelmäsäiettä.
</p>


      <h2>Tapahtumapohjainen arkkitehtuuri</h2>

      <p>
        Node.js suorittaa JavaScript-koodia normaalisti yhdessä
    pääsäikeessä     <strong>tapahtumasilmukan (Event Loop)</strong> kautta.
        Tämä ei kuitenkaan tarkoita, että palvelin käsittelisi
        vain yhtä verkkopyyntöä kerrallaan.
      </p>

      <p>
        Verkkoliikenteen <strong>I/O-operaatiot ovat asynkronisia ja
        ei-estäviä</strong>. Kun palvelin odottaa esimerkiksi TCP-socketista
        saapuvaa dataa, tapahtumasilmukka voi jatkaa muiden
        yhteyksien käsittelyä.
      </p>

      <p>
        Käytännössä sama prosessi voi ylläpitää useita tuhansia
        aktiivisia verkkoyhteyksiä ilman, että jokaiselle
        yhteydelle tarvitaan omaa JavaScript-säiettä.
      </p>

      <h2>Node.js ja C/C++ verkkopalvelimissa</h2>

      <p>
        Perinteiset IRC-daemonit, kuten UnrealIRCd ja InspIRCd,
        on toteutettu C- tai C++-ohjelmointikielillä.
        Nämä kielet tarjoavat <strong>matalan tason kontrollin muistiin,
        prosessointiin, socket-yhteyksiin ja säikeisiin</strong>.
      </p>

      <p>
        C ja C++ soveltuvat erityisen hyvin järjestelmäohjelmointiin,
        jossa tarvitaan tarkkaa resurssien hallintaa ja
        mahdollisimman tehokasta suorituskykyä.
        Vastapainona kehittäjä vastaa suuremmasta osasta
        muistinhallintaa ja rinnakkaisen ohjelmoinnin
        turvallisuudesta.
      </p>

      <p>
        Node.js lähestyy samaa ongelmaa korkeamman tason
        tapahtumapohjaisella mallilla. Muistinhallinta perustuu
        automaattiseen roskienkeruuseen (Garbage Collection),
        ja verkkoyhteyksien tapahtumien koordinointi kuuluu
        Node.js:n runtime-ympäristölle.
      </p>

      <h2>Miksi Node.js valittiin IRIS:lle?</h2>

      <p>
        IRC-palvelimen toiminta perustuu suurelta osin jatkuvaan
        verkkoliikenteeseen. Palvelin vastaanottaa käyttäjien
        viestejä, ylläpitää TCP-yhteyksiä, käsittelee IRC-komentoja
        ja välittää tapahtumia muille verkon palvelimille.
      </p>

      <p>
        IRIS:n toiminnassa merkittävä osa työstä koostuu
        verkkoyhteyksien odottamisesta, tapahtumien käsittelystä
        ja verkon tilan ylläpitämisestä. Tämä vastaa hyvin
        Node.js:n suunnitteluperiaatteita ja asynkronista
        I/O-mallia.
      </p>

      <p>
        Teknologiavalinnassa painotettiin myös  ylläpidettävyyttä
         ja mahdollisuutta
        rakentaa oma palvelinten välinen protokolla ilman
        matalan tason verkkopinojen ja muistinhallinnan
        tarpeetonta kompleksisuutta.
      </p>

     <p>
  Node.js valittiin myös kehittäjän oman osaamisen ja kokemuksen
  perusteella. Se on kehittäjälle tuttu, helposti lähestyttävä
  ja luotettavaksi koettu kehitysympäristö. Vahva JavaScript- ja
  Node.js-osaaminen mahdollisti keskittymisen itse järjestelmän,
  verkkoprotokollan ja hajautetun arkkitehtuurin kehittämiseen
  sen sijaan, että aikaa olisi kulunut uuden ohjelmointikielen
  ja sen ekosysteemin opetteluun.
</p>

      <h2>Node.js:n edut IRIS:n kaltaisessa daemonissa</h2>

      <ul>
        <li>
          <strong>Samanaikaiset yhteydet:</strong> Tapahtumapohjainen
          I/O mahdollistaa suuren määrän aktiivisia TCP-yhteyksiä.
        </li>
        <li>
          <strong>Ei-estävä verkkoliikenne:</strong> Yhden yhteyden
          odottaminen ei estä muiden yhteyksien tapahtumien käsittelyä.
        </li>
        <li>
          <strong>Automaattinen muistinhallinta:</strong> Kehittäjän
          ei tarvitse vapauttaa muistia manuaalisesti kuten C:ssä.
        </li>
        <li>
          <strong>Kehityksen nopeus:</strong> JavaScript ja Node.js:n
          ekosysteemi tarjoavat valmiita työkaluja verkkopalvelinten
          rakentamiseen ja testaamiseen.
        </li>
        <li>
          <strong>Protokollakehitys:</strong> Binary-protokollien,
          viestien käsittelyn ja palvelinten välisen kommunikaation
          toteuttaminen onnistuu ilman manuaalista muistinhallintaa.
        </li>
      </ul>

      <h2>Rajoitukset ja haasteet</h2>

      <p>
        Node.js:n pääsäikeessä suoritettava JavaScript ei
        hyödynnä useita CPU-ytimiä automaattisesti.
        Pitkäkestoinen laskenta tai muu synkroninen,
        raskas operaatio voi estää tapahtumasilmukan
        suorittamisen ja hidastaa kaikkien yhteyksien
        käsittelyä kyseisessä prosessissa.
      </p>

      <p>
        Tämä on erityisen tärkeää pitkäikäisessä
        verkkopalvelimessa, jossa yksittäisen asiakkaan
        aiheuttama pitkä käsittely voi vaikuttaa koko
        palvelimen reagointikykyyn.
      </p>

      <p>
        Tarvittaessa CPU-intensiivisiä tehtäviä voidaan
        siirtää Worker Threads -säikeille tai erillisiin
        prosesseihin. Node.js tarjoaa myös mahdollisuuden
        käynnistää useita palvelinprosesseja eri CPU-ytimille.
      </p>

      <h2>Milloin Node.js ei ole paras vaihtoehto?</h2>

      <ul>
        <li>
          Kun sovellus tekee jatkuvasti raskasta numeerista
          laskentaa.
        </li>
        <li>
          Kun tarvitaan hyvin tarkkaa manuaalista muistinhallintaa.
        </li>
        <li>
          Kun suorituskyvyn jokainen CPU-sykli on kriittinen.
        </li>
        <li>
          Kun sovelluksen arkkitehtuuri perustuu voimakkaasti
          rinnakkaiseen CPU-laskentaan.
        </li>
      </ul>

      <p>
        Näissä käyttötapauksissa esimerkiksi C, C++, Rust tai Go
        voivat olla tarkoituksenmukaisempia vaihtoehtoja.
      </p>

      <h2>Node.js osana IRIS:n arkkitehtuuria</h2>

      <p>
        IRIS:n tavoitteena ei ole maksimoida yksittäisen
        palvelimen raakaa laskentatehoa, vaan toteuttaa
        ylläpidettävä ja laajennettava hajautettu IRC-verkko.
      </p>

      <p>
        Node.js tarjoaa tähän sopivan perustan. Sen päälle
        rakennettu IRIS sisältää oman palvelinten välisen
        IRIS-S2S-protokollan, palvelinidentiteetit,
        viestireitityksen ja hajautetun verkon tilanhallinnan.
      </p>

      <p>
        Erityisen kiinnostava kehityskohde on verkon
        palautuminen yhteyskatkojen jälkeen. Tässä keskeinen
        haaste ei ole yksittäisen palvelimen CPU-suorituskyky,
        vaan hajautetun tilan johdonmukaisuuden säilyttäminen
        ja palauttaminen.
      </p>

      <p>
        Node.js toimii tässä toteutusteknologiana, jonka
        avulla voidaan keskittyä verkkoprotokollan,
        tilanhallinnan ja hajautetun järjestelmän
        toimintaperiaatteiden kehittämiseen.
      </p>

      <h2>Yhteenveto</h2>

      <p>Molemmilla ohjelmointikielillä C ja JS on hyvät ja huonot puolensa.</p>
      <p>
        Node.js ei ole kaikissa tilanteissa C:tä tai C++:aa
        suorituskykyisempi vaihtoehto. Sen vahvuus on erilaisessa
        arkkitehtuurissa: tapahtumapohjaisessa ja asynkronisessa
        verkkoliikenteen käsittelyssä.
      </p>

      <p>
        IRIS:n käyttötarkoituksessa tämä on perusteltu valinta.
        Se mahdollistaa modernin IRC-daemonin kehittämisen
        korkeamman tason ohjelmointiympäristössä ilman,
        että palvelimen toiminnallisuus tai oma protokollakehitys
        edellyttää C/C++-tasoista muistinhallintaa.
      </p>

      
      <section className="documentation-section" id="sources">
        <span className="documentation-section-number">07</span>
        <h2>Lähteet </h2>

        <p>
        Lähdeluottelo:
        </p>

         <ul className="documentation-links">
          <li>
            <a href="https://nodejs.org/en/about"
              target="_blank" rel="noopener noreferrer">
              Node.js – About
            </a>
            <span>Node.js:n toimintaperiaatteet ja arkkitehtuuri.</span>
          </li>

          <li>
            <a href="https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick"
              target="_blank" rel="noopener noreferrer">
              Node.js – Event Loop
            </a>
            <span>Tapahtumasilmukan toiminta.</span>
          </li>

          <li>
            <a href="https://nodejs.org/api/worker_threads.html"
              target="_blank" rel="noopener noreferrer">
              Node.js – Worker Threads
            </a>
            <span>JavaScriptin suorittaminen erillisissä säikeissä.</span>
          </li>


<li>
  <a
    href="https://docs.libuv.org/en/stable/design.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    libuv – Design overview
  </a>
  <span>
    libuv:n arkkitehtuuri, tapahtumasilmukka,
    ei-estävä verkkoliikenne ja säikeiden käyttö.
  </span>
</li>


          <li>
            <a href="https://en.cppreference.com/w/c/language"
              target="_blank" rel="noopener noreferrer">
              C – Language Reference
            </a>
            <span>C-kielen rakenteet ja ominaisuudet.</span>
          </li>

          <li>
            <a href="https://en.cppreference.com/w/cpp"
              target="_blank" rel="noopener noreferrer">
              C++ – Language Reference
            </a>
            <span>C++-kielen rakenteet, muistinhallinta ja standardikirjasto.</span>
          </li>

          <li>
            <a href="https://github.com/unrealircd/unrealircd"
              target="_blank" rel="noopener noreferrer">
              UnrealIRCd – Source Code
            </a>
            <span>UnrealIRCd-projektin lähdekoodi (C).</span>
          </li>

          <li>
            <a href="https://github.com/inspircd/inspircd"
              target="_blank" rel="noopener noreferrer">
              InspIRCd – Source Code
            </a>
            <span>InspIRCd-projektin lähdekoodi (C++).</span>
          </li>

          <li>
            <a href="https://www.unrealircd.org/docs/Main_Page"
              target="_blank" rel="noopener noreferrer">
              UnrealIRCd – Documentation
            </a>
            <span>IRC-palvelimen rakenne, asetukset ja ylläpito.</span>
          </li>

          <li>
            <a href="https://docs.inspircd.org/"
              target="_blank" rel="noopener noreferrer">
              InspIRCd – Documentation
            </a>
            <span>IRC-palvelimen tekninen dokumentaatio.</span>
          </li>
          </ul>
      </section>



    </section>
  );
}

export default NodeJS;
