import logo from '../../assets/logo.png';
import './Navbar.css';

const navigation = [
  {
    label: 'Architecture',
    href: '#architecture'
  },
  {
    label: 'Project images',
    href: '#project-images'
  },
  {
    label: 'Protocol',
    href: '#protocol'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NinaPaivinen/IRIS-Webpage'
  }
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="/">
          <img src={logo} alt="IRIS logo" />
          <span>IRIS</span>
        </a>

        <nav className="navbar__links">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;