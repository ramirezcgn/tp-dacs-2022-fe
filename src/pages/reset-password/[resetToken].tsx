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
import { customErrorsMsg } from '_constants';
import { passwordReset } from 'actions';
import { Validator, flattenValidationResults, mapFormElements } from 'utils';
import type { Rules, TestResults } from 'utils';

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

const validations: Rules = {
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
  validator: Validator;

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {
        email: '',
        password: '',
        password_confirmation: '',
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
    const data = mapFormElements(event.target.elements);
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
