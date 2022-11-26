import React from 'react'
import Header from './UHeader'
import Child1 from './Child1'
import Child2 from './Child2'

import "./App.css"

function Home() {
  return (
    <div className='home'>
        <Header/>
        <Child1/>
        <Child2/>
    </div>
  )
}

export default Home


