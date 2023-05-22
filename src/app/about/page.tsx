'use client'

// import '../globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'
import Headline from '../components/Headline';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline title="About Page" page="about" />
      </div>
    </main>
  )
}

export default About;
