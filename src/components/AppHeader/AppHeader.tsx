import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { logOut } from 'actions';

type Props = {
  user?: any;
  browser?: any;
  attemptLogOut?: Function;
  router?: any;
};

type State = {
  isOpen: boolean;
};

const mapStateToProps = ({ browser, session: { currentUser } }: any) => ({
  browser,
  user: currentUser,
});

const mapDispatchToProps = (
  dispatch: Function,
  { router: { navigate } }: any,
) => ({
  attemptLogOut: async () => {
    try {
      await dispatch(logOut());
    } catch (error) {
      /**/
    }
    navigate('/login');
  },
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export class AppHeader extends Component<Props, State> {
  _element: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this._element = null;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  toggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleDocumentClick = (e: any) => {
    const { isOpen } = this.state;
    if (isOpen) {
      const container = this._element;
      if (
        container &&
        e.target !== container &&
        !container.contains(e.target)
      ) {
        this.toggle();
      }
    }
  };

  onClickLogout = () => {
    const { attemptLogOut } = this.props;
    if (attemptLogOut) {
      attemptLogOut();
    }
  };

  render() {
    const {
      user,
      browser,
      router: {
        location: { pathname },
      },
    } = this.props;
    const { isOpen } = this.state;

    const { first_name: firstName, last_name: lastName } = user || {};
    const fullName =
      lastName !== undefined ? [firstName, lastName].join(' ') : firstName;

    return (
      <header style={{ paddingTop: 56 }} ref={(c) => (this._element = c)}>
        <Navbar color="dark" dark fixed="top" expand="md">
          <NavbarBrand href="/">SysTUP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto w-100" navbar>
              <NavItem>
                <NavLink
                  active={pathname === '/' || pathname === '/pagos'}
                  tag={Link}
                  to="/pagos"
                >
                  Pagos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={pathname === '/alumnos'}
                  tag={Link}
                  to="/alumnos"
                >
                  Alumnos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={pathname === '/pagos/ultimos'}
                  tag={Link}
                  to="/pagos/ultimos"
                >
                  Pagos No Confirmados
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                active={pathname.startsWith('/planillas')}
              >
                <DropdownToggle nav caret>
                  Planillas
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/planillas/sysacad">
                    SysAcad
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/planillas/sysadmin">
                    SysAdmin
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  active={pathname === '/configadmin'}
                  tag={Link}
                  to="/configadmin"
                >
                  Configuraciones
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={pathname === '/useradmin'}
                  tag={Link}
                  to="/useradmin"
                >
                  Usuarios
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={pathname === '/reportes'}
                  tag={Link}
                  to="/reportes"
                >
                  Reportes
                </NavLink>
              </NavItem>
              {browser.greaterThan.small ? (
                <UncontrolledDropdown className="ml-sm-auto" nav inNavbar>
                  <DropdownToggle nav caret>
                    {fullName}
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>Configuración</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onClickLogout}>
                      Cerrar Sessión
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <Fragment>
                  <NavItem>
                    <hr />
                  </NavItem>
                  <NavItem>
                    <NavLink>Configuración</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.onClickLogout}>
                      Cerrar Sessión
                    </NavLink>
                  </NavItem>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
