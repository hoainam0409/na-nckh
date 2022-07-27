import React from 'react'
import styled from 'styled-components';
// import Thongbaocanhan from './Thongbaocanhan';
import Thongbaochung from './Thongbaochung';
import Sidebar from '../../sidebar/SideBar';

const MainDash = styled.div`
// margin-left: ${({ sidebar }) => (sidebar ? '310px' : '0')};
  margin-left: 330px;
`
function Home() {
  return (
    <div>
      <Sidebar></Sidebar>
      <MainDash>
        <Thongbaochung ></Thongbaochung>
        {/* <Thongbaocanhan></Thongbaocanhan> */}

      </MainDash>
    </div>
  )
}

export default Home
