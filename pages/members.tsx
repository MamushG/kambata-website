import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Define the structure of a user object
interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const Members: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = localStorage.getItem("users");
      const parsedUsers: User[] = storedUsers ? JSON.parse(storedUsers) : [];
      setUsers(parsedUsers);

      const loggedInUser = localStorage.getItem("currentUser");
      if (!loggedInUser) {
        router.push("/signin"); // ✅ Redirect to Sign In if not logged in
      }
    }
  }, [router]); // ✅ Dependency added to avoid missing warning

  return (
    <div style={containerStyle}>
      <h1>👥 Registered Members</h1>
      <p>Here is the list of active members in the Kambata community.</p>

      {users.length > 0 ? (
        <table style={tableStyle}>
          <thead style={tableHeadStyle}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No members registered yet.</p>
      )}

      <p style={{ marginTop: "15px" }}>
        <Link href="/">⬅️ Back to Home</Link>
      </p>
    </div>
  );
};

// Styles (Typed with CSSProperties)
const containerStyle: React.CSSProperties = {
  padding: "40px",
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const tableHeadStyle: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
};

export default Members;
