import React from 'react';
import { connect } from 'react-redux'
import { updateChildName, updateChildId, updateParentName, updateParentId } from '../actions'
import {
  Form, Row, Col,
} from 'react-bootstrap';
import {
  CheckCircle,
} from 'react-bootstrap-icons';

const DetailsForm = props => {
  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="frmChildName">
          <Col>
            <Form.Label>שם התלמיד/ה</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: פלוני אלמוני" defaultValue={props.childName} onChange={event => props.updateChildName(event.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="frmChildID">
          <Col>
            <Form.Label>מס׳ תעודת זהות</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: 301234567" defaultValue={props.childId} onChange={event => props.updateChildId(event.target.value)} />
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
            מדדתי חום לילדי/ילדתי בסמוך ליציאתו/ה למוסד החינוכי ונמצא כי חום גופו/ה מתחת ל 38 מעלות צלזיוס.
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            ילדי/ילדתי לא משתעל/ת ואין לו/לה קשיי נשימה, למעט שיעול או קושי בנשימה הנובע ממצב כרוני כגון אסטמה או אלרגיה. לעניין זה נזלת בלבד לא תחשב כתסמין
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            למיטב ידיעתי אין לילדי/תי שינוי בחוש הטעם או בחוש הריח
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            למיטב ידיעתי ילדי/תי לא היה/תה במגע הדוק עם חולה קורונה בשבועיים האחרונים
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            למיטב ידיעתי לילדי/תי לא היה חום גוף מעל 38 מעלות צלזיוס ב-48 השעות האחרונות
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCircle />
            {' '}
            ילדי/תי לא היה/תה ב 14 הימים האחרונים במדינה שהחוזרים ממנה מחוייבים בבידוד
          </Col>
        </Row>
        <Row>
          <Col>
            {' '}
            <i>* בכפוף תקנות סמכויות מיוחדות להתמודדות עם נגיף הקורונה החדש (הוראת שעה) (הגבלת פעילות של מוסדות ללימוד חובה), תש"ף-2020</i>
          </Col>
        </Row>
        <Form.Group style={{ marginTop: 20 }} as={Row} controlId="frmParentName">
          <Col>
            <Form.Label>שם ההורה</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: אבא של פלוני" defaultValue={props.parentName} onChange={event => props.updateParentName(event.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="frmParentId">
          <Col>
            <Form.Label>מס׳ תעודת זהות</Form.Label>
            <Form.Control type="text" placeholder="לדוגמא: 301234567" defaultValue={props.parentId} onChange={event => props.updateParentId(event.target.value)} />
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateChildName: text => dispatch(updateChildName(text)),
  updateChildId: text => dispatch(updateChildId(text)),
  updateParentName: text => dispatch(updateParentName(text)),
  updateParentId: text => dispatch(updateParentId(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsForm)