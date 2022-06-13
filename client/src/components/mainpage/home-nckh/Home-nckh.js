import React from 'react'
import styled from 'styled-components';
import Thongbaocanhan from './Thongbaocanhan';
import Thongbaochung from './Thongbaochung';


const MainDash = styled.div`
// margin-left: ${({ sidebar }) => (sidebar ? '310px' : '0')};
  margin-left: 310px;
`
function Home() {
  return (
    <div>
      <MainDash>
        <Thongbaochung ></Thongbaochung>
        <Thongbaocanhan></Thongbaocanhan>

      </MainDash>
    </div>
  )
}

export default Home
