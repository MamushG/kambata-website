import { useState } from "react";
import Link from "next/link";
import styles from "../styles/ForgotPassword.module.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ success: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });

    if (!email.trim()) {
      setStatus({ success: false, message: "⚠️ Please enter your email." });
      return;
    }

    // Simulating email submission
    setTimeout(() => {
      setStatus({
        success: true,
        message: "📩 A password reset link has been sent to your email.",
      });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1>🔑 Forgot Password</h1>
      <p>Enter your email, and we’ll send you a password reset link.</p>

      {status.message && (
        <p className={status.success ? styles.success : styles.error}>
          {status.message}
        </p>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          aria-label="Email Address"
          required
        />
        <button type="submit" className={styles.button}>
          📩 Send Reset Link
        </button>
      </form>

      <p>
        <Link href="/signin">⬅️ Back to Sign In</Link>
      </p>
    </div>
  );
}
