import React from "react";
import "./CSS/Protocol.css";

import ProtocolDiagram from "./ProtocolDiagram.jsx";
import ProtocolSpecs from "./ProtocolSpecs.jsx";
import ProtocolMessages from "./ProtocolMessages.jsx";
import ProtocolPurpose from "./ProtocolPurpose.jsx";
import ProtocolHero from "./ProtocolHero.jsx";
   import ProtocolIntro from "./ProtocolIntro.jsx";
function Protocol() {
  return (
    <main id="protocol" className="protocol-page">

<ProtocolHero />

      <section className="protocol-container">
<ProtocolIntro />
<ProtocolSpecs  />

<ProtocolMessages />

<ProtocolDiagram />

<ProtocolPurpose />
      </section>
    </main>
  );
}

export default Protocol;
