import styles from '../styles/History.module.css';
import Link from 'next/link';

export default function History() {
  return (
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
        <img src="/images/hambaricho.jpg" alt="Mount Hambaricho" className={styles.image} />
        <p>One of the most significant historical and cultural sites of Kambata, featuring 777 stairs—believed to be the first in Africa and the seventh in the world.</p>
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
          <li>🎵 <strong>Gifaata:</strong> A dynamic and energetic cultural dance performed after the Masaala festival. This rhythmic dance symbolizes unity, joy, and tradition, bringing together men and women dressed in stunning traditional Kambata attire. Accompanied by vibrant drumbeats and singing, Gifaata creates an electrifying atmosphere where the community gathers to celebrate their heritage. More than just a dance, it represents the strength, pride, and resilience of the Kambata people, ensuring their traditions are preserved for future generations.</li>
          <li>🎵 <strong>Selemme:</strong> A ceremonial chant sung during significant community gatherings, reflecting the rich oral tradition of the Kambata people.</li>
        </ul>

        <h3>🎊 The Annual Masaala Festival</h3>
        <p>The Masaala Festival unites Kambata families from across Ethiopia and around the world to celebrate their heritage and strengthen bonds through joyful reunions. This special holiday marks the beginning of the Kambata New Year, bringing people together to share unique cultural foods such as Atakaano (አተካኖ) and Kitfo (ክትፎ).</p>
        <p>On this day, Kambata families and their loved ones gather at the historic 'SAXO' (የሰጦ ገባያ) market in Damboya Woreda—a vibrant, once-a-year cultural festival where traditions are honored and community spirit thrives.</p>
      </section>

      {/* Demographics & Religion Section */}
      <section className={styles.section}>
        <h2>📊 Demographics & Religion</h2>
        <p>The population of Kambata people number is around 1.8 million. They speak Kambatigna, a Highland East Cushitic language.</p>
        <h3>🙏 Religion</h3>
        <ul>
          <li>📍 <strong>98.5%</strong> Protestant Christians</li>
          <li>📍 <strong>1.5%</strong> Other religions (Islam, Ethiopian Orthodox Christianity)</li>
        </ul>
      </section>

      {/* Education & Community Service Section */}
      <section className={styles.section}>
        <h2>🎓 Education & Community Service</h2>
        <p>
          The Kambata people place a strong emphasis on education, believing it to be a powerful tool for progress and development. Despite economic challenges, the region has produced a remarkable number of scholars, engineers, doctors, and professors who have made significant contributions both in Ethiopia and internationally.
        </p>
        <p>
          Many Kambata professionals have excelled in medicine, engineering, academia, and leadership roles, bringing knowledge and expertise to their communities and beyond. However, the region continues to face economic hardships, with limited resources and infrastructure to fully support its growing number of educated youth.
        </p>
        <p>
          To bridge this gap, various community-driven initiatives and diaspora contributions have played a crucial role in supporting schools, providing scholarships, and improving access to education. The resilience and determination of Kambata students remain a testament to the value placed on learning, perseverance, and the pursuit of excellence.
        </p>
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
  );
}
