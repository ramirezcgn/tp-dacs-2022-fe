import React from 'react';
import styles from 'styles/global.module.css';
import ocean from '/public/img/ocean.jpg';
import greengarden from '/public/img/greengarden.jpg';
import museo2 from '/public/img/museo2.jpg';
import safilia from '/public/img/safilia.jpg';
import plaza from '/public/img/plaza.jpg';
import hilton from '/public/img/hilton.jpg';
import Link from 'next/link';
import ImageWithModal from './components/ImageWithModal';

function ContentHotel() {
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
              <th className={styles.tabs2}>HOTEL HILTON DOHA</th>
              <th className={styles.tabs2}>GOLDEN OCEAN HOTEL</th>
              <th className={styles.tabs2}>OUTLANDING APART</th>
            </tr>
            <tr>
              <td>
                <ImageWithModal src={hilton} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={ocean} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={museo2} alt="Picture of the author" />
              </td>
            </tr>
            <tr>
              <td>
                <b>Ubicacion:</b> Diplomatic Area, Dafna, Doha
              </td>
              <td>
                <b>Ubicacion:</b> Al Meena St. Doha, Qatar
              </td>
              <td>
                <b>Ubicacion:</b> localidad de Doha
              </td>
            </tr>
            <tr>
              <td>
                <b>Disponibile:</b> si
              </td>
              <td>
                <b>Disponibile:</b> si
              </td>
              <td>
                <b>Disponibile:</b> no
              </td>
            </tr>
            <tr>
              <td>
                <b>Estrellas:</b> 5
              </td>
              <td>
                <b>Estrellas:</b> 5
              </td>
              <td>
                <b>Estrellas:</b> 4
              </td>
            </tr>
            <tr>
              <td>
                <b>Precio:</b> $35000
              </td>
              <td>
                <b>Precio:</b> $4400
              </td>
              <td>
                <b>Precio:</b> $3500
              </td>
            </tr>
            <tr>
              <td>
                <b>Cantidad de habitaciones:</b>
              </td>
              <td>
                <b>Cantidad de habitaciones:</b>
              </td>
              <td>
                <b>Cantidad de habitaciones:</b>
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
              <th className={styles.tabs2}>GREEN GARDEN RESORT</th>
              <th className={styles.tabs2}>BEST WESTERN PLUS</th>
              <th className={styles.tabs2}>PLAZA INN DOHA</th>
            </tr>
            <tr>
              <td>
                <ImageWithModal src={greengarden} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={safilia} alt="Picture of the author" />
              </td>
              <td>
                <ImageWithModal src={plaza} alt="Picture of the author" />
              </td>
            </tr>
            <tr>
              <td>
                <b>Ubicacion:</b> 5th Avenue Street, Doha Qatar
              </td>
              <td>
                <b>Ubicacion:</b>: Al Safilia Street, 20409 Doha, Qatar
              </td>
              <td>
                <b>Ubicacion:</b> Old Salata Area, Al Meena Street, Doha, Qatar
              </td>
            </tr>
            <tr>
              <td>
                <b>Disponible:</b> no
              </td>
              <td>
                <b>Disponible:</b> no
              </td>
              <td>
                <b>Disponible:</b> si
              </td>
            </tr>
            <tr>
              <td>
                <b>Estrellas:</b> 3
              </td>
              <td>
                <b>Estrellas:</b> 4
              </td>
              <td>
                <b>Estrellas:</b> 3
              </td>
            </tr>
            <tr>
              <td>
                <b>Precio:</b> $1500
              </td>
              <td>
                <b>Precio:</b> $2500
              </td>
              <td>
                <b>Precio:</b> $2000
              </td>
            </tr>
            <tr>
              <td>
                <b>Cantidad de habitaciones:</b>
              </td>
              <td>
                <b>Cantidad de habitaciones:</b>
              </td>
              <td>
                <b>Cantidad de habitaciones:</b>
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

export default ContentHotel;
