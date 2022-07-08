import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Lista from '../../components/Lista/Lista';
import styles from '../packages/aa.module.scss'

const Packages = () => {
  return(
  <div className={styles.principal}>
    <Navbar/>
    <h1>Lista de paquetes</h1>
    <div >
      <Lista/>
    </div>
  </div>
  )
};

export default Packages 