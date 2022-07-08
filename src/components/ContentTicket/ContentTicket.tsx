import React from 'react';
import styles from 'styles/global.module.css';
import camellos from '/public/img/camellos.jpg';
import museo1 from '/public/img/museo1.jpg';
import museo2 from '/public/img/museo2.jpg';
import museo3 from '/public/img/museo3.jpg';
import parque from '/public/img/parque.jpg';
import museo4 from '/public/img/museo4.jpg';
import Link from 'next/link';
import ImageWithModal from './components/ImageWithModal';

function ContentPaquete() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <Link href="/admin/hotel">
              <h2>
                <a>Hotel</a>
              </h2>
            </Link>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <Link href="/admin/aereo">
              <h2>
                <a>Aereo</a>
              </h2>
            </Link>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <Link href="/admin/ticket">
              <h2>
                <a>Tickets</a>
              </h2>
            </Link>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Mas</h2>
          </div>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th className={styles.tabs2}>CARRERA DE CAMELLOS</th>
              <th className={styles.tabs2}>
                TOUR PRIVADO POR EL MUSEO SHEIKH FAISAL
              </th>
              <th className={styles.tabs2}>
                VISITA AL MUSEO DE ARTE ISLAMICO DE DOHA
              </th>
            </tr>
            <tr>
              <td>
                <ImageWithModal src={camellos} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={museo1} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={museo2} alt="Picture of the author" />
              </td>
            </tr>
            <tr>
              <td>
                <b>Ubicacion:</b> centro de equitacion
              </td>
              <td>
                <b>Ubicacion:</b> municipio de Al Shahaniya
              </td>
              <td>
                <b>Ubicacion:</b> localidad de Doha
              </td>
            </tr>
            <tr>
              <td>
                <b>Fecha:</b> 30/11/2022
              </td>
              <td>
                <b>Dias:</b> miercoles, jueves y viernes
              </td>
              <td>
                <b>Dias:</b> jueves, viernes y sabado
              </td>
            </tr>
            <tr>
              <td>
                <b>Horario:</b> 18hs
              </td>
              <td>
                <b>Horario:</b> 19hs a 21hs
              </td>
              <td>
                <b>Horario:</b> 18hs a 20hs
              </td>
            </tr>
            <tr>
              <td>
                <b>Precio:</b> $3000
              </td>
              <td>
                <b>Precio:</b> $3000
              </td>
              <td>
                <b>Precio:</b> $3500
              </td>
            </tr>
            <tr>
              <td>
                <button>AGREGAR</button>
              </td>
              <td>
                <button>AGREGAR</button>
              </td>
              <td>
                <button>AGREGAR</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className={styles.tabs2}>VISITA AL MUSEO MSHEIRB</th>
              <th className={styles.tabs2}>ENTRADA AL PARQUE AL BIDDA</th>
              <th className={styles.tabs2}>
                VISITA AL MUSEO ARABE DE ARTE MODERNO
              </th>
            </tr>
            <tr>
              <td>
                <ImageWithModal src={museo3} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={parque} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={museo4} alt="Picture of the author" />
              </td>
            </tr>
            <tr>
              <td>
                <b>Ubicacion:</b> Al Arsheef Al Watani St
              </td>
              <td>
                <b>Ubicacion:</b>: Rumaila
              </td>
              <td>
                <b>Ubicacion:</b> Al Lucqta St
              </td>
            </tr>
            <tr>
              <td>
                <b>Dias:</b> miercoles, jueves y viernes
              </td>
              <td>
                <b>Dias:</b> viernes, sabado y domingo
              </td>
              <td>
                <b>Dias:</b> jueves, viernes y sabado
              </td>
            </tr>
            <tr>
              <td>
                <b>Horario:</b> 16hs a 20hs
              </td>
              <td>
                <b>Horario:</b> 17hs a 21hs
              </td>
              <td>
                <b>Horario:</b> 17hs a 19hs
              </td>
            </tr>
            <tr>
              <td>
                <b>Precio:</b> $3000
              </td>
              <td>
                <b>Precio:</b> $3000
              </td>
              <td>
                <b>Precio:</b> $2500
              </td>
            </tr>
            <tr>
              <td>
                <button>AGREGAR</button>
              </td>
              <td>
                <button>AGREGAR</button>
              </td>
              <td>
                <button>AGREGAR</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentPaquete;
