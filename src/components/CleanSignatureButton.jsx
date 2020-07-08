import React from 'react';
import { Button } from 'react-bootstrap';
import {
  X,
} from 'react-bootstrap-icons';

const CleanSignatureButton = (props) => {

  return (
    <Button variant="outline-dark" onClick={()=> props.onClick()}>
      <X />
      {' '}
      נקה חתימה
    </Button>
  );
}

export default CleanSignatureButton;