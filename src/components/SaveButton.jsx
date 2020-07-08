import React from 'react';
import { default as helpers } from '../helpers'
import { Button } from 'react-bootstrap';
import {
  Check,
} from 'react-bootstrap-icons';

export default function SaveButton() {

  return (
    <Button variant="dark" onClick={() => helpers.handleSave()}>
      <Check />
      {' '}
      שמור כתמונה לשיתוף
    </Button>
  );
}