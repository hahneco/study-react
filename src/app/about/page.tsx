'use client'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <style jsx>{`
        h1 {
          color: pink;
        }
      `}</style>
      <div className="container">
        <h1 className="h1 text-center">aboutページ</h1>
        <p className="my-3 text-primary text-center">Get started by editing</p>
        <p className="my-3 text-center"><small>pages/about.js</small></p>
      </div>
    </main>
  )
}

export default About;
