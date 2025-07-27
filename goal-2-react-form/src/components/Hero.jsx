
import product1 from '../assets/images/product-everboom.png';
import product2 from '../assets/images/product-a20.png';
import product3 from '../assets/images/product-blue-yeti-mic.png';
import product4 from '../assets/images/product-g502-x-plus.png';

export default function Hero({ onRegisterClick, showForm }) {
  return (
    <section id="hero" className="hero">
  <div className="container">
    <div className="hero-text-wrapper">
      <h1>
        <span className="text-box main-text fade-down animated">
          Get £30<br />
          Cashback
        </span>
        <br />
        <span className="sub-title small animated">Across Logitech Brands</span>
        <br />
        <span className="sub-title smaller animated">
          Spend £150 or more on Logitech brands and
          <br />
          <strong>claim £30 cashback</strong>
        </span>
      </h1>
   <button onClick={onRegisterClick} className="btn animated-flyfromleft registerButton">
        Register now
      </button>
    </div>

    <div className="claim-section-wrapper">
      <ul className="images-list">
        <li>
          <img src={product1} alt="Everboom Speaker" loading="lazy" />
        </li>
        <li>
          <img src={product2} alt="A20 Headset" loading="lazy"/>
        </li>
        <li>
          <img src={product3} alt="Blue Yeti Mic" loading="lazy"/>
        </li>
        <li>
          <img src={product4} alt="G502 X Plus Mouse" loading="lazy"/>
        </li>
      </ul>
      <span className="note">
        Claim before
        <span>
          31 <i>.</i> 03 <i>.</i> 2025
        </span>
      </span>
    </div>
  </div>
</section>

  );
}
