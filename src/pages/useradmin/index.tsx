import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { TableWrapper, Paginator } from 'components';
import {
  Table,
  Button,
  Collapse,
  Form,
  FormGroup,
  Label,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { getUsers, deleteUser } from 'actions/user';
//import { withAsync, Typeahead} from 'react-bootstrap-typeahead';

//const AsyncTypeahead = withAsync(Typeahead);

type Props = {
  attemptGetUsers: Function;
  attemptFindUser: Function;
  attemptDeleteUser: Function;
};

type State = {
  data: any;
  page: number;
  showFilters: boolean;
  loading: boolean;
  isLoading: boolean;
  options: any[];
  filters: {
    username: string;
  };
  isConfirmOpen: boolean;
};

const mapDispatchToProps = (dispatch: Function) => ({
  attemptGetUsers: async (page: number, filters: any, setErrors: Function) => {
    try {
      return await dispatch(getUsers(page, filters));
    } catch (error: any) {
      setErrors(error.response.data);
      return [];
    }
  },
  attemptFindUser: async (query: string, setErrors: Function) => {
    try {
      return await dispatch(getUsers(1, { username: query }));
    } catch (error: any) {
      setErrors(error.response.data);
      return [];
    }
  },
  attemptDeleteUser: async (slug: string, setErrors: Function) => {
    try {
      return await dispatch(deleteUser(slug));
    } catch (error: any) {
      setErrors(error.response.data);
      return [];
    }
  },
});

@(connect(null, mapDispatchToProps) as any)
export default class UsersComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      showFilters: false,
      loading: false,
      isLoading: false,
      options: [],
      filters: {
        username: '',
      },
      isConfirmOpen: false,
    };
  }

  componentDidMount = async () => {
    const { page } = this.state;
    this.getUsers(page);
  };

  getUsers = async (page: number) => {
    const { attemptGetUsers } = this.props;
    const { filters } = this.state;
    this.setState({ loading: true });
    const data = await attemptGetUsers(page, filters, this.setErrors);
    this.setState({ page, data, loading: false });
  };

  handleUpdate = () => {
    const { page } = this.state;
    this.getUsers(page);
  };

  handleConfirm = async (e: any) => {
    const {
      target: {
        dataset: { userSlug },
      },
    } = e;
    const { attemptDeleteUser } = this.props;
    const result = await attemptDeleteUser(userSlug, this.setErrors);
    console.log(result);
    this.toggleConfirm();
    this.handleUpdate();
  };

  setErrors = (errors: any) => {
    // TODO: show error if service fails...
    console.log(errors);
  };

  setSearchErrors = (errors: any) => {
    console.log(errors);
  };

  onSearch = async (query: string) => {
    const { attemptFindUser } = this.props;
    this.setState({ isLoading: true });
    const users = await attemptFindUser(query, this.setSearchErrors);
    if (users && users.data) {
      const options = users.data.map(
        ({ username, firstName, lastName }: any) => {
          return {
            id: username,
            label: `${username} - ${firstName} ${lastName}`,
          };
        },
      );
      this.setState({
        isLoading: false,
        options,
      });
    }
  };

  onChange = (selected: any) => {
    const { id } = selected && selected.length ? selected[0] : { id: '' };
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        username: id,
      },
    }));
  };

  onInputChange = (text: string) => {
    if (text.length !== 0) {
      this.onSearch(text);
    }
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        username: text,
      },
    }));
  };

  onSetFilters = (event: any) => {
    event.preventDefault();
    const { page } = this.state;
    this.getUsers(page);
  };

  toggleFilters = () => {
    const {
      page,
      showFilters,
      filters: { username },
    } = this.state;
    this.setState(
      {
        showFilters: !showFilters,
        filters: {
          username: showFilters ? '' : username,
        },
      },
      () => {
        if (showFilters && username) {
          this.getUsers(page);
        }
      },
    );
  };

  toggleConfirm = () => {
    this.setState(({ isConfirmOpen }) => ({
      isConfirmOpen: !isConfirmOpen,
    }));
  };

  render() {
    const { data, showFilters, loading, isConfirmOpen } = this.state;
    const { data: users } = data;
    return (
      <Fragment>
        <Head>
          <title>Proyecto Habilitacion - Usuarios</title>
        </Head>
        <div className="panel-heading">
          <div className="pull-right">
            <Button onClick={this.toggleFilters}>
              <i className="fa fa-filter" /> Filtros
            </Button>
          </div>
          <h3>Usuarios</h3>
        </div>
        <Collapse isOpen={showFilters}>
          <Form onSubmit={this.onSetFilters}>
            <Table>
              <tbody>
                <tr className="filters">
                  <th>
                    <FormGroup>
                      <Label for="filter-from">Usuario</Label>
                    </FormGroup>
                  </th>
                  <th>
                    <FormGroup>
                      <Label>&nbsp;</Label>
                      <div>
                        <Button color="secondary" type="submit">
                          Filtrar
                        </Button>
                      </div>
                    </FormGroup>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Collapse>
        {loading ? (
          <Spinner
            className="loading-spinner"
            animation="border"
            role="status"
          />
        ) : Array.isArray(users) && users.length ? (
          <Fragment>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>UserName</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.slug}>
                      <td>{user.username}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td className="text-center">
                        <Button
                          color=""
                          title="Eliminar Usuario"
                          disabled={user.username === 'admin'}
                          onClick={this.toggleConfirm}
                        >
                          <i className="fa fa-trash" />
                        </Button>
                        <Modal
                          isOpen={isConfirmOpen}
                          toggle={this.toggleConfirm}
                        >
                          <ModalHeader toggle={this.toggleConfirm}>
                            Confirmar Eliminar Usuario
                          </ModalHeader>
                          <ModalBody>
                            ¿Está seguro que desea eliminar el usuario &quot;
                            {user.username}&quot;?
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="secondary"
                              data-user-slug={user.slug}
                              onClick={this.handleConfirm}
                            >
                              Confirmar
                            </Button>
                            <Button
                              color="primary"
                              onClick={this.toggleConfirm}
                            >
                              Cancelar
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
            <Paginator data={data} callback={this.getUsers} />
          </Fragment>
        ) : (
          <div>No se encontraron resultados</div>
        )}
      </Fragment>
    );
  }
}
