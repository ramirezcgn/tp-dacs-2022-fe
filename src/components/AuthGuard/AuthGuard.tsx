import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserInfo } from 'actions';

type Props = {
  children: any;
  currentUserSlug?: any;
  authOrRedirect?: Function;
  router?: any;
};

type State = {
  loading: boolean;
};

const mapStateToProps = ({ session: { currentUser } }: any) => ({
  currentUserSlug: currentUser.slug,
});

const mapDispatchToProps = (dispatch: Function, { router }: any) => ({
  authOrRedirect: () => {
    return dispatch(getCurrentUserInfo()).catch(() => {
      router.replace('/login');
    });
  },
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export class AuthGuard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = async () => {
    const { authOrRedirect } = this.props;
    let { currentUserSlug: user } = this.props;

    if (!user && authOrRedirect) {
      user = await authOrRedirect();
    }

    if (user) {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="flex h-screen items-center">
          <div className="w-screen text-3xl text-center text-grey">
            Loading...
          </div>
        </div>
      );
    }
    return children;
  }
}
