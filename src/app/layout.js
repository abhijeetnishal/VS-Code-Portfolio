import Explorer from './components/Explorer'
import Sidebar from './components/Sidebar'
import { Inter } from 'next/font/google'
import styles from './styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <Explorer />
        <main className={styles.content}>{children}</main>
      </body>
    </html>
  )
}
