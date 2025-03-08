import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateProfile.module.css";

export default function UpdateProfile() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!storedUser) {
      router.push("/signin"); // Redirect if not logged in
    } else {
      setCurrentUser(storedUser);
      setUpdatedUser(storedUser);
    }
  }, [router]); // ✅ Fixed: Added router as a dependency

  const handleChange = (e) => {
    setUpdatedUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = storedUsers.map((user) =>
        user.email === currentUser.email ? updatedUser : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      setSuccess("✅ Profile updated successfully!");
      setTimeout(() => router.push("/dashboard"), 2000);
    },
    [currentUser, updatedUser, router] // ✅ Ensures the function updates properly
  );

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileTitle}>✏️ Update Profile</h1>

      {success && <p className={styles.successMessage}>{success}</p>}

      <form onSubmit={handleUpdate} className={styles.profileForm}>
        <input
          type="text"
          name="firstName"
          value={updatedUser.firstName}
          onChange={handleChange}
          required
          className={styles.profileInput}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={updatedUser.lastName}
          onChange={handleChange}
          required
          className={styles.profileInput}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          disabled
          className={styles.profileInput}
          placeholder="Email (Cannot be changed)"
        />
        <input
          type="tel"
          name="phone"
          value={updatedUser.phone}
          onChange={handleChange}
          required
          className={styles.profileInput}
          placeholder="Phone Number"
        />

        <button type="submit" className={styles.profileButton}>💾 Save Changes</button>
      </form>

      <p>
        <a onClick={() => router.back()} className={styles.backLink}>⬅️ Back</a>
      </p>
    </div>
  );
}
