import React from 'react';
import { connect } from 'react-redux'
import { default as helpers } from '../helpers'
import { Button } from 'react-bootstrap';
import {
  Check,
} from 'react-bootstrap-icons';

const CreateLinkButton = props => {

  return (
    <Button variant="dark" onClick={() => helpers.createLink({
      childName: props.childName,
      childId: props.childId,
      parentName: props.parentName,
      parentId: props.parentId
    })}>
      <Check />
      {' '}
      צור קישור קבוע
    </Button>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateLinkButton)