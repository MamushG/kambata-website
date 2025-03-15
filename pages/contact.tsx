import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

// ✅ Define a TypeScript interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// ✅ Define a TypeScript interface for status messages
interface StatusMessage {
  success: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusMessage>({ success: false, message: "" });

  // ✅ Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/myzkrwka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: "✅ Message sent successfully! I will get back to you soon." });
        setFormData({ name: "", email: "", message: "" }); // ✅ Reset form
      } else {
        setStatus({ success: false, message: "🚫 Error sending message. Please try again." });
      }
    } catch (error) {
      setStatus({ success: false, message: "⚠️ Network error. Please check your connection and try again." });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>📩 Contact Me</h1>

      <p className={styles.contactDescription}>
        Have any questions or suggestions? Your input is valuable in preserving the history and culture of Kambata.
        Feel free to reach out, and I will get back to you as soon as possible.
      </p>

      {status.message && (
        <p className={status.success ? styles.success : styles.error}>
          {status.message}
        </p>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>📨 Send Message</button>
      </form>

      <p className={styles.back}>
        <Link href="/">⬅️ Return to Home</Link>
      </p>
    </div>
  );
};

export default Contact;
