import social1 from '../assets/images/social-link-1.svg';
import social2 from '../assets/images/social-link-2.svg';
import social3 from '../assets/images/social-link-3.svg';
import social4 from '../assets/images/social-link-4.svg';
import social5 from '../assets/images/social-link-5.svg';


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-info">
            <ul className="footer-nav">
              <li><a href="#">Privacy&nbsp;Policy</a></li>
              <li><a href="#">Terms&nbsp;of&nbsp;Use</a></li>
              <li><a href="#">Cookie&nbsp;Settings</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <div className="social-links">
              <a href="#" className="social-facebook" aria-label="Facebook"></a>
              <a href="#" className="social-twitter" aria-label="Twitter"></a>
              <a href="#" className="social-instagram" aria-label="Instagram"></a>
              <a href="#" className="social-youtube" aria-label="YouTube"></a>
              <a href="#" className="social-discord" aria-label="Discord"></a>
            </div>
          </div>
        </div>
        <span className="copyright">
          © 2025 Logitech. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
