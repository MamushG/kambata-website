import { useEffect, useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import styles from "../styles/UpdateProfile.module.css";

// ✅ Define TypeScript Interfaces
interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function UpdateProfile() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [updatedUser, setUpdatedUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
        setUpdatedUser(parsedUser);
      } else {
        router.replace("/signin"); // ✅ Redirect if not logged in
      }
    }
  }, [router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!currentUser) return;

      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = storedUsers.map((user: User) =>
        user.email === currentUser.email ? updatedUser : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      setSuccess("✅ Profile updated successfully!");
      setTimeout(() => router.push("/dashboard"), 1500);
    },
    [currentUser, updatedUser, router]
  );

  if (!currentUser) return <p>🔄 Loading...</p>;

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

        <button type="submit" className={styles.profileButton}>
          💾 Save Changes
        </button>
      </form>

      <p>
        <a onClick={() => router.back()} className={styles.backLink}>⬅️ Back</a>
      </p>
    </div>
  );
}
