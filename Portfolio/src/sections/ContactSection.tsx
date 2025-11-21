// src/sections/ContactSection.tsx
export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>

      <div className="contact-layout">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit" className="primary-button">
            Send
          </button>
        </form>

        <div className="contact-links">
          <h3>Elsewhere</h3>
          <p>
            Prefer email, LinkedIn, or just want my resume quickly?  
            You can also reach me here:
          </p>
          <ul>
            <li>
              <a href="mailto:you@example.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
