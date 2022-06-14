/*
export type FormParams = {
  [key: string]: any;
};

export type Validation = {
  type: string;
  error: string;
};

export type ItemError = {
  title: string;
  type: string;
  error: string;
  validations: string[];
};

export type FormErrors = {
  [key: string]: ItemError;
};

export type Validations = {
  [key: string]: ItemError;
};

export const validate = (
  items: FormParams,
  errors: FormErrors,
  reset?: boolean,
) => {
  const currentErrors = { ...errors };
  Object.entries(currentErrors).forEach(([name, rule]) => {
    const item = items[name];
    if (reset) {
      item.error = '';
      return;
    }
    switch (rule.type) {
      case 'array':
        if (!items[name].length) {
          item.error = `${rule.title} is required`;
        } else {
          item.error = '';
        }
        break;
      case 'email':
      case 'username':
        if (!items[name]) {
          current.error = `${current.title} is required`;
        } else if (
          !emailRegex.test(items[name]) ||
          !usernameRegex.test(items[name])
        ) {
          current.error = `${current.title} is invalid`;
        } else {
          current.error = '';
        }
        break;
      default:
        if (!items[name]) {
          current.error = `${current.title} is required`;
        } else {
          current.error = '';
        }
        break;
    }
  });
  return Object.values(currentErrors).every(({ error }) => !error);
};

const initialErrors: Validations = {
  firstName: {
    title: 'First name',
    type: 'text',
    validations: [
      'required',
      'min: 5',
      'max: 9',
      'regex: ',
      'equal: ',
    ],
  },
  lastName: {
    title: 'Last name',
    type: 'text',
    validations: [{
      rule: 'minLength',
      value: 3,
      error:
    }],
  },
  email: {
    title: 'Email Address',
    type: 'email',
    validations: [{
      type: string;
      error: string;
    }],
  },
  euResident: {
    title: 'EU Resident',
    type: 'text',
    validations: [

    ],
  },
  fieldName: {
    title: 'At least one checkbox selected',
    type: 'array',
    validations: [

    ],
  },
};
*/

import { Validator } from './validator';
import type { Rules, TestValues } from './validator';

const testValidations: Rules = {
  text: {
    type: 'text',
    validations: ['required'],
  },
  minText: {
    type: 'text',
    validations: ['required', 'min:3'],
  },
  maxText: {
    type: 'text',
    validations: ['required', 'max:10'],
  },
  betweenText: {
    type: 'text',
    validations: ['required', 'between:3:10'],
  },
  email: {
    type: 'email',
    validations: ['required'],
  },
  number: {
    type: 'number',
    validations: ['required'],
  },
  minNumber: {
    type: 'number',
    validations: ['required', 'min:3'],
  },
  maxNumber: {
    type: 'number',
    validations: ['required', 'max:10'],
  },
  betweenNumber: {
    type: 'number',
    validations: ['required', 'between:3:10'],
  },
};

const testValues: TestValues = {
  text: 'hola',
  minText: 'chau',
  maxText: 'asdf',
  betweenText: 'asdf',
  email: 'asdf',
  number: '11',
  minNumber: '11',
  maxNumber: '11',
  betweenNumber: '11',
};

const v = new Validator(testValidations);
console.log(v.validate(testValues));
