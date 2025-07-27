
import logo from '../assets/images/logitech-g-logo.svg';

export default function Header() {
  return (
<header>
  <nav>
    <div className="container">
      <div className="menu-open">
        <div className="burger-line"></div>
      </div>
      <a href="/" className="logo">
        <img src={logo} alt="Logitech Logo" />
      </a>
    </div>
  </nav>
</header>

  );
}