import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { PortalContainer } from '../PortalContainer/PortalContainer';

type State = {
  extraHeight: number;
};

type Props = {};

export class AppFooter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      extraHeight: 0,
    };
  }

  onContentChange = (current: any) => {
    const { clientHeight } = current;
    this.setState({
      extraHeight: clientHeight,
    });
  };

  render() {
    const { extraHeight } = this.state;
    const customStyle: any = {};
    if (extraHeight) {
      customStyle.paddingTop = extraHeight;
    }
    return (
      <footer style={customStyle} className="footer">
        <div className="fixed-footer">
          <Container fluid className="extra">
            <Row>
              <PortalContainer
                name="footer-left"
                className="col-6"
                onContentChange={this.onContentChange}
              />
              <PortalContainer
                name="footer-right"
                className="col-6"
                onContentChange={this.onContentChange}
              />
            </Row>
          </Container>
          <div className="copyright">
            <Container className="text-center">
              <span className="text-muted">
                © 2020 Copyright:&nbsp;
                <a href="">SysTUP - 2020</a>
              </span>
            </Container>
          </div>
        </div>
      </footer>
    );
  }
}
