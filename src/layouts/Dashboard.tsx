import React, { Component, Fragment } from 'react';
import { AppHeader, AppFooter } from 'components';

type Props = {
  children: any;
  router: any;
};

export class DashboardLayout extends Component<Props> {
  render() {
    const { children, router } = this.props;
    return (
      <Fragment>
        <AppHeader router={router} />
        <section className="p-2">{children}</section>
        <AppFooter />
      </Fragment>
    );
  }
}
