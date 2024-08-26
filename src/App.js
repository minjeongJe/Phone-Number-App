import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import store from './redux/store';


// 1. 유저는 연락처를 생성할 수 있다.
// 2. 연락처에는 이름과 전화번호 정보가 필요하다.
// 3. 유저는 연락처 리스트를 볼 수 있다.
// 4. 유저는 이름으로 연락처를 검색할 수 있다.

function App() {
  return (
    <div className='container-phoneNumber'>
      <h1 className='title'>연락처</h1>
      <Container className='container-items'>
        <Row>
          <Col className='add-container'>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
