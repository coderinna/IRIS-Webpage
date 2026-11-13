// IRCChannelFunctions.jsx

function IRCChannelFunctions() {
  return (
    <>
      {/* KANAVATOIMINNOT */}
      <h2 id="irc-channel-functions">Kanavatoiminnot</h2>

      <p>
        Kanavilla käyttäjät voivat keskustella ja kanavan
        ylläpitäjät hallita kanavan tilaa ja käyttöoikeuksia.
      </p>

      <h3 id="irc-mode">Kanavan MODE-komennot</h3>

      <pre>{`/MODE #kanava
/MODE #kanava +m
/MODE #kanava -m
/MODE #kanava +n
/MODE #kanava -n
/MODE #kanava +o käyttäjä
/MODE #kanava -o käyttäjä
/MODE #kanava +v käyttäjä
/MODE #kanava -v käyttäjä`}</pre>

      {/*
      /MODE #kanava +t
      /MODE #kanava -t
      /MODE #kanava +i
      /MODE #kanava -i
      /MODE #kanava +k salasana
      /MODE #kanava -k salasana
      /MODE #kanava +l 50
      /MODE #kanava -l
      */}

      <pre>{`/TOPIC #kanava Uusi aihe
/MODE #kanava +m
/MODE #kanava +o käyttäjä
/MODE #kanava +v käyttäjä
/MODE #kanava +i
/MODE #kanava +k salasana`}</pre>


      <h3 id="irc-mode">Kanavan TOPIC</h3>
Tulee joskus...

      <h3 id="irc-mode">Kanavan asetukset</h3>
Tulee joskus...

    </>
  );
}

export default IRCChannelFunctions;