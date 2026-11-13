// IRCChannelJoin.jsx

function IRCChannelJoin() {
  return (
    <>
      {/* KANAVALLE LIITTYMINEN */}
      <h2 id="irc-channel-join">Kanavalle liittyminen</h2>

      <p>
        IRC-kanaville liitytään JOIN-komennolla. Kanavilla käytetään
        #-alkuista nimeä.
      </p>

      <pre>{`/JOIN #kanava
/PART #kanava :Poistumisviesti
/NAMES #kanava`}</pre>

      {/*
      /WHO #kanava
      /WHOIS käyttäjä
      /WHOWAS käyttäjä
      /ISON käyttäjä
      /USERHOST käyttäjä
      /ME tekee jotain
      /AWAY :Poissaoloviesti
      /INVITE käyttäjä #kanava
      /LUSERS
      /VERSION
      /TIME
      /INFO
      */}
    </>
  );
}

export default IRCChannelJoin;