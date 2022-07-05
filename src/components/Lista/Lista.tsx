import React from 'react';
import paq from '../packages.json'
import ItemPackage from '../Package/Package';
import styles from './lista.module.css';

const ListPackages = () => {
  return(
  <div>
      <ul className={styles.lista} >
          {
              paq.packages.map((paquete) => < ItemPackage paq={paquete} />)
          }
      </ul>
  </div>
  )
};

export default ListPackages 