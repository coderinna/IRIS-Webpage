import "./CSS/ProtocolIntro.css";

function ProtocolIntro() {
  return (
    <div className="protocol-intro">
      <div>
        <span className="section-kicker">PROTOCOL</span>
        <h2>Palvelinten välinen viestintä</h2>
      </div>

      <p>
        IRIS-S2S on palvelinten välinen protokolla. Se ei ole IRC-clientin
        protokolla, vaan sitä käytetään IRIS-palvelinten väliseen
        tiedonsiirtoon ja verkon synkronointiin.
      </p>
    </div>
  );
}

export default ProtocolIntro;