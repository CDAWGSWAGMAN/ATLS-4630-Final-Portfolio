import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xgvgygnn";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="primary-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && (
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#16a34a" }}>
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#b91c1c" }}>
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>

        <div className="contact-links">
          <h3>Elsewhere</h3>
          <p>
            Prefer email, LinkedIn, or just want my resume quickly?
            You can also reach me here:
          </p>
          <ul>
            <li>
              <a href="mailto:cmalbers21@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carter-albers-9517992ab/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CDAWGSWAGMAN"
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
