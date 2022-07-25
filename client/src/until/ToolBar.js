import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsChevronLeft, BsChevronRight, BsArrowRepeat} from 'react-icons/bs'

const Paging = styled.div`
display: inline-flex;
align-items: center;
`;
const Item = styled.div`
margin: 0 10px 0 0
`
const Item1 = styled.div`
margin: 0 22px 0 0
`
const ToolBar = () => {
  
  return (
      <Row style={{ height: '48px', alignItems: 'center'}}>
        <Col sm ={10}></Col>
        <Col sm={2}>
          <Paging>
            <Item1>1 đến 10 trong số 1</Item1>
            <Item><BsChevronLeft/></Item>
            <Item><BsChevronRight/></Item>
            <Item><BsArrowRepeat/></Item>
          </Paging>
        </Col>
      </Row>
  );
};

export default ToolBar;
