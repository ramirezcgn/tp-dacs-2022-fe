import React from 'react';
import styles from './LeftNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faCog,
  faHeart,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>FANTUR</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <a href="#">Inicio</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faRocket}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <Link href="/admin/paquete">Paquetes</Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <a href="#">Ventas</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <a href="#">Guardados</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <a href="#">Opciones</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ width: '18px', cursor: 'pointer' }}
            />{' '}
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
