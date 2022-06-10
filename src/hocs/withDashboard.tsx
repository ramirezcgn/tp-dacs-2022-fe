import React, { Component } from 'react';
import { AuthGuard } from 'components';
import { DashboardLayout } from 'layouts';
import { withRouter } from './withRouter';

type Props = {
  router?: any;
};

export const withDashboard = (ContentComponent: any) => {
  class HOC extends Component<Props> {
    render() {
      const { router } = this.props;
      return (
        <AuthGuard router={router}>
          <DashboardLayout router={router}>
            <ContentComponent {...this.props} />
          </DashboardLayout>
        </AuthGuard>
      );
    }
  }

  return withRouter(HOC);
};
