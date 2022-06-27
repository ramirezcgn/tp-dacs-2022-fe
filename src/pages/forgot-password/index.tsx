import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormPage, withRouter } from 'hocs';
import Link from 'next/link';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { customErrorsMsg } from '_constants';
import { forgotPassword } from 'actions';
import { Validator, mapFormElements } from 'utils';
import type { Rules, TestResults } from 'utils';

type Props = {
  submitForgotPassword: Function;
};

type State = {
  errors: {
    email: string;
  };
};

const validations: Rules = {
  email: {
    name: 'Email',
    type: 'email',
    validations: ['required'],
  },
};

const validationResults: TestResults = {
  email: '',
};

const mapDispatchToProps = (dispatch: Function, { router }: any) => ({
  submitForgotPassword: async (values: any, setErrors: Function) => {
    try {
      await dispatch(forgotPassword(values));
      router.push('/login');
    } catch (error: any) {
      setErrors(error.response.data);
    }
  },
});

@(compose(
  withRouter,
  withFormPage('Olvidé mi Contraseña'),
  connect(null, mapDispatchToProps),
) as any)
export default class ForgotPasswordComponent extends Component<Props, State> {
  validator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        email: '',
      },
    };
    this.validator = new Validator(validations, customErrorsMsg);
  }

  validate = (values: any = {}) => {
    let errors: any = {};
    let valid = true;

    if (!this.validator.validate(values, validationResults)) {
      errors = validationResults;
      valid = false;
    }

    this.setState({ errors });
    return valid;
  };

  setErrors = (response: any) => {
    const errors: any = {};
    if (
      response.errors === true &&
      response.message === 'Incorrect login details'
    ) {
      errors.email = 'Datos de acceso incorrectos';
    }
    this.setState({ errors });
  };

  doSubmit = async (event: any) => {
    event.preventDefault();
    const { submitForgotPassword } = this.props;
    const data = mapFormElements(event.target.elements);
    if (this.validate(data)) {
      submitForgotPassword(data, this.setErrors);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.doSubmit}>
        <FormGroup>
          <Label for="recover-email">Ingrese su dirección de Email</Label>
          <Input
            type="text"
            name="email"
            id="recover-email"
            placeholder="Email"
            invalid={!!errors.email}
          />
          {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Button className="ml-auto" type="submit">
            Continuar
          </Button>
        </FormGroup>
        <Link href="/login">Volver al Inicio de Sesión</Link>
      </Form>
    );
  }
}
