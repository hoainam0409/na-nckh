import styled from "styled-components";
import {BsChevronLeft, BsChevronRight, BsArrowRepeat, BsGearFill} from 'react-icons/bs'

const Paging = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
`;
const Item = styled.div`
margin: 0 10px 0 0
`
const Item1 = styled.div`
margin: 0 22px 0 0
`
const ToolBar = () => {
  
  return (
        <div style={{float: 'right'}}>
          <Paging>
            <Item1>1 đến 10 trong số 1</Item1>
            <Item><BsChevronLeft/></Item>
            <Item><BsChevronRight/></Item>
            <Item><BsArrowRepeat/></Item>
            <Item><BsGearFill/></Item>
          </Paging>
        </div>
  );
};

export default ToolBar;
