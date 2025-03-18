import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Advertise.module.css";

interface Ad {
  id: number;
  businessName: string;
  contactEmail: string;
  phone?: string;
  adDescription: string;
  imageUrl?: string;
}

const Advertise: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([
    {
      id: 1,
      businessName: "Durame Market",
      contactEmail: "info@duramemarket.com",
      phone: "+251 912 345 678",
      adDescription: "One of the largest markets in Kambata, offering fresh produce, textiles, and household goods.",
      imageUrl: "/images/mt-ham_view.jpeg",
    },
    {
      id: 2,
      businessName: "Ethio Spice Restaurant",
      contactEmail: "contact@ethiospice.com",
      phone: "+251 987 654 321",
      adDescription: "Authentic Ethiopian cuisine with a blend of Kambata flavors. Visit us today!",
      imageUrl: "/images/km2.jpg",
    }
  ]);

  const [formData, setFormData] = useState({
    businessName: "",
    contactEmail: "",
    phone: "",
    adDescription: "",
    imageUrl: "",
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

    const newAd: Ad = {
      id: ads.length + 1,
      businessName: formData.businessName,
      contactEmail: formData.contactEmail,
      phone: formData.phone || "N/A",
      adDescription: formData.adDescription,
      imageUrl: formData.imageUrl || "/images/default-ad.jpg",
    };

    setAds([...ads, newAd]);
    setFormData({ businessName: "", contactEmail: "", phone: "", adDescription: "", imageUrl: "" });
    setStatus({ success: true, message: "✅ Your ad has been added successfully!" });
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link href="/">🏠 Home</Link> | <span>📢 Advertise with Us</span>
      </nav>

      {/* Header */}
      <h1 className={styles.title}>📢 Advertise with Us</h1>
      <p className={styles.subtitle}>Promote your business and reach a larger audience in any where, we are here to help.</p>

      {/* ✅ Google AdSense Ad (Top) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", marginBottom: "20px" }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Featured Businesses - Dynamically Displayed Ads */}
      <div className={styles.businessListings}>
        <h2>🌍 Featured Businesses</h2>
        <div className={styles.businessGrid}>
          {ads.map((ad) => (
            <div key={ad.id} className={styles.businessCard}>
              <Image src={ad.imageUrl} alt={ad.businessName} width={300} height={200} />
              <h3>{ad.businessName}</h3>
              <p>{ad.adDescription}</p>
              <p><strong>📩 Contact:</strong> {ad.contactEmail}</p>
              {ad.phone && <p><strong>📞 Phone:</strong> {ad.phone}</p>}
            </div>
          ))}
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
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (Optional)"
            value={formData.imageUrl}
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
