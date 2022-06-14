import React, { Component } from 'react';

type Props = {
  name: string;
  className?: any;
  style?: any;
  ref?: any;
  onContentChange?: Function;
};

export class PortalContainer extends Component<Props> {
  ref: any;
  observer: any;

  constructor(props: Props) {
    super(props);
    const { ref } = this.props;
    this.ref = ref || React.createRef();
  }

  componentDidMount() {
    const { onContentChange } = this.props;
    const { current } = this.ref;
    if (onContentChange && current) {
      this.observer = new MutationObserver((mutations) =>
        onContentChange(current, mutations),
      );
      this.observer.observe(current, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
      });
    }
  }

  componentWillUnmount() {
    const { onContentChange } = this.props;
    if (onContentChange && this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const { name, className, style } = this.props;
    return <div id={name} className={className} style={style} ref={this.ref} />;
  }
}
