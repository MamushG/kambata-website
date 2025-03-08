import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin (Stored in Local Storage)
    const storedAdmin = localStorage.getItem('isAdmin');
    setIsAdmin(storedAdmin === 'true');
  }, []);

  return (
    <div className={styles.homeContainer}>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroTitleContainer}>
          <img src="images/flag.png" alt="Kambata Flag" className={styles.heroImage} />
          <h1 className={styles.heroTitle}>Welcome to Kambata Community - Atlanta, Georgia</h1>
        </div>
        <p className={styles.heroText}>
          Let’s come together to strengthen our bonds, celebrate our heritage, 
          and learn about our people. We are Kambata—more than just words, 
          we take action! Let’s stand together, support one another, and embrace 
          our rich history and culture.
        </p>

        {/* Navigation Buttons */}
        <div className={styles.buttonRow}>
          <Link href="/history"><button className={styles.button}>📜 Learn History</button></Link>
          <Link href="/clans"><button className={styles.button}>🌍 Explore Clans</button></Link>
          <Link href="/store"><button className={styles.button}>🛍️ Shop Cultural Items</button></Link>
          <Link href="/signin"><button className={styles.button}>🔑 Member Sign In</button></Link>
          <Link href="/fund"><button className={styles.button}>💰 Support the Page</button></Link>
          <Link href="/contact"><button className={styles.button}>📩 Contact Us</button></Link>
          {isAdmin && <Link href="/members"><button className={styles.button}>👥 View Members</button></Link>}
        </div>
      </div>

      {/* About Kambata Heritage */}
      <div className={styles.contentContainer}>
        <img src="images/km3.jpg" alt="Kambata Heritage" className={styles.leftImage} />
        <div className={styles.textContent}>
          <h2>🌍 About Kambata Heritage</h2>
          <p>
            The Kambata people, residing in Southern Ethiopia, have a rich and diverse history deeply rooted in resilience, unity, and cultural pride. 
            For centuries, they have upheld their unique traditions, values, and heritage, passing them down through generations. Known for their strong community bonds, 
            the Kambata people continue to celebrate their identity through festivals, music, and storytelling.
          </p>
          <p>
            The Kambata region is famous for Mount Hambaricho, a sacred and historic landmark that holds deep spiritual and historical significance. 
            The mountain is home to the renowned 777 stone-carved stairs, believed to be one of the oldest in Africa. 
            This site has served as a symbol of strength and unity, attracting visitors and pilgrims who seek to connect with their ancestral past.
          </p>
        </div>
      </div>

      {/* Kookata Traditional Justice System */}
      <div className={styles.contentContainer}>
        <img src="images/flag.png" alt="Kookata System" className={styles.leftImage} />
        <div className={styles.textContent}>
          <h2>⚖️ Kookata: The Traditional Justice System</h2>
          <p>
            The Kambata people have a unique and highly respected traditional court system known as Kookata. 
            This system serves as the highest traditional court, where elders gather to address serious crimes, resolve disputes, and uphold justice within the community.
          </p>
          <ul>
            <li>🏛️ <strong>Highest Traditional Court:</strong> Handles major crimes, ethical violations, and social disputes.</li>
            <li>👴 <strong>Elders as Judges:</strong> Wisdom and integrity guide their rulings.</li>
            <li>🔍 <strong>Investigation & Accountability:</strong> Identifies and investigates threats to social harmony.</li>
            <li>🤝 <strong>Collaboration with Government:</strong> Works alongside modern legal systems to reinforce justice.</li>
          </ul>
        </div>
      </div>

      {/* Youth and Cultural Pride */}
      <div className={styles.contentContainer}>
        <img src="images/fl.jpg" alt="Kambata Youth Pride" className={styles.leftImage} />
        <div className={styles.textContent}>
          <h2>🌟 Kambata Youth: Pride in Heritage and Family</h2>
          <p>
            Kambata youth take immense pride in their rich culture, embracing their identity with honor and enthusiasm. 
            Whether during festivals, traditional dances, or community gatherings, they wear their cultural attire 
            with dignity and joy.
          </p>
          <p>
            Surrounded by loved ones, they celebrate traditions that have been passed down for generations. 
            Their unity, resilience, and commitment to preserving Kambata heritage ensure that their history 
            remains alive for future generations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Kambata Heritage. All rights reserved.</p>
      </footer>
    </div>
  );
}
