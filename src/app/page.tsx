'use client'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <style jsx>{`
        h1 {
          textAlign: center;
          color: pink;
        }
      `}</style>
      <h1 className="h1">indexページ</h1>
    </main>
  )
}
