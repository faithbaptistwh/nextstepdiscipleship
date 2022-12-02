import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopNav from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Step Discipleship</title>
      </Head>
      <TopNav/>
      <main className={styles.main}>
        <h1 className={styles.title}>
        Next Step Discipleship
        </h1>
      </main>
    </div>
  )
}
