import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Members() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!loggedInUser) {
      router.push("/signin"); // ✅ Redirect to Sign In if not logged in
    }
  }, [router]); // ✅ Fixed missing dependency warning

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

      <p style={{ marginTop: '15px' }}>
        <Link href="/">⬅️ Back to Home</Link>
      </p>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '40px',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const tableHeadStyle = {
  backgroundColor: '#007bff',
  color: 'white',
};
