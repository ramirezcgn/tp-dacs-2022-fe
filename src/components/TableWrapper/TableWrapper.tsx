import React, { Component } from 'react';

type Props = {
  children: any;
};

export class TableWrapper extends Component<Props> {
  render() {
    const { children } = this.props;
    return <div style={{ overflowX: 'auto' }}>{children}</div>;
  }
}
