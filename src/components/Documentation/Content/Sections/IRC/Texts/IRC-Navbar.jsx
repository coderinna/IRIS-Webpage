function IRCNavbar() {
  const base = '#documentation?path=irc&section=';

  return (
    <nav className="documentation-toc" aria-label="Sisällysluettelo">
      <div>Sisällysluettelo</div>

      <ul>
        <li>
          <a href={`${base}irc-connection`}>Yhteyden muodostaminen</a>
        </li>

        <li>
          <a href={`${base}irc-registration`}>Käyttäjän rekisteröinti</a>
        </li>

        <li>
          <a href={`${base}irc-commands`}>Peruskomennot</a>
        </li>

        <li>
          <a href={`${base}irc-channel-join`}>Kanavalle liittyminen</a>
        </li>

        <li>
          <a href={`${base}irc-channel-functions`}>Kanavatoiminnot</a>
          <ul>
            <li>
              <a href={`${base}irc-mode`}>Kanavan MODE-komennot</a>
            </li>
          </ul>
        </li>

        <li>
          <a href={`${base}irc-roles`}>Kanavan käyttäjäroolit ja oikeudet</a>
          <ul>
            <li>
              <a href={`${base}irc-operator`}>Kanavaoperaattori (+o)</a>
            </li>
            <li>
              <a href={`${base}irc-voice`}>Voice-oikeus (+v)</a>
            </li>
            <li>
              <a href={`${base}irc-founder`}>
                Kanavan perustaja ja ensimmäinen operaattori
              </a>
            </li>
            <li>
              <a href={`${base}irc-permissions`}>
                Käyttöoikeuksien tarkistaminen
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href={`${base}irc-messaging`}>Viestintä</a>
          <ul>
            <li>
              <a href={`${base}irc-private-messages`}>
                Yksityisviestit (PRIVMSG)
              </a>
            </li>
            <li>
              <a href={`${base}irc-notice`}>
                Ilmoitusviestit (NOTICE)
              </a>
            </li>
            <li>
              <a href={`${base}irc-channel-messages`}>
                Kanavaviestit
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href={`${base}irc-user-state`}>
            Käyttäjien poistuminen ja tilamuutokset
          </a>
          <ul>
            <li>
              <a href={`${base}irc-part`}>PART – Kanavalta poistuminen</a>
            </li>
            <li>
              <a href={`${base}irc-quit`}>QUIT – Verkosta poistuminen</a>
            </li>
            <li>
              <a href={`${base}irc-nick`}>NICK – Nimimerkin vaihtaminen</a>
            </li>
          </ul>
        </li>


        <li>
          <a href={`${base}irc-monitoring`}>
            Yhteyksien valvonta ja häiriötilanteet
          </a>
          <ul>
            <li>
              <a href={`${base}irc-ping`}>PING / PONG ja yhteyden valvonta</a>
            </li>
            <li>
              <a href={`${base}irc-timeout`}>Ping timeout</a>
            </li>
            <li>
              <a href={`${base}irc-netsplit`}>Netsplit</a>
            </li>
            <li>
              <a href={`${base}irc-recovery`}>
                Yhteyden katkeaminen ja palautuminen
              </a>
            </li>
            <li>
              <a href={`${base}irc-kick`}>Kick</a>
            </li>
            <li>
              <a href={`${base}irc-rejoin`}>Rejoin</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default IRCNavbar;