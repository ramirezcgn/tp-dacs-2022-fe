import React from 'react';
import Formulario from 'components/Formulario/Formulario';
import Navbar from '../../components/Navbar/Navbar';

const AddPassanger = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>{'Cantidad de pasajeros\n'}</h1>
        <Formulario />
      </main>
    </div>
  );
};

export default AddPassanger;
