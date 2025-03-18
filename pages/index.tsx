import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("isAdmin");
    setIsAdmin(storedAdmin === "true");
  }, []);

  return (
    <div className={styles.homeContainer}>
      
      {/* ✅ Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroTitleContainer}>
          <Image 
            src="/images/flag.png" 
            alt="Kambata Flag" 
            width={80} 
            height={50} 
            className={styles.heroImage} 
            priority
          />
          <h1 className={styles.heroTitle}>Welcome to Kambata Community</h1>
        </div>
        <p className={styles.heroText}>
          Let&apos;s come together to strengthen our bonds, celebrate our heritage, 
          and learn about our people. We are Kambata—more than just words, 
          we take action! Let&apos;s stand together, support one another, and embrace 
          our rich history and culture.
        </p>
      </div>

      {/* ✅ Navigation Buttons - Placed Closer to Hero Section */}
      <div className={styles.buttonRow}>
        <Link href="/history"><button className={styles.button}>📜 Learn History</button></Link>
        <Link href="/clans"><button className={styles.button}>🌍 Explore Clans</button></Link>
        <Link href="/store"><button className={styles.button}>🛍️ Shop Cultural Items</button></Link>
        <Link href="/signin"><button className={styles.button}>🔑 Member Sign In</button></Link>
        <Link href="/fund"><button className={styles.button}>💰 Support the Page</button></Link>
        <Link href="/contact"><button className={styles.button}>📩 Contact Us</button></Link>
        <Link href="/advertise"><button className={styles.button}>📢 Advertise with Us</button></Link>
        {isAdmin && <Link href="/members"><button className={`${styles.button} ${styles.adminButton}`}>👥 View Members</button></Link>}
      </div>

      {/* ✅ About Kambata Heritage - Three Images Included */}
      <div className={styles.contentContainer}>
        <Image 
          src="/images/fl.jpg" 
          alt="Kambata Flag Representation" 
          width={500} 
          height={300} 
          className={styles.leftImage} 
          priority
        />
        <div className={styles.textContent}>
          <h2>🌿 About Kambata Heritage and Kambata Youth</h2>
          <p>
            In Kambata culture, love is a journey filled with excitement, 
            tradition, and deep family connections. Young engaged couples 
            proudly embrace their heritage as they explore the historic sites 
            of Kambata before their big day.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <Image 
          src="/images/km2.jpg" 
          alt="Kambata Traditional Scene" 
          width={500} 
          height={300} 
          className={styles.leftImage} 
          priority
        />
        <div className={styles.textContent}>
          <h3>🌿 The Tour Before "I Do"</h3>
          <p>
            In the heart of Kambata, it&apos;s a cherished tradition for 
            engaged couples to tour their homeland before marriage. 
            As they walk through the lush green fields, enjoy the scenic 
            mountains, and visit historical sites, they take a moment to reflect 
            on their love, their families, and the life they are about to build together.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <Image 
          src="/images/km3.jpg" 
          alt="Kambata Cultural Celebration" 
          width={500} 
          height={300} 
          className={styles.leftImage} 
          priority
        />
        <div className={styles.textContent}>
          <h3>💒 The Wedding Celebration: A Union of Love & Family</h3>
          <p>
            After their tour, it&apos;s time to tie the knot! The couple returns home, 
            where a grand wedding ceremony awaits them. Held in a beautiful church, 
            the bride and groom exchange vows, surrounded by both families, close friends, 
            neighbors, and even coworkers—a true celebration of unity, love, and culture.
          </p>
          <ul>
            <li>🎶 The sound of joyful singing and traditional music fills the air.</li>
            <li>🎊 The dancing never stops, and the blessing of elders makes the moment even more special.</li>
            <li>🥂 The feast begins, with delicious traditional dishes shared among loved ones.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Faith & Tradition */}
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h3>🙏 Faith & Tradition: The Heart of Kambata</h3>
          <p>
            Kambata society is deeply spiritual, with faith playing a 
            vital role in daily life. The dominant religion is Christianity 
            (Protestant), and just like their ancestors, the younger generation 
            continues to uphold strong religious values, embracing a life of faith, 
            community, and togetherness.
          </p>
        </div>
      </div>

      {/* ✅ A Legacy of Strength */}
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h3>🎉 A Legacy of Strength & Cultural Pride</h3>
          <p>
            For centuries, the Kambata people have nurtured a legacy of 
            resilience, unity, and cultural excellence. Their traditions, 
            values, and rich heritage have been passed down through generations, 
            keeping the spirit of their ancestors alive. With vibrant festivals, 
            rhythmic music, and captivating storytelling, Kambata remains a land of 
            joy, history, and endless pride.
          </p>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Kambata Heritage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
