import React, { PureComponent } from 'react';
import { default as components } from './components';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import is from 'is_js';
import { ToastContainer } from 'react-toastify';
import { default as helpers } from './helpers'
import 'react-toastify/dist/ReactToastify.css';

class App extends PureComponent {

  setSignPadRef = SignPad => this.signPad = SignPad

  componentDidMount() {
    this.isSafari = is.safari();
    if (this.isSafari) {
      helpers.notify("התגלה דפדפן ספארי. אנא שלח את העמוד להדפסה ובחר באפשרות שמירה כ-PDF")
    }
  }

  render() {
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <section className="section">
            <div className="container" id="toSave">
              <components.Title />
              <components.DetailsForm />
              <components.SignPad setRef={this.setSignPadRef} />
              <components.Clarifications />
            </div>
            <div className="container">
              <components.Footer isSafari={this.isSafari} clear={() => this.signPad.instance.clear()} />
            </div>
          </section>
          <ToastContainer />
        </div>
      </DirectionProvider>
    );
  }
}

export default App;
