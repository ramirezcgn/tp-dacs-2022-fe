import React from 'react';
import styles from "styles/global.module.css";
import Link from 'next/link';

function ContentAereo() {
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
            <Link href="/admin/index">
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
        <div>
          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>

          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>

          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>

          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>

          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>

          <div className="grid">
            <a className="card">
              <h3>BOEIGN 377</h3>
              <p>Destino: Qatar</p>
              <p>Salida: 21/11/22 </p>
              <p>Precio: $1000</p>
              <p>Disponibles: 30</p>
            </a>
          </div>
        </div>
        <style jsx>
          {`
        .grid {
          display: Inline-block;
          align-items: left;
          justify-content: left;
          flex-wrap: nowrap;
          width: 300px;
			heigth: 150 px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
			display: Inline-block;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
			width: 300px;
			heigth: 150 px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
		.card img{
		widht="300px";
		height="300px";
		}
      `}
        </style>
      </div>
    </div>
  );
}

export default ContentAereo;
