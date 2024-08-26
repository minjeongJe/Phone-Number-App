import React,{ useState } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
  let [keyword, setkeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword }});
  }

  return (
    <Form onSubmit={searchByName}>
      <Row>
          <Col className='search-area'> 
              <Form.Control 
              type="text"
               placeholder="이름 입력" 
               onChange={(event) => setkeyword(event.target.value)}
              />
              <Button type="submit">찾기</Button>
          </Col>
      </Row>
    </Form>
  );
};

export default SearchBox
