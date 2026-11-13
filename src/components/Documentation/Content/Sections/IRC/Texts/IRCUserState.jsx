function IRCUserState() {
  return (
    <>
      <h2 id="irc-user-state">Käyttäjien poistuminen ja tilamuutokset</h2>

      <p>
        IRC-palvelin ylläpitää käyttäjien yhteys- ja nimimerkkitietoja.
        Käyttäjän poistuessa verkosta tai vaihtaessa nimimerkkiä
        palvelin välittää tapahtumasta tiedon muille käyttäjille
        ja tarvittaessa verkon muille palvelimille.
      </p>

      <h3 id="irc-part">PART – Kanavalta poistuminen</h3>

      <p>
        PART-komennolla käyttäjä poistuu yksittäiseltä IRC-kanavalta.
        Kanavan muille jäsenille ilmoitetaan käyttäjän poistumisesta.
        Käyttäjä voi edelleen olla yhteydessä IRC-verkkoon ja osallistua
        muiden kanavien keskusteluun.
      </p>

      <pre>{`/PART #kanava
/PART #kanava :Poistumisviesti`}</pre>

      <h3 id="irc-quit">QUIT – Verkosta poistuminen</h3>

      <p>
        QUIT-komennolla käyttäjä katkaisee IRC-yhteytensä ja poistuu
        verkosta. Palvelin poistaa käyttäjän aktiivisesta tilasta
        ja välittää poistumisilmoituksen niille käyttäjille ja
        palvelimille, joille tieto kuuluu.
      </p>

      <pre>{`/QUIT
/QUIT :Näkemiin!`}</pre>

      <h3 id="irc-nick">NICK – Nimimerkin vaihtaminen</h3>

      <p>
        NICK-komennolla käyttäjä vaihtaa IRC-verkossa käyttämäänsä
        nimimerkkiä. Palvelin päivittää käyttäjän nimimerkkitiedon
        ja välittää muutoksen käyttäjille, joiden tulee saada tieto
        nimimerkin vaihtumisesta.
      </p>

      <pre>{`/NICK uusi_nimimerkki`}</pre>
    </>
  );
}

export default IRCUserState;