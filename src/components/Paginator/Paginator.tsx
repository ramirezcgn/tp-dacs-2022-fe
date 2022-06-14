import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

type Props = {
  data: any;
  callback: Function;
};

export class Paginator extends Component<Props> {
  render() {
    /* eslint-disable camelcase */
    const { data, callback } = this.props;
    const { current_page, last_page } = data;
    const first_page = 1;
    const pagination = [];
    for (let i = first_page; i <= last_page; i++) {
      pagination.push(
        <PaginationItem key={i} active={i === current_page}>
          <PaginationLink
            onClick={() => {
              if (i !== current_page) {
                callback(i);
              }
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return (
      <Pagination
        aria-label="Page navigation example"
        style={{ justifyContent: 'center' }}
      >
        <PaginationItem disabled={current_page === first_page}>
          <PaginationLink first onClick={() => callback(first_page)} />
        </PaginationItem>
        <PaginationItem disabled={current_page - 1 < first_page}>
          <PaginationLink previous onClick={() => callback(current_page - 1)} />
        </PaginationItem>
        {pagination}
        <PaginationItem disabled={current_page + 1 > last_page}>
          <PaginationLink next onClick={() => callback(current_page + 1)} />
        </PaginationItem>
        <PaginationItem disabled={current_page === last_page}>
          <PaginationLink last onClick={() => callback(last_page)} />
        </PaginationItem>
      </Pagination>
    );
    /* eslint-enable camelcase */
  }
}
