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
import { emailRegex } from '_constants';
import { forgotPassword } from 'actions';

type Props = {
  submitForgotPassword: Function;
};

type State = {
  errors: {
    email: string;
  };
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
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        email: '',
      },
    };
  }

  validate = (values: any = {}) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = 'Este campo es requerido';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Dirección de correo inválida';
    }

    this.setState({ errors });

    return !Object.keys(errors).length;
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
    const data = Object.fromEntries(
      Array.from(event.target.elements)
        .filter((item: any) => item.name)
        .map((item: any) => [item.name, item.value]),
    );
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
