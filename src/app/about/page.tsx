'use client'

import 'bootstrap/dist/css/bootstrap.css'
import Headline from '../components/Headline';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="container">
        <Headline page="about" />
      </div>
    </main>
  )
}

export default About;
