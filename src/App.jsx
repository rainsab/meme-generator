import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'

export default function App() {
  return (
    <>
      <Header />
      <Meme />
      <footer className='mt-2'>
        <p className='text-center mb-2'>Visit my <a href="https://github.com/rainsab" className='link-info'>GitHub</a> to see code!</p>
      </footer>
    </>
  )  
}
