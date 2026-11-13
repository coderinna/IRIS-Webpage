// IRCRoles.jsx

function IRCRoles() {
  return (
    <>
      {/* KÄYTTÄJÄROOLIT JA OIKEUDET */}
      <h2 id="irc-roles">Kanavan käyttäjäroolit ja oikeudet</h2>

      <p>
        IRC-kanavilla käyttäjillä voi olla erilaisia rooleja, jotka
        määrittävät heidän oikeutensa kanavan toimintoihin. IRIS käyttää
        operaattori- ja voice-oikeuksia kanavien hallintaan ja
        viestintäoikeuksien määrittämiseen.
      </p>

      <h3 id="irc-operator">Kanavaoperaattori (+o)</h3>

      <p>
        Kanavaoperaattorilla on oikeudet hallita kanavaa ja sen käyttäjiä.
        Operaattori voi esimerkiksi muuttaa kanavan asetuksia, vaihtaa
        kanavan aihetta ja poistaa käyttäjiä kanavalta.
      </p>

      <pre>{`/MODE #kanava +o käyttäjä
/MODE #kanava -o käyttäjä`}</pre>

      <h3 id="irc-voice">Voice-oikeus (+v)</h3>

      <p>
        Voice-oikeus antaa käyttäjälle puheoikeuden kanavalla, jolla
        on käytössä moderointitila (+m). Sen avulla voidaan sallia
        viestintä myös käyttäjille, joilla ei ole operaattorioikeuksia.
      </p>

      <pre>{`/MODE #kanava +v käyttäjä
/MODE #kanava -v käyttäjä`}</pre>

      <h3 id="irc-founder">Kanavan perustaja ja ensimmäinen operaattori</h3>

      <p>
        Kanavan ensimmäinen liittynyt käyttäjä saa kanavan operaattorioikeudet.
        Näin kanavalle muodostuu ensimmäinen käyttäjä, jolla on oikeudet
        hallita kanavan asetuksia ja muita käyttäjiä.
      </p>

      <h3 id="irc-permissions">Käyttöoikeuksien tarkistaminen</h3>

      <p>
        Palvelin tarkistaa käyttäjän oikeudet ennen hallintatoimintojen
        suorittamista. Operaattorioikeuksia edellyttävät toiminnot,
        kuten MODE-asetusten muuttaminen, TOPIC-aiheen hallinta ja
        käyttäjien poistaminen, sallitaan vain riittävät oikeudet
        omaaville käyttäjille.
      </p>
    </>
  );
}

export default IRCRoles;