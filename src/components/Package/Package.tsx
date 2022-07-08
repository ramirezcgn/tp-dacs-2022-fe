import React from 'react';
import Link from 'next/link';
import styles from './Package.module.css';

const ItemPackage = ({ paq }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.paquete}>
        <li>
          <div className={styles.imagen_conteiner}>
            <img src={paq?.image} alt="Foto" width="750" height="500" />
          </div>
          <div className={styles.texto_conteiner}>
            <h1>{paq.name}</h1>
            <div className={styles.precio}>
              <h6>Precio $ {paq.price}</h6>
              <h6>Dias {paq.days}</h6>
            </div>
            <p className={styles.fecha}>Fecha 7-07-2022</p>
            <p className={styles.description}>{paq.description}</p>
          </div>
          <div className={styles.boton}>
            <Link href={`/form`}>
              <a type="button" className="btn btn-primary">
                comprar
              </a>
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
};

export default ItemPackage;
