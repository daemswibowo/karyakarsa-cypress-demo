import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  function onClickMe(e: any) {
    e.preventDefault();
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World!</title>
        <meta
          name="description"
          content="An example for KaryaKarsa cypress automation test sharing session"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
        <br />
        <br />
        <a data-testid={'btnClickMe'} onClick={onClickMe} href="#" className={styles.card}>
          <h2 style={{ marginBottom: 0 }}>Click Me! &rarr;</h2>
        </a>

        {show ? (
          <p data-testid={'infoThanks'} className={styles.description}>Thanks for clicking!</p>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
