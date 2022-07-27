import React from 'react'
// import Thongbaocanhan from './Thongbaocanhan';
import Thongbaochung from './Thongbaochung';
import SideBar from '../../sidebar/SideBar';

function Home() {
  return (
    <div>
      <SideBar/>
      <div className='style-mainpage'>
        <Thongbaochung ></Thongbaochung>
        {/* <Thongbaocanhan></Thongbaocanhan> */}
      </div>
    </div>
  )
}

export default Home
