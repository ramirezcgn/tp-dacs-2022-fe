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
  Row,
  Col,
  Alert,
} from 'reactstrap';
import { signUp } from 'actions';
import { customErrorsMsg } from '_constants';
import { Validator, flattenValidationResults, mapFormElements } from 'utils';
import type { Rules, TestResults } from 'utils';

type Props = {
  submitSignUp: Function;
};

type State = {
  errors: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    unknown: string;
  };
};

const validations: Rules = {
  username: {
    type: 'username',
    validations: ['required'],
  },
  email: {
    type: 'email',
    validations: ['required'],
  },
  password: {
    type: 'password',
    validations: ['required'],
  },
  password_confirmation: {
    type: 'password',
    validations: ['required', 'equal:password'],
  },
};

const validationResults: TestResults = {
  username: {
    name: 'Usuario',
    error: '',
  },
  email: {
    name: 'Email',
    error: '',
  },
  password: {
    name: 'Contraseña',
    error: '',
  },
  password_confirmation: {
    name: 'Confirmar Contraseña',
    error: '',
  },
};

const mapDispatchToProps = (dispatch: Function, { router }: any) => ({
  submitSignUp: async (signUpDetails: any, setErrors: Function) => {
    try {
      await dispatch(signUp(signUpDetails));
      router.push('/');
    } catch (error: any) {
      setErrors(error.response.data);
    }
  },
});

@(compose(
  withRouter,
  withFormPage('Crear Cuenta'),
  connect(null, mapDispatchToProps),
) as any)
export default class SignUpPage extends Component<Props, State> {
  validator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        unknown: '',
      },
    };
    this.validator = new Validator(validations, customErrorsMsg);
  }

  validate = (values: any = {}) => {
    let errors: any = {};
    let valid = true;

    if (!this.validator.validate(values, validationResults)) {
      errors = flattenValidationResults(validationResults);
      valid = false;
    }

    this.setState({ errors });
    return valid;
    /*const errors: any = {};

    if (!values.name) {
      errors.name = 'Este campo es requerido';
    } else if (!usernameRegex.test(values.name)) {
      errors.name = 'Nombre de usuario inválido';
    }

    if (!values.email) {
      errors.email = 'Este campo es requerido';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Dirección de correo inválida';
    }

    if (!values.password) {
      errors.password = 'Este campo es requerido';
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = 'Este campo es requerido';
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Las contraseñas no coinciden';
    }

    this.setState({ errors });

    return !Object.keys(errors).length;*/
  };

  setErrors = (response: any) => {
    let newErrors: any = {};
    const { errors, message } = response;
    if (errors) {
      newErrors = errors;
    } else {
      newErrors.unknown = message;
    }
    this.setState({ errors: newErrors });
  };

  doSubmit = (event: any) => {
    event.preventDefault();
    const { submitSignUp } = this.props;
    const data = mapFormElements(event.target.elements);
    if (this.validate(data)) {
      submitSignUp(data, this.setErrors);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.doSubmit}>
        <FormGroup>
          <Label for="name">Nombre de Usuario</Label>
          <Input type="text" name="name" id="name" invalid={!!errors.name} />
          {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="email">Dirección de Email</Label>
          <Input type="text" name="email" id="email" invalid={!!errors.email} />
          {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            name="password"
            id="password"
            invalid={!!errors.password}
          />
          {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="password_confirmation">Confirme su contraseña</Label>
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            invalid={!!errors.password_confirmation}
          />
          {errors.password_confirmation && (
            <FormFeedback>{errors.password_confirmation}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Row>
            {errors.unknown && (
              <Col xs="12">
                <Alert data-error={errors.unknown} color="danger">
                  Ocurrió un error al intentar crear el usuario, disculpe el
                  inconveniente.
                </Alert>
              </Col>
            )}
            <Col xs="12">
              <Link href="/login">Iniciar Sesión</Link>
            </Col>
            <Col xs="12" className="text-end">
              <Button type="submit">Registrarse</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}
