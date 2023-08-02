import styles from "./styles";

import {
  Navbar,
  Hero,
  AboutDr,
  AboutUs,
  Services,
  Products,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main>
      {/* Main Container */}
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar wrapper */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero wrapper */}
        <div className={` bg-primary ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* sections wrapper */}
        <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <AboutDr />
            <Products />
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
