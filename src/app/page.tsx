'use client'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <style jsx>{`
        h1 {
          color: pink;
        }
      `}</style>
      <div className="container">
        <h1 className="h1 text-center">indexページ</h1>
        <p className="my-3 text-primary text-center">Get started by editing</p>
        <p className="my-3 text-center"><small>pages/index.js</small></p>
      </div>
    </main>
  )
}
