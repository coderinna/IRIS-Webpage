
import React from 'react';
import './IrisVibeFooter.css';

const IrisVibeFooter = () => {
  return (
    <footer className="iris-vibe-footer">
      <div className="iris-vibe-footer__content">
        <div className="iris-vibe-footer__divider" />
        
        <div className="iris-vibe-footer__extra">
          <div className="iris-vibe-footer__title">
IRIS IRCd    <p className="iris-vibe-footer__text">
Internet Reley Chat Daemond
    </p>
          </div>
          
      
          
  <p className="iris-vibe-footer__vibe">
  © {new Date().getFullYear()} IRIS IRCd. Kaikki oikeudet pidätetään.
</p>
        </div>
      </div>
    </footer>
  );
};

export default IrisVibeFooter;
