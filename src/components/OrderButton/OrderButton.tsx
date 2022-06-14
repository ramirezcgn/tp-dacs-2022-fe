import React, { Component } from 'react';

type Props = {
  name: string;
  current: string;
  direction: string;
  onClick: Function;
  children: any;
};

type State = {
  direction: string;
};

export class OrderButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { direction } = props;
    this.state = {
      direction: direction || 'asc',
    };
  }

  onClick = (e: any) => {
    e.preventDefault();
    const { current, name, onClick } = this.props;
    const { direction } = this.state;
    const newDirection =
      current === name && direction === 'asc' ? 'desc' : 'asc';
    this.setState({ direction: newDirection });
    if (onClick) {
      onClick(name, newDirection);
    }
  };

  render() {
    const { current, name, children } = this.props;
    const { direction } = this.state;
    const selected = current === name ? 'selected ' : '';
    return (
      <a href="#" className="order_button" onClick={this.onClick}>
        {children}
        <span className={'fa ' + selected + direction} />
      </a>
    );
  }
}
