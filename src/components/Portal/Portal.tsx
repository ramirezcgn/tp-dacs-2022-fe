import { Component } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  name: string;
  children: any;
};

type State = {
  element: any;
};

export class Portal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { name } = props;
    this.state = {
      element: document.getElementById(name),
    };
  }

  componentDidMount() {
    const { name } = this.props;
    let { element } = this.state;
    if (!element) {
      element = document.getElementById(name);
      this.setState({
        element,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { element } = this.state;
    if (!element) {
      return null;
    }
    return ReactDOM.createPortal(children, element);
  }
}
