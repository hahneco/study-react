'use client'
import Image from 'next/image'
// import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'
import Headline from './components/Headline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline title="Index Page" page="index" />
      </div>
    </main>
  )
}
