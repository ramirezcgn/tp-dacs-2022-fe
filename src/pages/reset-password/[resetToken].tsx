import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormPage, withRouter } from 'hocs';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { emailRegex } from '_constants';
import { passwordReset } from 'actions';

type Props = {
  submitPasswordReset: Function;
};

type State = {
  errors: {
    email: string;
    password: string;
    password_confirmation: string;
  };
};

const mapDispatchToProps = (dispatch: Function, { router }: any) => ({
  submitPasswordReset: async (values: any, setErrors: Function) => {
    try {
      await dispatch(passwordReset(values, router.query.resetToken));
      router.push('/login');
    } catch (error: any) {
      setErrors(error.response.data);
    }
  },
});

@(compose(
  withRouter,
  withFormPage('Restablecer Contaseña'),
  connect(null, mapDispatchToProps),
) as any)
export default class PasswordResetComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        email: '',
        password: '',
        password_confirmation: '',
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

    if (!values.password) {
      errors.password = 'Este campo es requerido';
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = 'Este campo es requerido';
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Las contraseñas no coinciden';
    }

    this.setState({ errors });

    return !Object.keys(errors).length;
  };

  setErrors = (data: any) => {
    const errors: any = {};
    if (data.errors && data.errors.password) {
      errors.password = data.errors.password;
    }
    this.setState({ errors });
  };

  doSubmit = (event: any) => {
    event.preventDefault();
    const { submitPasswordReset } = this.props;
    const data = Object.fromEntries(
      Array.from(event.target.elements)
        .filter((item: any) => item.name)
        .map((item: any) => [item.name, item.value]),
    );
    if (this.validate(data)) {
      submitPasswordReset(data, this.setErrors);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Form onSubmit={this.doSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            invalid={!!errors.email}
          />
          {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Ingrese una nueva contraseña</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            invalid={!!errors.password}
          />
          {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="password_confirmation">
            Confirme su nueva contraseña
          </Label>
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="password"
            invalid={!!errors.password_confirmation}
          />
          {errors.password_confirmation && (
            <FormFeedback>{errors.password_confirmation}</FormFeedback>
          )}
        </FormGroup>
        <Button className="float-right" type="submit">
          Establecer nueva contraseña
        </Button>
      </Form>
    );
  }
}
