import React from 'react'
import { CTA, Navbar, Brand } from './components';
import {Blog, Header,Footer,Features,Possibility,WhatGPT3} from './containers';

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App