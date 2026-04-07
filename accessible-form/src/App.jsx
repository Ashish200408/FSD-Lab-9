import { useState } from "react";
import "./App.css";

function App() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("error");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      setStatusType("error");
      setStatusMessage("All fields are required");
      return;
    }

    setStatusType("success");
    setStatusMessage("Thank you! Your message has been submitted successfully.");
    setIsSubmitted(true);
    form.reset();
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setStatusMessage("");
    setStatusType("error");
  };

  return (
    <main className="contact-page">
      <div className="form-shell">
        <h1>Contact Form</h1>

        {isSubmitted ? (
          <div className="success-card">
            <p className="success-card__text">
              Thank you! Your message has been submitted successfully.
            </p>
            <button
              type="button"
              className="secondary-button"
              onClick={handleSendAnother}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <p
              className={`form-message ${statusType}`}
              role="alert"
              aria-live="assertive"
            >
              {statusMessage}
            </p>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                aria-describedby="email-info"
              />
              <small id="email-info">We will not share your email</small>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default App;