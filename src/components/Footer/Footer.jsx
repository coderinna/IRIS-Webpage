import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <strong>🌸 IRIS IRCd</strong>
          <span>Internet Reley Chat Daemon</span>
        </div>

        <span>
          Powered by girls.
        </span>

<span>
  © {new Date().getFullYear()} IRIS. All rights reserved.
</span>
      </div>
    </footer>
  );
}

export default Footer;