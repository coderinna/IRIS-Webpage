function IRCMessaging() {
  return (
    <>
      {/* VIESTINTÄ */}
      <h2 id="irc-messaging">Viestintä</h2>

      <p>
        IRC mahdollistaa reaaliaikaisen viestinnän käyttäjien välillä
        sekä yhteisillä kanavilla. IRIS välittää viestit IRC-protokollan
        mukaisilla komennoilla.
      </p>

      <h3 id="irc-private-messages">Yksityisviestit (PRIVMSG)</h3>

      <p>
        Käyttäjä voi lähettää yksityisviestin toiselle verkossa olevalle
        käyttäjälle PRIVMSG-komennolla. Viesti näkyy vain vastaanottajalle.
      </p>

      <pre>{`/MSG käyttäjä Hei!
/PRIVMSG käyttäjä Hei!`}</pre>

      <h3 id="irc-notice">Ilmoitusviestit (NOTICE)</h3>

      <p>
        NOTICE-komennolla lähetetään ilmoitusviestejä käyttäjille tai
        kanaville. Sitä käytetään usein palvelinten ja bottien
        ilmoituksiin. NOTICE-viesteihin ei tavallisesti vastata
        automaattisesti samalla tavalla kuin yksityisviesteihin.
      </p>

      <pre>{`/NOTICE käyttäjä Palvelimen ilmoitus
/NOTICE #kanava Tiedote kanavalle`}</pre>

      <h3 id="irc-channel-messages">Kanavaviestit</h3>

      <p>
        Kanavalle lähetetty viesti välitetään kanavan jäsenille.
        Kanavaviestintään käytetään PRIVMSG-komentoa, jossa
        vastaanottajaksi määritetään kanavan nimi.
      </p>

      <pre>{`/PRIVMSG #kanava Hei kaikki!
/MSG #kanava Tervehdys!`}</pre>
    </>
  );
}

export default IRCMessaging;