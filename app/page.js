import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import DataInput from './components/DataInput'

export default function Home() {
  return (
    <main className={styles.main}>
      <DataInput />
    </main>
  )
}
