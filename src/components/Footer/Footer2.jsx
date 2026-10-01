
import React from 'react';
import './IrisVibeFooter.css';

const IrisVibeFooter = () => {
  return (
    <footer className="iris-vibe-footer">
      <div className="iris-vibe-footer__content">
        <div className="iris-vibe-footer__divider" />
        
        <div className="iris-vibe-footer__extra">
          <div className="iris-vibe-footer__title">
            <span className="iris-vibe-footer__heart">💗</span> Cute Girl Tuning™
          </div>
          
          <p className="iris-vibe-footer__text">
            IRIS IRC sisältää myös yhden ylimääräisen rasitteen. Se ei paranna mitattavasti protokollan suorituskykyä, latenssia tai muistinkäyttöä – eikä oikeastaan yhtään mitään muutakaan. 😊
          </p>
          
          <p className="iris-vibe-footer__vibe">
            Mutta se parantaa huomattavasti vibaa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default IrisVibeFooter;
