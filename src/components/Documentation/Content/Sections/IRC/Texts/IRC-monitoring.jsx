function IRCMonitoring() {
  return (
    <>
      <h2 id="irc-monitoring">Yhteyksien valvonta ja häiriötilanteet</h2>

      <h3 id="irc-ping">PING / PONG ja yhteyden valvonta</h3>

      <p>
        IRC-palvelin käyttää PING- ja PONG-viestejä yhteyden toimivuuden
        tarkistamiseen. Palvelin lähettää PING-viestin, johon asiakasohjelman
        tulee vastata PONG-viestillä. Näin havaitaan vastaamattomat
        tai toimimattomat yhteydet.
      </p>

      <h3 id="irc-timeout">Ping timeout</h3>

      <p>
        Jos asiakasohjelma ei vastaa palvelimen lähettämään PING-viestiin
        määrätyn ajan kuluessa, palvelin sulkee yhteyden. Muut saman
        kanavan jäsenet näkevät käyttäjän poistuvan verkosta QUIT-ilmoituksella.
      </p>

      <pre>{`*** käyttäjä has quit (Ping timeout: 120 seconds)`}</pre>

      <h3 id="irc-netsplit">Netsplit</h3>

      <p>
        Netsplit tarkoittaa tilannetta, jossa kahden IRC-palvelimen välinen
        yhteys katkeaa ja verkko jakautuu erillisiin osiin. Tällöin käyttäjät,
        jotka ovat yhteyden eri puolilla, poistuvat toistensa näkymästä.
        Kanavalla tämä näkyy käyttäjien poistumisilmoituksina, joissa
        ilmoitetaan yhteyden katkeamiseen liittyvät palvelimet.
      </p>

      <pre>{`*** käyttäjä has quit (server1.example.net server2.example.net)`}</pre>

      <h3 id="irc-recovery">Yhteyden katkeaminen ja palautuminen</h3>

      <p>
        Palvelinten välisen yhteyden katketessa IRIS-verkon palvelimet
        menettävät keskinäisen yhteyden. Tämä voi aiheuttaa verkon
        jakautumisen eli netsplit-tilanteen. Katkos näkyy käyttäjille
        palvelimelta poistuvien käyttäjien QUIT-ilmoituksina.
      </p>

      <pre>{`*** käyttäjä has quit (Server connection lost)`}</pre>

      <p>
        Yhteyden palauduttua IRIS pyrkii muodostamaan S2S-yhteyden uudelleen
        ja synkronoimaan verkon tilan. Synkronoinnissa huomioidaan esimerkiksi
        käyttäjät, kanavat ja niiden tilaan liittyvät muutokset, jotta verkon
        eri palvelimet voivat palautua yhtenäiseksi kokonaisuudeksi.
      </p>

      <h3 id="irc-kick">Kick</h3>

      <p>
        Kanavan operaattori voi poistaa käyttäjän kanavalta KICK-komennolla.
        Poistettu käyttäjä saa ilmoituksen poistamisesta, ja muille kanavan
        jäsenille näytetään tieto siitä, kuka käyttäjän poisti ja millä perusteella.
      </p>

      <pre>{`*** käyttäjä was kicked from #kanava by operaattori (Syy)`}</pre>

      <h3 id="irc-rejoin">Rejoin</h3>

      <p>
        Yhteyden katkeamisen tai kanavalta poistumisen jälkeen käyttäjä
        voi liittyä kanavalle uudelleen JOIN-komennolla. Yhteyden palautumisen
        jälkeen IRIS voi palauttaa käyttäjän kanavalle osana
        yhteyden palautumisen ja synkronoinnin toimintaa.
      </p>

      <pre>{`*** käyttäjä has joined #kanava`}</pre>
    </>
  );
}

export default IRCMonitoring;
