import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Lista from '../../components/Lista/Lista'

const Packages = () => {
  return(
  <div>
    <Navbar/>
    <h1>Lista de paquetes</h1>
    <div >
      <Lista/>
    </div>
  </div>
  )
};

export default Packages 