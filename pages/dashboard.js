import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Use useCallback to ensure localStorage is only accessed on the client side
  const checkUser = useCallback(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      if (!storedUser) {
        router.replace("/signin"); // Redirect if not signed in
      } else {
        setCurrentUser(storedUser);
      }
    }
  }, [router]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  if (!currentUser) return <p style={loadingStyle}>🔄 Loading...</p>;

  return (
    <div style={containerStyle}>
      <h1>🏠 Member Dashboard</h1>
      <p><strong>Welcome, {currentUser.firstName}!</strong></p>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <p><strong>Phone:</strong> {currentUser.phone}</p>
      <p><strong>Membership Status:</strong> ✅ Active</p>

      <div style={buttonContainer}>
        <Link href="/update-profile">
          <button style={buttonStyle}>✏️ Update Profile</button>
        </Link>

        {/* 💳 Pay Membership Fee via Cash App */}
        <Link href="https://cash.app/$kambatapage" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>💳 Pay Membership Fee via Cash App</button>
        </Link>

        <button
          style={logoutButtonStyle}
          onClick={() => {
            localStorage.removeItem("currentUser");
            router.replace("/signin");
          }}
        >
          🚪 Log Out
        </button>
      </div>

      <p style={{ marginTop: "15px" }}>
        <Link href="/">⬅️ Back to Home</Link>
      </p>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: "40px",
  maxWidth: "500px",
  margin: "0 auto",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const buttonContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
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

const logoutButtonStyle = {
  ...buttonStyle,
  background: "red",
};

const loadingStyle = {
  textAlign: "center",
  fontSize: "1.2rem",
  marginTop: "50px",
};
