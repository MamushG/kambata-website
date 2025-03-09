import Breadcrumb from '../components/Breadcrumb';
import kambataClans from '../data/kambataClans';
import styles from '../styles/Clans.module.css';

export default function KambataClans() {
  return (
    <div className={styles.container}>
      <Breadcrumb />

      {/* Header Section */}
      <header className={styles.header}>
        <h1>🌍 Major Clans of the Kambata People</h1>
      </header>

      {/* ✅ Google AdSense Ad */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>

      {/* Description Section */}
      <section className={styles.clanDescription}>
        <p>
          The Kambata people have a deeply rooted history with a rich cultural heritage 
          shaped by various clans. Each clan has a distinct origin, tracing back to 
          different historical regions, migrations, and influences over centuries.  
          These clans have played a crucial role in shaping the **social, economic, and political** 
          structures of the Kambata community.
        </p>
        <p>
          Some clans migrated from different parts of Ethiopia, including Gondar, 
          Shoa, Wollo, and Arsi, while others have been indigenous to the Kambata region 
          for centuries. These migrations and interactions have contributed to the diverse 
          and unique identity of the Kambata people.
        </p>
        <p>
          Below is a list of **major Kambata clans**, their claimed origins, and the approximate 
          periods of their migration or establishment.
        </p>
      </section>

      {/* Clan List */}
      <section className={styles.clanList}>
        <ol>
          {kambataClans.map((clan) => (
            <li key={clan.id} className={styles.clanItem}>
              <strong>{clan.name}</strong> 
              <span className={styles.details}>
                (Origin: {clan.origin}, Migration Period: {clan.period})
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ✅ Another Google AdSense Ad in Footer */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4500183381967931"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>📜 Preserving Kambata heritage for future generations.</p>
      </footer>
    </div>
  );
}
