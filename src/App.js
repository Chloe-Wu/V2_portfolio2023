import React from 'react'
import { CTA, Navbar, Brand } from './components';
import {Blog, Header,Footer,Features,Possibility,Possibility2,Possibility3,WhatGPT3,Contact} from './containers';

import './App.css'

const App = () => {
  return (
    
    <div className='App'>
        <div>
          <Navbar />
        </div>
        <div className='rightC gradient_bg'>
          <Header />
          <Brand />
          <WhatGPT3 />
          <Features />
          <CTA />
          <Blog />
          <Possibility />
          <Possibility2 />
          <Possibility3 />
          <Contact />
          <Footer />
        </div>
    </div>
  )
}

export default App