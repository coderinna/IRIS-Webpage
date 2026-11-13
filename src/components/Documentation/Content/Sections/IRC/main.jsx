import IRCMonitoring from './Texts/IRC-monitoring.jsx';
import IRCConnection from './Texts/IRCConnection.jsx';
import IRCRegistration from './Texts/IRCRegistration.jsx';
import IRCCommands from './Texts/IRCCommands.jsx';
import IRCChannelFunctions from './Texts/IRCChannelFunctions.jsx';
import IRCChannelJoin from './Texts/IRCChannelJoin.jsx'; 
import IRCMessaging from './Texts/IRCMessaging.jsx';
import IRCUserState from './Texts/IRCUserState.jsx';
import IRCRoles from './Texts/IRCRoles.jsx';import IRC_NAVBAR from './Texts/IRC-Navbar.jsx';

function IRC() {
  return (
    <section
      id="irc"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        02
      </span>

      <h1>IRC:n toiminta</h1>

      <p>
        IRIS noudattaa käyttäjille tuttua perinteistä IRC-toimintamallia ulospäin.
        Se mahdollistaa reaaliaikaisen viestinnän ja kanavien hallinnan
        yleisillä IRC-asiakasohjelmilla.
      </p>

<IRC_NAVBAR />


      <IRCConnection />
<IRCRegistration />

<IRCCommands />

  <IRCChannelJoin />
<IRCChannelFunctions />

<IRCRoles />
<IRCMessaging />
<IRCUserState />


      <IRCMonitoring>

      </IRCMonitoring>

    </section>
  );
}

export default IRC;