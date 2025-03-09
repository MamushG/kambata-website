import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script"; // ✅ Import Script for Google AdSense

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    verificationCode: "",
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      setUsers(storedUsers);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    if (typeof window === "undefined") return;

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = storedUsers.find((u) => u.email === user.email && u.password === user.password);

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      alert("✅ Sign in successful!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      setError("🚫 Invalid email or password.");
    }
  };

  return (
    <>
      {/* ✅ Add Google AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4500183381967931"
        crossOrigin="anonymous"
      />

      <div style={containerStyle}>
        <h1>{isNewUser ? "📝 Create Account" : "🔑 Sign In"}</h1>
        <p>{isNewUser ? "Join the Kambata Community today!" : "Welcome! Please sign in to continue."}</p>

        {error && <p style={errorStyle}>{error}</p>}
        {success && <p style={successStyle}>{success}</p>}

        <form onSubmit={handleSignIn} style={formStyle}>
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Sign In</button>
        </form>

        {/* ✅ Google AdSense Ad Placement */}
        <ins 
          className="adsbygoogle"
          style={{ display: "block", margin: "20px 0" }}
          data-ad-client="ca-pub-4500183381967931"
          data-ad-slot="1234567890" // ✅ Replace with your actual Ad Slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <p style={{ marginTop: "10px", cursor: "pointer", color: "#007bff" }}>
          <Link href="/forgot-password">🔒 Forgot Password?</Link>
        </p>

        <p style={{ marginTop: "15px" }}>
          <Link href="/">⬅️ Back to Home</Link>
        </p>
      </div>
    </>
  );
}

// Styles
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

const successStyle = {
  color: "green",
  fontWeight: "bold",
};
