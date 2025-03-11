import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/History.module.css';

export default function History() {
  return (
    <>
      <Head>
        <title>History of the Kambata People</title>
        <meta name="description" content="Explore the rich history, traditions, and heritage of the Kambata people in Ethiopia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.historyContainer}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb}>
          <Link href="/">🏠 Home</Link> | <span>📜 History of Kambata</span>
        </nav>

        {/* Page Title */}
        <h1 className={styles.mainTitle}>📜 History of the Kambata People</h1>
        <p className={styles.subtitle}>A Legacy of Strength, Unity, and Cultural Richness</p>

        {/* Foreword Section */}
        <section className={styles.section}>
          <h2>📖 Foreword</h2>
          <p>
            Ethiopia is home to diverse ethnic groups, each with a unique culture and history. However, much of Ethiopian history has focused primarily on Abyssinian rulers, leaving many other communities, including the Kambata, undocumented.
          </p>
        </section>

        {/* Identity Section */}
        <section className={styles.section}>
          <h2>🌍 The Identity of Kambata: Ethiopia’s Cultural ‘Melting Pot’</h2>
          <p>
            The origins of the name ‘Kambata’ are debated. Some believe it was given by the Oromos, meaning, “You are surrounded—how will you escape?” Others trace it to the Ambericho Seven Tribes.
          </p>
        </section>

        {/* Mount Hambaricho Section */}
        <section className={styles.section}>
          <h2>🏔️ Mount Hambaricho – A Historic Landmark</h2>
          <p>One of the most significant historical and 
            cultural sites of Kambata, featuring 777 stairs—believed 
            to be the first in Africa and the seventh in the world.</p>
        </section>

        {/* Major Towns Section */}
        <section className={styles.section}>
          <h2>🏙️ Major Towns & Capital City</h2>
          <ul>
            <li><strong>Capital City:</strong> Durame</li>
            <li><strong>Major Towns:</strong> Damboya, Angacha, Shinshicho, Doyoganna & Funto</li>
          </ul>
        </section>

        {/* Cultural Heritage Section */}
        <section className={styles.section}>
          <h2>🎉 Culture & Traditions</h2>
          <h3>🎶 Traditional Music & Dance</h3>
          <ul>
            <li>🎵 <strong>Gifaata:</strong> A dynamic and energetic cultural dance performed after the Masaala festival.</li>
            <li>🎵 <strong>Selemme:</strong> A ceremonial chant sung during significant community gatherings.</li>
          </ul>

          <h3>🎊 The Annual Masaala Festival</h3>
          <p>The Masaala Festival unites Kambata families from across Ethiopia and around the world to celebrate their heritage and strengthen bonds through joyful reunions.</p>
        </section>

        {/* Call to Action */}
        <section className={styles.section}>
          <h2>🔍 Encouraging Further Research</h2>
          <p>The goal of this manuscript is to preserve and document the history of the Kambata people. However, history is an ongoing process, and we welcome further research, corrections, and additions.</p>
        </section>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <p>🌍 Kambata: A People of Strength, Resilience, and Unity! 💙❤️💚</p>
          <p>
            <Link href="/">⬅️ Back to Home</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
