'use client'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module/css'

const About = () => {
  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: white;
            font-size: 18pt;
          }
        `}
      </style>
      <p className="h5 bg-primary">Aboutページ</p>
    </>
  )
}

export default About;
