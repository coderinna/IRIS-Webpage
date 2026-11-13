// IRCCommands.jsx

function IRCCommands() {
  return (
    <>
      <h2 id="irc-commands">Peruskomennot</h2>

      <p>
        IRC-yhteyden aikana käyttäjä voi hyödyntää IRC-protokollan mukaisia komentoja.
      </p>

      <h3>IRC-komennot</h3>

      <pre>{`/NICK uusi_nimi
/USER käyttäjä 0 * :Real Name
/QUIT :Poistumisviesti
/TOPIC #kanava
/TOPIC #kanava Uusi aihe
/NAMES #kanava
/LIST
/PING palvelin
/PONG palvelin
/MSG käyttäjä viesti
/NOTICE käyttäjä viesti
/PRIVMSG #kanava viesti
/KICK #kanava käyttäjä :Syy
/MOTD`}</pre>
    </>
  );
}

export default IRCCommands;