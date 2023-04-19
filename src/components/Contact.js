import "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dropdown: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [pageError, setPageError] = useState("");
  const phoneNumber = "+61 430 780 811";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (formData.name === "") {
      errors.name = "Please enter your name";
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.dropdown === "") {
      errors.dropdown = "Please select an option";
    }

    if (formData.message === "") {
      errors.message = "Please enter a message";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const errorFields = Object.keys(errors).join(", ");
      setPageError(`Please correct the following fields: ${errorFields}`);
      return;
    }

    // Submit form data here
    setFormErrors({});
    setPageError("");
    console.log("Submitting form data:", formData);
  }

  return (
    <div className="form-page">
      <div className="form-background-image">
        <div className="form-page-header">
          <h1>Have a chat with me!</h1>
        </div>
      </div>
      <div className="form-page-contact">
        <div className="form-page-contact-section phone-section col-lg-5">
          <div className="form-page-contact-header">
            <h1>Test Header</h1>
          </div>
          <div className="info-section-left">
            Phone <span className="phone-number">{phoneNumber}</span>
          </div>
        </div>
        <div className="form-page-contact-section email-section col-lg-7">
          <div className="form-page-contact-header">
            <h1>Test Header</h1>
          </div>
          <div className="info-section-right">
            <form noValidate onSubmit={handleSubmit}>
              <div className="col-lg-12 flex-row">
                <div className="flex-column form-dropdown">
                  {formErrors.dropdown && (
                    <span className="form-error-text">
                      {formErrors.dropdown}
                    </span>
                  )}
                  <label htmlFor="dropdown">Category</label>
                  <select
                    required
                    id="dropdown"
                    name="dropdown"
                    value={formData.dropdown}
                    onChange={handleChange}
                    className={`input-section ${
                      formErrors.dropdown ? "form-error-input" : ""
                    }`}
                  >
                    <option disabled required value="">
                      Select Category
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 flex-gap flex-row">
                <div className="form-email flex-column">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-section ${
                      formErrors.email ? "form-error-input" : ""
                    }`}
                  />
                  {formErrors.email && (
                    <span className="form-error-text">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-email flex-column">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-section ${
                      formErrors.name ? "form-error-input" : ""
                    }`}
                  />
                  {formErrors.name && (
                    <span className="form-error-text">{formErrors.name}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-12 flex-row ">
                <div className="flex-column col-lg-12">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    onChange={handleChange}
                    className={`input-section ${
                      formErrors.message ? "form-error-input" : ""
                    }`}
                  />
                  {formErrors.message && (
                    <span className="form-error-text">
                      {formErrors.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-12 flex-column">
                <p>
                  {pageError && (
                    <span className="form-error-text">{pageError}</span>
                  )}
                </p>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
