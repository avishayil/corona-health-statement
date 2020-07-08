import React from 'react';
import CleanSignatureButton from './CleanSignatureButton';
import SaveButton from './SaveButton';
import CreateLinkButton from './CreateLinkButton';

const Footer = props => {

  return (
    <div className="columns" style={{ marginTop: 20, marginBottom: 20 }}>
      <div className="column" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CleanSignatureButton onClick={() => props.clear()} />
        {!props.isSafari ?
          <SaveButton />
          : null}
      </div>
      <div className="column" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <CreateLinkButton />
      </div>
    </div>
  );
}

export default Footer;