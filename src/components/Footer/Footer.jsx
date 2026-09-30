// src/components/Footer/Footer.jsx

import './Footer.css';
import coderinnaImage from './Images/girl.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <strong>🌸 IRIS IRCd</strong>
          <span>Internet Relay Chat Daemon</span>
        </div>

        <div className="footer__creator">
          <span className="footer__powered">Powered by girls.</span>

          <img
            src={coderinnaImage}
            alt="Coderinna"
            className="footer__profile"
          />
        </div>

        <div className="footer__copyright">
          <span>
            © {new Date().getFullYear()} IRIS. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;