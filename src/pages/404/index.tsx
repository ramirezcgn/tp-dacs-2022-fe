import React, { Component } from 'react';
import Link from 'next/link';

export default class NotFoundComponent extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-wrap text-center text-grey-darkest mt-20">
        <h1 className="text-10xl text-grey-light font-light">404</h1>
        <h2 className="w-full mb-4">
          No pudimos encontrar la página que estás buscando.
        </h2>
        <div>
          Haz Click <Link href="/">aquí</Link> para volver al inicio.
        </div>
      </div>
    );
  }
}
