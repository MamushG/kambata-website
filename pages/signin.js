import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ✅ Handle Sign In (without alert)
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    if (typeof window === "undefined") return;

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = storedUsers.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      router.push("/dashboard"); // ✅ Redirect without alert
    } else {
      setError("🚫 Invalid email or password.");
    }
  };

  return (
    <div style={containerStyle}>
      <h1>🔑 Sign In</h1>
      <p>Welcome back! Please sign in to continue.</p>

      {error && <p style={errorStyle}>{error}</p>}

      <form onSubmit={handleSignIn} style={formStyle}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Sign In</button>
      </form>

      <p style={{ marginTop: "10px", cursor: "pointer", color: "#007bff" }}>
        <Link href="/register">📝 New user? Create an account</Link>
      </p>

      <p style={{ marginTop: "10px", cursor: "pointer", color: "red" }}>
        <Link href="/forgot-password">🔒 Forgot Password?</Link>
      </p>

      <p style={{ marginTop: "15px" }}>
        <Link href="/">⬅️ Back to Home</Link>
      </p>
    </div>
  );
}

// ✅ Styles
const containerStyle = {
  padding: "40px",
  maxWidth: "400px",
  margin: "0 auto",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "12px",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  background: "#007bff",
  color: "white",
};

const errorStyle = {
  color: "red",
  fontWeight: "bold",
};
