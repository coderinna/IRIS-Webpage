import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <strong>🌸 IRIS</strong>
          <span>Legendary IRC infrastructure.</span>
        </div>

        <span>
          Built with Node.js • React • Protocols
        </span>

<span>
  © {new Date().getFullYear()} IRIS. All rights reserved.
</span>
      </div>
    </footer>
  );
}

export default Footer;