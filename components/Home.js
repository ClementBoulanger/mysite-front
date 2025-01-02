import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold">A propos</h2>
          <p>Votre description ici...</p>
        </section>
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold">Compétences</h2>
          <p>Vos compétences ici...</p>
        </section>
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold">Projets</h2>
          <p>Vos projets ici...</p>
        </section>
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p>Vos informations de contact ici...</p>
          <div className="flex space-x-4">
            <a href="https://github.com/ClementBoulanger" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/clem-boulanger/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:clement.boulangerpro@gmail.com">Email</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;