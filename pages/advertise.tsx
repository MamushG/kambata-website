import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Advertise.module.css";

const Advertise: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactEmail: "",
    phone: "",
    adDescription: "",
  });

  const [status, setStatus] = useState({ success: false, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });

    if (!formData.businessName || !formData.contactEmail || !formData.adDescription) {
      setStatus({ success: false, message: "⚠️ Please fill in all required fields." });
      return;
    }

    setTimeout(() => {
      setStatus({ success: true, message: "✅ Your ad request has been submitted!" });
      setFormData({ businessName: "", contactEmail: "", phone: "", adDescription: "" });
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link href="/">🏠 Home</Link> | <span>📢 Advertise with Us</span>
      </nav>

      {/* Header */}
      <h1 className={styles.title}>📢 Advertise with Us</h1>
      <p className={styles.subtitle}>Promote your business and reach a larger audience in the Kambata community.</p>

      {/* ✅ Google AdSense Ad (Top) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", marginBottom: "20px" }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Business Listings */}
      <div className={styles.businessListings}>
        <h2>🌍 Featured Businesses</h2>
        <div className={styles.businessGrid}>
          <div className={styles.businessCard}>
            <Image src="/images/market.jpg" alt="Market" width={300} height={200} />
            <h3>Durame Market</h3>
            <p>One of the largest markets in Kambata, offering fresh produce, textiles, and household goods.</p>
          </div>
          <div className={styles.businessCard}>
            <Image src="/images/restaurant.jpg" alt="Restaurant" width={300} height={200} />
            <h3>Ethio Spice Restaurant</h3>
            <p>Authentic Ethiopian cuisine with a blend of Kambata flavors. Visit us today!</p>
          </div>
        </div>
      </div>

      {/* Advertise Form */}
      <div className={styles.adForm}>
        <h2>📩 Submit Your Advertisement</h2>
        <p>Fill out the form below, and we’ll feature your business on our platform.</p>

        {status.message && (
          <p className={status.success ? styles.successMessage : styles.errorMessage}>
            {status.message}
          </p>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="contactEmail"
            placeholder="Contact Email"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="adDescription"
            placeholder="Describe your business and services"
            value={formData.adDescription}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>🚀 Submit Ad</button>
        </form>
      </div>

      {/* ✅ Google AdSense Ad (Bottom) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", marginTop: "20px" }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Back to Home */}
      <p className={styles.backToHome}>
        <Link href="/">⬅️ Back to Home</Link>
      </p>
    </div>
  );
};

export default Advertise;
