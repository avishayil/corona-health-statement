import React from 'react';
import { PencilSquare } from 'react-bootstrap-icons';

export default function Title() {

  return (
    <div className="columns">
      <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 className="title" style={{ marginBottom: 20 }}>
          <PencilSquare />
          {' '}
          הצהרת בריאות
        </h1>
      </div>
    </div>
  );
}