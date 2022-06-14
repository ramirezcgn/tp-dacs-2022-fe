import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

type Props = {
  children: any;
  title: string;
};

export class FormPage extends Component<Props> {
  componentDidMount() {
    document.body.style.background = '#17a2b8';
  }

  componentWillUnmount() {
    document.body.style.background = 'white';
  }

  render() {
    const { children, title } = this.props;
    return (
      <Card className="mx-auto" style={{ width: 540, marginTop: '10%' }}>
        <CardBody>
          <h1 className="text-center text-grey-darkest mb-4">{title}</h1>
          {children}
        </CardBody>
      </Card>
    );
  }
}
