'use client'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Headline from './components/Headline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline page="index" />
      </div>
    </main>
  )
}
