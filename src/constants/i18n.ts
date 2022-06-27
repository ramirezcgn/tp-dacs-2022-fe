import type { ErrorMessages } from 'utils';

export const customErrorsMsg: ErrorMessages = {
  between: {
    text: 'El campo :field debe contener un mínimo de :min y un máximo de :max caracteres',
    number: 'El campo :field debe ser un número entre :min y :max',
    file: 'El campo :field espera que el número de archivos seleccionados esté entre :min y :max',
    array: 'Debe seleccionar un mínimo de :min y un máximo de :max opciones',
  },
  custom: 'El campo :field no coincide con la validación personalizada',
  equal: 'El campo :field debe ser igual al campo :other',
  file: 'El campo :field tiene una o varias propiedades no válidas (extensión/tamaño/tipo, etc.)',
  max: {
    text: 'El campo :field debe contener un máximo de :max caracteres',
    number: 'El campo :field debe ser un número menor o igual que :max',
    file: 'El campo :field espera que el número de archivos seleccionados sea menor o igual que :max',
    array: 'Puede seleccionar un máximo de :max opciones',
  },
  min: {
    text: 'El campo :field debe contener un mínimo de :min caracteres',
    number: 'El campo :field debe ser un número mayor o igual a :min',
    file: 'El campo :field espera que el número de archivos seleccionados sea mayor o igual que :min',
    array: 'Debes seleccionar un mínimo de :min opciones',
  },
  regex: 'El campo :field no coincide con el patrón requerido',
  required: {
    array: 'Debe seleccionar al menos una opción',
    default: 'El campo :field es obligatorio',
  },
  valid: {
    email: 'El campo :field tiene un formato de correo electrónico no válido',
    password:
      'El campo :field debe contener un mínimo de ocho caracteres, al menos una letra y un número',
    username: 'El campo :field tiene un formato de nombre de usuario no válido',
    number: 'El campo :field debe ser un número',
    default: 'El campo :field es inválido',
  },
};
