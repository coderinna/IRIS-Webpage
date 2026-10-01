import React from 'react';
import './IrisLicense.css';

const IrisLicense = () => {
  return (
    <section
      id="licence"
    >
    <div className="iris-license">
      <div className="iris-license__header">
        <span className="iris-license__icon">📃</span>
        <h2 className="iris-license__title">LICENCE</h2>
        <span className="iris-license__badge">Suljettu lisenssi</span>
      </div>

      <div className="iris-license__body">
        <div className="iris-license__terms">
          <p>
          <h2>Omistusoikeudellinen LISENSSI</h2>
Koko IRIS IRC projecti, IRIS Internet Relay Chat Daemon (IRIS IRCd), IRIS S2S -protokolla sekä 
siihen liittyvä verkkorakenne jaetaan tiukan, suljetun lähdekoodin 
omistusoikeudellisen ohjelmistolisenssin alaisena.

          </p>
          
          <div className="iris-license__notice">
            <strong>RESTRICTION NOTICE:</strong> IRIS-lähdekoodi ja -tietovarastot (repositories) 
            ovat ehdottoman yksityisiä. Ohjelmiston luvaton peilaaminen (mirroring), alilisensointi,
             jakelu tai muokkaaminen on kiellettyä. Pääsy on rajoitettu ainoastaan
              valtuutetuille verkon osallistujille.

          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default IrisLicense;
