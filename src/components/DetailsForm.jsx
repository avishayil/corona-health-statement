import React from 'react';
import {
  Form, Row, Col,
} from 'react-bootstrap';
import {
  CheckCircle,
} from 'react-bootstrap-icons';
import * as qs from 'query-string';

export default function DetailsForm() {
  const query = qs.parse(window.location.search);
  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="frmChildName">
          <Col>
            <Form.Label>שם התלמיד/ה</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: פלוני אלמוני" value={query.childName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="frmChildID">
          <Col>
            <Form.Label>מס׳ תעודת זהות</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: 301234567" value={query.childId} />
          </Col>
        </Form.Group>
        <Row>
          <Col>
            <span style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>אני (החתום מטה) מצהיר כי:</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            מדדתי חום לילד/תי ונמצא כי חום גופו/ה מתחת ל-38 מעלות צלזיוס
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            ילד/תי לא משתעל/ת ואין לו/לה קשיים בנשימה*
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            למיטב ידיעתי ילד/תי לא היה/הייתה במגע קרוב עם חולה קורונה בשבועיים האחרונים
          </Col>
        </Row>

        <Form.Group style={{ marginTop: 20 }} as={Row} controlId="frmParentName">
          <Col>
            <Form.Label>שם ההורה</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: אבא של פלוני" value={query.parentName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="frmParentId">
          <Col>
            <Form.Label>מס׳ תעודת זהות</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: 301234567" value={query.parentId} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="frmDate">
          <Col>
            <Form.Label>תאריך</Form.Label>
            <Form.Control type="text" defaultValue={new Date().toLocaleDateString('he')} />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}