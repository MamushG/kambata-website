import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ success: false, message: "⚠️ All fields are required." });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myzkrwka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: "✅ Message sent successfully! I will get back to you soon." });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus({ success: false, message: "🚫 Error sending message. Please try again." });
      }
    } catch {
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
