'use client'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Headline from './components/Headline';
// import { Main } from 'next/document';
import Main from './components/Main'

export default function Home() {
  return (
    <Main page="index" />
  )
}
