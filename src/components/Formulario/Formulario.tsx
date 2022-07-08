import React, { /*useEffect,*/ useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
  const [nombre, setFirstName] = useState('');
  const [apellido, setLastName] = useState('');
  const [dni, setDNI] = useState('');
  const [nac, setNac] = useState('');
  const [nombre2, setFirstName2] = useState('');
  const [apellido2, setLastName2] = useState('');
  const [dni2, setDNI2] = useState('');
  const [nac2, setNac2] = useState('');
  const [nombre3, setFirstName3] = useState('');
  const [apellido3, setLastName3] = useState('');
  const [dni3, setDNI3] = useState('');
  const [nac3, setNac3] = useState('');
  const [nombre4, setFirstName4] = useState('');
  const [apellido4, setLastName4] = useState('');
  const [dni4, setDNI4] = useState('');
  const [nac4, setNac4] = useState('');
  const [nombre5, setFirstName5] = useState('');
  const [apellido5, setLastName5] = useState('');
  const [dni5, setDNI5] = useState('');
  const [nac5, setNac5] = useState('');
  const pass1 = { nombre, apellido, dni, nac };
  const pass2 = { nombre2, apellido2, dni2, nac2 };
  const pass3 = { nombre3, apellido3, dni3, nac3 };
  const pass4 = { nombre4, apellido4, dni4, nac4 };
  const pass5 = { nombre5, apellido5, dni5, nac5 };

  // useEffect(() => {
  //   console.log('pasajeros: ', pass1);
  // });

  return (
    <div>
      <nav className={styles.nav}>
        <li className={styles.nav_li_1}>Nombre </li>
        <li className={styles.nav_li_2}>Apellido</li>
        <li className={styles.nav_li_3}>DNI</li>
        <li className={styles.nav_li_4}>Fecha de nacimiento</li>
      </nav>
      <div>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          required
          value={apellido}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="text"
          required
          value={dni}
          onChange={(e) => setDNI(e.target.value)}
        ></input>
        <input
          type={'date'}
          required
          value={nac}
          onChange={(e) => setNac(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required
          value={nombre2}
          onChange={(e2) => setFirstName2(e2.target.value)}
        ></input>
        <input
          type="text"
          required
          value={apellido2}
          onChange={(e2) => setLastName2(e2.target.value)}
        ></input>
        <input
          type="text"
          required
          value={dni2}
          onChange={(e2) => setDNI2(e2.target.value)}
        ></input>
        <input
          type={'date'}
          required
          value={nac2}
          onChange={(e2) => setNac2(e2.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required
          value={nombre3}
          onChange={(e3) => setFirstName3(e3.target.value)}
        ></input>
        <input
          type="text"
          required
          value={apellido3}
          onChange={(e3) => setLastName3(e3.target.value)}
        ></input>
        <input
          type="text"
          required
          value={dni3}
          onChange={(e3) => setDNI3(e3.target.value)}
        ></input>
        <input
          type={'date'}
          required
          value={nac3}
          onChange={(e3) => setNac3(e3.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required
          value={nombre4}
          onChange={(e4) => setFirstName4(e4.target.value)}
        ></input>
        <input
          type="text"
          required
          value={apellido4}
          onChange={(e4) => setLastName4(e4.target.value)}
        ></input>
        <input
          type="text"
          required
          value={dni4}
          onChange={(e4) => setDNI4(e4.target.value)}
        ></input>
        <input
          type={'date'}
          required
          value={nac4}
          onChange={(e4) => setNac4(e4.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required
          value={nombre5}
          onChange={(e5) => setFirstName5(e5.target.value)}
        ></input>
        <input
          type="text"
          required
          value={apellido5}
          onChange={(e5) => setLastName5(e5.target.value)}
        ></input>
        <input
          type="text"
          required
          value={dni5}
          onChange={(e5) => setDNI5(e5.target.value)}
        ></input>
        <input
          type={'date'}
          required
          value={nac5}
          onChange={(e5) => setNac5(e5.target.value)}
        ></input>
      </div>
      <button
        onClick={() => {
          console.log(pass1);
          console.log(pass2);
          console.log(pass3);
          console.log(pass4);
          console.log(pass5);
        }}
      >
        Continuar
      </button>
    </div>
  );
};

export default Formulario;
