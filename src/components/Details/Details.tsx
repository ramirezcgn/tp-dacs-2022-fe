import React from 'react';
import paquete from './_package.json'
import styles from './Details.module.css'

const DetailPackage = ({paq}) => {
  console.log(paq);
  return(
    <div className={styles.details}>
      <h1>{paquete.name}</h1>
      <p>{'Descripcion: '+paquete.description}</p>
      <p>{'Precio: '+paquete.price}</p>
    </div>
  )
};

export default DetailPackage