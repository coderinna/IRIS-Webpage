// IRCRegistration.jsx

function IRCRegistration() {
  return (
    <>
      <h2 id="irc-registration">Käyttäjän rekisteröinti</h2>

      <p>
        IRC-yhteyden muodostamisen jälkeen asiakasohjelma lähettää
        palvelimelle käyttäjän rekisteröintitiedot. Rekisteröinnissä
        määritetään nimimerkki ja käyttäjätiedot. Onnistuneen rekisteröinnin
        jälkeen palvelin hyväksyy käyttäjän IRC-verkkoon.
      </p>

      <p>
        Onnistuneen rekisteröitymisen jälkeen palvelin lähettää käyttäjälle
        tervetuloviestit, palvelimen tiedot sekä mahdollisen MOTD-tervetuloviestin.
        Tämän jälkeen käyttäjä voi liittyä kanaville.
      </p>
    </>
  );
}

export default IRCRegistration;