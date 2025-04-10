import React, { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const App = () => {
  const [order, setOrder] = useState(null);

  return (
    <div className='bg-gray-100'>
      <div className='pb-[100px]'>
      <Header/>
      </div>
      <Outlet context={{order, setOrder}}/>
      <Footer/>
    </div>
  )
}

export default App