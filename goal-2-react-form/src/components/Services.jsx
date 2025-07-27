import Form from './Form';
import { useState } from 'react';

export default function Services() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="services">
      <div className="bgr">
        <div className="container">
          {!showForm && (
            <div id="services">
              <h2>How It Works</h2>
              <div className="icon-heading-text">
                <ul>
                  <li>
                    <div className="icon buy"></div>
                    <h3>Buy</h3>
                    <p>
                      Purchase a qualifying Logitech product(s) to the value of £150 or
                      more from an official <strong>Logitech website</strong>
                    </p>
                  </li>
                  <li>
                    <div className="icon document"></div>
                    <h3>Claim</h3>
                    <p>Submit your cashback claim between 20.02.2025 - 31.03.2025</p>
                  </li>
                  <li>
                    <div className="icon money"></div>
                    <h3>Payday!</h3>
                    <p>Receive your cashback within 28 days of claim validation</p>
                  </li>
                </ul>
              </div>
              <button onClick={() => setShowForm(true)} className="btn registerButton">
                Register now
              </button>
            </div>
          )}

          {showForm && <Form />}
        </div>

        <div className="gradient-back">
          <div className="glow-top-shadow-3"></div>
          <div className="glow-top-shadow-2"></div>
          <div className="glow-top-shadow"></div>
        </div>

        <div className="bottom-border">.</div>
      </div>
    </section>
  );
}
