import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Function to generate a 6-digit verification code
  const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  // ✅ Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (user.password.length < 6 || !/[A-Z]/.test(user.password)) {
      setError("Password must be at least 6 characters long and contain at least one uppercase letter.");
      return;
    }

    if (users.some((u) => u.email === user.email)) {
      setError("🚫 Email already registered. Please sign in.");
      return;
    }

    const verificationCode = generateCode();
    setGeneratedCode(verificationCode);

    // Simulating sending verification code (Replace with email/SMS API)
    alert(`Verification Code: ${verificationCode}`);

    setIsVerifying(true);
  };

  // ✅ Handle Verification
  const handleVerify = (e) => {
    e.preventDefault();
    if (user.verificationCode === generatedCode) {
      const newUser = { ...user };
      delete newUser.verificationCode; // Remove verification code after success

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("✅ Account successfully registered!");
      setSuccess("Account created! You can now sign in.");
      setIsNewUser(false);
      setIsVerifying(false);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        verificationCode: "",
      });
    } else {
      setError("🚫 Incorrect verification code. Please try again.");
    }
  };

  // ✅ Handle Login & Redirect
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    const existingUser = users.find((u) => u.email === user.email && u.password === user.password);

    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser)); // ✅ Store logged-in user
      alert("✅ Sign in successful!");

      setTimeout(() => {
        router.push("/dashboard"); // ✅ Redirect to Dashboard
      }, 1000);
    } else {
      setError("🚫 Invalid email or password.");
    }
  };

  return (
    <div style={containerStyle}>
      <h1>{isNewUser ? "📝 Create Account" : "🔑 Sign In"}</h1>
      <p>{isNewUser ? "Join the Kambata Community today!" : "Welcome! Please sign in to continue."}</p>

      {error && <p style={errorStyle}>{error}</p>}
      {success && <p style={successStyle}>{success}</p>}

      {!isVerifying ? (
        <form onSubmit={isNewUser ? handleRegister : handleSignIn} style={formStyle}>
          {isNewUser && (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} required style={inputStyle} />
              <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} required style={inputStyle} />
              <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required style={inputStyle} />
              <input type="tel" name="phone" placeholder="Phone Number" value={user.phone} onChange={handleChange} required style={inputStyle} />
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required style={inputStyle} />
            </>
          )}

          {!isNewUser && (
            <>
              <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required style={inputStyle} />
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required style={inputStyle} />
            </>
          )}

          <button type="submit" style={buttonStyle}>
            {isNewUser ? "Register" : "Sign In"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerify} style={formStyle}>
          <input type="text" name="verificationCode" placeholder="Enter Verification Code" value={user.verificationCode} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Verify Account</button>
        </form>
      )}

      <p style={{ marginTop: "10px", cursor: "pointer", color: "#007bff" }} onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? "🔑 Already registered? Sign In" : "📝 New user? Create an account"}
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
