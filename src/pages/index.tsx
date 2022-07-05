import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return(
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <h1>Pagina web, Inicio</h1>
    </main>
    <Footer/>
  </div>
  )
};

export default HomePage

