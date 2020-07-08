import React, { Component } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import {
  Form, Row, Col,
} from 'react-bootstrap';

export default class SignPad extends Component {

  componentDidMount() {
    this.props.setRef(this.signaturePad);
  }
 
  render() {
    return (
      <div className="columns">
        <div className="column">
          <Form.Group as={Row} controlId="frmDate">
            <Col>
              <Form.Label>חתימת ההורה</Form.Label>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <SignaturePad
                      redrawOnResize
                      ref={(ref) => this.signaturePad = ref}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Form.Group>
        </div>
      </div>
    );
  }
}
