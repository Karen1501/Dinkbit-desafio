import Head from "next/head";
import styles from "../styles/index.module.scss";
import Menu from "../src/Components/Home";
import Footer from "../src/Components/Footer.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dinkbit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
      </main>

      <Footer />
    </div>
  );
}
