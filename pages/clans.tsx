import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import kambataClans from "../data/kambataClans";
import styles from "../styles/Clans.module.css";

// ✅ Define a TypeScript interface for a Clan with optional properties
interface Clan {
  id: number;
  name: string;
  origin?: string;  // ✅ Made optional to avoid errors
  period?: string;  // ✅ Made optional to avoid errors
  description?: string; // ✅ Already optional
}

const KambataClans: React.FC = () => {
  const [expandedClan, setExpandedClan] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  // ✅ Toggle clan details when clicking on the name
  const handleToggleDetails = (id: number) => {
    setExpandedClan(expandedClan === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <Breadcrumb />

      {/* Header Section */}
      <header className={styles.header}>
        <h1>🌍 Major Clans of the Kambata People</h1>
      </header>

      {/* ✅ Google AdSense Ad (Top) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Description Section */}
      <section className={styles.clanDescription}>
        <p>
          The Kambata people have a deeply rooted history with a rich cultural heritage 
          shaped by various clans. Each clan has a distinct origin, tracing back to 
          different historical regions, migrations, and influences over centuries.  
          These clans have played a crucial role in shaping the <strong>social, economic, and political</strong> 
          structures of the Kambata community.
        </p>
        <p>
          Some clans migrated from different parts of Ethiopia, including Gondar, 
          Shoa, Wollo, and Arsi, while others have been indigenous to the Kambata region 
          for centuries. These migrations and interactions have contributed to the diverse 
          and unique identity of the Kambata people.
        </p>
        <p>
          Below is a list of <strong>major Kambata clans</strong>, their claimed origins, and the approximate 
          periods of their migration or establishment.
        </p>
        <h2>Click on each clan’s name for more details.</h2>
      </section>

      {/* Clan List */}
      <section className={styles.clanList}>
        <ol>
          {kambataClans.map((clan: Clan) => (
            <li key={clan.id} className={styles.clanItem}>
              <strong
                className={`${styles.clickableClan} ${expandedClan === clan.id ? styles.expanded : ""}`}
                onClick={() => handleToggleDetails(clan.id)}
              >
                {clan.name}
              </strong>

              {/* ✅ Only show origin & period if they exist (Fixes TypeScript error) */}
              {(clan.origin || clan.period) && (
                <span className={styles.details}>
                  {clan.origin && `Origin: ${clan.origin}`} 
                  {clan.origin && clan.period && ", "}
                  {clan.period && `Migration Period: ${clan.period}`}
                </span>
              )}

              {/* ✅ Show description when clan name is clicked */}
              {expandedClan === clan.id && clan.description && (
                <p className={styles.description}>{clan.description}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* ✅ Google AdSense Ad (Bottom) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>📜 Preserving Kambata heritage for future generations.</p>
      </footer>
    </div>
  );
};

export default KambataClans;
