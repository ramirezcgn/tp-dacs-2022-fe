import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormPage, withRouter } from 'hocs';
import Link from 'next/link';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { customErrorsMsg } from '_constants';
import { logIn } from 'actions';
import { Validator, mapFormElements } from 'utils';
import type { Rules, TestResults } from 'utils';

type Props = {
  attemptLogin: Function;
};

type State = {
  errors: {
    username: string;
    password: string;
  };
};

const validations: Rules = {
  username: {
    name: 'Usuario',
    type: 'username',
    validations: ['required'],
  },
  password: {
    name: 'Contraseña',
    type: 'password',
    validations: ['required'],
  },
};

const validationResults: TestResults = {
  username: '',
  password: '',
};

const mapDispatchToProps = (dispatch: Function, { router }: any) => ({
  attemptLogin: async (loginDetails: any, setErrors: Function) => {
    try {
      await dispatch(logIn(loginDetails));
      router.push('/');
    } catch (error: any) {
      setErrors(error.response.data);
    }
  },
});

@(compose(
  withRouter,
  withFormPage('Iniciar Sesión'),
  connect(null, mapDispatchToProps),
) as any)
export default class LogInComponent extends Component<Props, State> {
  validator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        username: '',
        password: '',
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
      errors.username = 'Credenciales de acceso inválidas';
    }
    this.setState({ errors });
  };

  doSubmit = (event: any) => {
    event.preventDefault();
    const { attemptLogin } = this.props;
    const data = mapFormElements(event.target.elements);
    if (this.validate(data)) {
      attemptLogin(data, this.setErrors);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.doSubmit}>
        <FormGroup>
          <Label for="username">Usuario</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="usuario"
            invalid={!!errors.username}
          />
          {errors.username && <FormFeedback>{errors.username}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="contraseña"
            invalid={!!errors.password}
          />
          {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xs="12">
              ¿No tiene cuenta?{' '}
              <Link color="secondary" href="/signup">
                Regístrese!
              </Link>
            </Col>
            <Col xs="12" className="pt-2">
              <Link color="secondary" href="/forgot-password">
                Olvidé mi contraseña
              </Link>
            </Col>
            <Col xs="12" className="text-end">
              <Button type="submit">Iniciar Sesión</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}
