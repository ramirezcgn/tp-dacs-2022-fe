import React from 'react';
import Link from 'next/link';
import DetailPackage from './Details';
import styles from './package.module.css';

const ItemPackage = ({paq}) => {
  return(
    <div className={styles.paquete}>
      <li> 
        <img src={paq.image} alt="Foto" />
          <Link href={`/package`}>
              <a>{paq.name}</a>
          </Link> 
      </li>
    </div>
  )
};

export default ItemPackage