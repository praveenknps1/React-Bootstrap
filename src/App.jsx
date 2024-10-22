import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





// import Nothing from './components/cardFS'

// import Navb from './Restaurant/navbar'

// import Caro from './Restaurant/carosl'

// import Menu from './Restaurant/menu'

// import Foot from './Restaurant/footer'
// import Map from './Restaurant/maps'





// /class_com

import Nothing from './class_components/Fakestore/cardFS'



import Caro from './class_components/Restaurant/carosl'

import Navb from './class_components/Restaurant/navbar'

import Menu from './class_components/Restaurant/menu'

import Map from './class_components/Restaurant/maps'

import Foot from './class_components/Restaurant/footer'

function App() {

  return (
    <>
     {/* <Nothing/> */}

<br />
<br />
<br />

    {/* <Navb/>
   <Caro/>
     <Menu/>
     <Map/>
     <Foot/> */}




<Nothing/>

<br />
<br />
<br />

<Navb/>
<Caro/>
<Menu/>
<Map/>
<Foot/>




    </>
  )
}

export default App
