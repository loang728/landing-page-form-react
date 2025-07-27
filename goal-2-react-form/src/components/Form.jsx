import React, { useRef, useState } from 'react';
import '../style/form.scss';

export default function Form() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const input = e.target;
    const name = input.name || input.id;
    let errorMessage = '';

    if (!input.checkValidity()) {
      if (input.validity.valueMissing) {
        errorMessage = 'This field is required.';
      } else if (input.type === 'email' && input.validity.typeMismatch) {
        errorMessage = 'Please enter a valid email address.';
      } else if (input.type === 'tel' && input.validity.patternMismatch) {
        errorMessage = 'Please enter a valid phone number.';
      } else if (input.type === 'date' && input.validity.rangeUnderflow) {
        errorMessage = 'Please select a valid date.';
      } else {
        errorMessage = 'Invalid input.';
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');

    const newErrors = {};
    requiredFields.forEach((input) => {
      const name = input.name || input.id;
      if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
          newErrors[name] = 'This field is required.';
        } else if (input.type === 'email' && input.validity.typeMismatch) {
          newErrors[name] = 'Please enter a valid email address.';
        } else if (input.type === 'tel' && input.validity.patternMismatch) {
          newErrors[name] = 'Please enter a valid phone number.';
        } else if (input.type === 'date' && input.validity.rangeUnderflow) {
          newErrors[name] = 'Please select a valid date.';
        } else {
          newErrors[name] = 'Invalid input.';
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted');
      // your submission logic here
    }
  };

  return (
    <form className="cashback-form" id="cashback-form" ref={formRef} onSubmit={handleSubmit}>
      <button id="closeFormBtn" className="close-btn" aria-label="Close Form" type="button" >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="form-columns">
        <div className="form-column">
          <h2>Personal Details</h2>

          <label>
            Title
            <select name="title" required onBlur={handleBlur}>
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
          </label>
          {errors.title && <span className="error-msg">{errors.title}</span>}

          <label>
            First Name
            <input name="firstName" type="text" required onBlur={handleBlur} />
          </label>
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}

          <label>
            Last Name
            <input name="lastName" type="text" required onBlur={handleBlur} />
          </label>
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}

          <label>
            Address <b>*</b>
            <input name="address" type="text" required onBlur={handleBlur} />
          </label>
          {errors.address && <span className="error-msg">{errors.address}</span>}

          <label>
            Postcode <b>*</b>
            <input name="postcode" type="text" required onBlur={handleBlur} />
          </label>
          {errors.postcode && <span className="error-msg">{errors.postcode}</span>}

          <label>
            Mobile Phone <b>*</b>
            <input name="phone" type="tel" pattern="^[0-9+\-()\s]+$" required onBlur={handleBlur} />
          </label>
          {errors.phone && <span className="error-msg">{errors.phone}</span>}

          <label>
            Email Address <b>*</b>
            <input name="email" type="email" required onBlur={handleBlur} />
          </label>
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <h2>Bank Details</h2>

          <label>
            Account Type <b>*</b>
            <select name="accountType" required onBlur={handleBlur}>
              <option value="">Select</option>
              <option>Savings</option>
              <option>Current</option>
            </select>
          </label>
          {errors.accountType && <span className="error-msg">{errors.accountType}</span>}

          <label>
            IBAN <b>*</b>
            <input name="iban" type="text" required onBlur={handleBlur} />
          </label>
          {errors.iban && <span className="error-msg">{errors.iban}</span>}

          <label>
            SWIFT <b>*</b>
            <input name="swift" type="text" required onBlur={handleBlur} />
          </label>
          {errors.swift && <span className="error-msg">{errors.swift}</span>}

          <label>
            Beneficiary <b>*</b>
            <input name="beneficiary" type="text" required onBlur={handleBlur} />
          </label>
          {errors.beneficiary && <span className="error-msg">{errors.beneficiary}</span>}

          <label className="auto-height">
            Enter the full name of the beneficiary of the account as per passport/identity card (without initials and title)
          </label>
        </div>

        <div className="form-column">
          <h2>Product Details</h2>

          <label>
            Product Serie
            <select name="productSerie" required onBlur={handleBlur}>
              <option value="">Select</option>
            </select>
          </label>
          {errors.productSerie && <span className="error-msg">{errors.productSerie}</span>}

          <label>
            Product <b>*</b>
            <select name="product" required onBlur={handleBlur}>
              <option value="">Select</option>
              <option>Product 1</option>
              <option>Product 2</option>
              <option>Product 3</option>
            </select>
          </label>
          {errors.product && <span className="error-msg">{errors.product}</span>}

          <label>
            Serial Number
            <input name="serialNumber" type="text" onBlur={handleBlur} />
          </label>

          <label>
            Date of Purchase <b>*</b>
            <input name="purchaseDate" type="date" required onBlur={handleBlur} />
          </label>
          {errors.purchaseDate && <span className="error-msg">{errors.purchaseDate}</span>}

          <label className="auto-height">
            Proof of purchase <b>*</b>
          </label>

          <div className="customised-upload">
            <label className="custom-file-upload">
              Browse
              <input name="proof" type="file" required onBlur={handleBlur} />
            </label>
            {errors.proof && <span className="error-msg">{errors.proof}</span>}
            <span>No&nbsp;file&nbsp;chosen&nbsp;<b>*</b></span>
          </div>

          <label>
            How did you find out about this promotion?
            <input name="promoSource" type="text" onBlur={handleBlur} />
          </label>

          <label className="auto-height">
            What was the main reason for you to purchase a Logitech
            <br />
            product?
            <input name="purchaseReason" type="text" onBlur={handleBlur} />
          </label>

          <label className="auto-height">
            <textarea
              name="termsText"
              rows="10"
              placeholder={`11:22:33 / 01-12-2024

Terms and Conditions

Lorem ipsum dolor sit amet...`}
              onBlur={handleBlur}
            />
          </label>

          <label className="custom-checkbox">
            <input type="checkbox" id="agree1" required onBlur={handleBlur} />
            <span className="checkmark"></span>
            <span>
              <b>*</b> I declare that I have read and accept the{' '}
              <a href="#">Terms and Conditions</a> of this promotion.
            </span>
          </label>
          {errors.agree1 && <span className="error-msg">{errors.agree1}</span>}

          <label className="custom-checkbox">
            <input type="checkbox" id="agree2" required onBlur={handleBlur} />
            <span className="checkmark"></span>
            <span>
              Would you like to receive information about future promotions and news?
              <br />
              <br />
              If you would like to unsubscribe from receiving marketing material from us, please contact us at:{' '}
              <a href="mailto:logitech-unsubscribe@promotion-support.com">
                logitech-unsubscribe@promotion-support.com
              </a>
            </span>
          </label>
          {errors.agree2 && <span className="error-msg">{errors.agree2}</span>}
        </div>
      </div>

      <div className="submit-row">
        <button className="btn smallerbtn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
