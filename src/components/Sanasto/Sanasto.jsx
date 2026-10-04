import React from 'react';
import './IrisGlossary.css';

const glossaryData = [
  { term: "IRIS", definition: "Projekti ja sen ympärille rakennettava IRC-ekosysteemi." },
  { term: "IRIS IRCd", definition: "IRISin varsinainen IRC-palvelinohjelmisto eli IRC-daemon." },
  { term: "IRCd", definition: "Internet Relay Chat daemon. IRC-palvelinohjelmisto, joka vastaanottaa client-yhteyksiä ja käsittelee IRC-liikennettä." },
  { term: "Classic IRC", definition: "Perinteinen IRC-protokolla, jota IRIS tarjoaa yhteensopivana client-rajapintana." },
  { term: "IRIS Protocol", definition: "IRIS-projektia varten suunniteltu palvelinten välinen protokolla." },
  { term: "S2S", definition: "Server-to-Server. Palvelinten välinen kommunikaatio." },
  { term: "IRIS S2S", definition: "IRIS-palvelinten välinen verkkomalli ja siihen liittyvä kommunikaatiokerros." },
  { term: "IRIS Network", definition: "Useista IRIS-palvelimista muodostuva IRC-verkko." },
  { term: "IRC Client", definition: "IRC-asiakasohjelma, kuten irssi, WeeChat tai HexChat." },
  { term: "IRC Server", definition: "IRIS IRCd -palvelin, joka osallistuu IRC-verkon toimintaan." },
  { term: "Server Link", definition: "Kahden IRIS-palvelimen välinen yhteys IRIS Protocolin kautta." },
  { term: "Network State", definition: "Verkossa ylläpidettävä tieto käyttäjistä, kanavista, palvelimista ja niiden tilasta." },
  { term: "Event Bus", definition: "IRISin sisäinen tapahtumaväylä, jonka kautta järjestelmän komponentit kommunikoivat tapahtumien avulla." },
  { term: "Core", definition: "IRISin ydinlogiikka ja palvelimen tilasta vastaava kerros." },
  { term: "Services", definition: "IRC-palvelut, kuten NickServ, ChanServ ja operointiin liittyvät palvelut." },
  { term: "Transport", definition: "Verkkoyhteyden kuljetuskerros, esimerkiksi TCP tai TLS." }
];

const IrisGlossary = () => {
  return (<section id="sanasto">
    <div className="iris-glossary">
      <div className="iris-glossary__header">
        <h2 className="iris-glossary__title">Sanasto </h2>
      </div>

      <div className="iris-glossary__list">
        {glossaryData.map((item, index) => (
          <div key={index} className="iris-glossary__item">
            <dt className="iris-glossary__term">{item.term}</dt>
            <dd className="iris-glossary__definition">{item.definition}</dd>
          </div>
        ))}
      </div>
    </div></section>
  );
};

export default IrisGlossary;
