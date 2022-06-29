import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {FaCube} from 'react-icons/fa'


 export const SidebarData =

    [{
      title: 'Thông báo - Thông tin',
      path: '/nckh/dashboard',
      icon: <FaCube style ={{color: 'black'}}/>,
    },
    {
      title: 'Quản lý thông tin cá nhân',
      path: '/nckh/thongtin-canhan',
      icon: <FaCube style ={{color: 'black'}}/>,
    },
    {
      title: 'Đợt đăng ký đề tài NCKH',
      path: '/nckh/dotdangky-detai',
      icon: <FaCube style ={{color: 'black'}}/>
    },
    {
      title: 'Đề tài NCKH cán bộ',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
  
      subNav: [
        {
          title: 'Đăng ký',
          path: '/detai-canbo/dangky',
          icon: <FaCube style ={{color: 'black'}}/>,
          cName: 'sub-nav'
        },
        {
          title: 'Đề tài chờ duyệt cấp khoa',
          path: '/detai-canbo/cho-duyet-cap-khoa',
          icon: <FaCube style ={{color: 'black'}}/>,
          cName: 'sub-nav'
        },
        {
          title: 'Nhập kết quả đánh giá đề tài',
          path: '/detai-canbo/nhap-ket-qua-danh-gia',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Đề tài chờ duyệt cấp trường',
          path: '/detai-canbo/cho-duyet-cap-truong',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Nhập kết quả nghiệm thu',
          path: '/detai-canbo/nhap-ket-qua-nghiem-thu',
          icon: <FaCube style ={{color: 'black'}}/>
        }
      ]
    },
    {
      title: 'Đề tài NCKH sinh viên',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
  
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
  
      subNav: [
        {
          title: 'Đăng ký',
          path: '/nckh/detai-sinhvien/dangky',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Phân công GV hướng dẫn',
          path: '/nckh/detai-sinhvien/xacnhan',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Đề tài chờ duyệt',
          path: '/nckh/detai-sinhvien/choduyet',
          icon: <FaCube style ={{color: 'black'}}/>
        }, 
        {
          title: 'Tiểu ban nghiệm thu',
          path: '/nckh/detai-sinhvien/tieuban-nghiemthu',
          icon: <FaCube style ={{color: 'black'}}/>
        }
      ]
    },
    {
      title: 'Quản lý thông báo',
      path: '/nckh/quanly-thongbao',
      icon: <FaCube style ={{color: 'black'}}/>,
    },
    {
      title: 'Quản lý danh mục',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
  
      subNav: [
        {
          title: 'Loại đề tài',
          path: '/danhmuc/loaidetai',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Cấp đề tài',
          path: '/danhmuc/capdetai',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Lĩnh vực nghiên cứu',
          path: '/danhmuc/linhvuc',
          icon: <FaCube style ={{color: 'black'}}/>
        },
        {
          title: 'Vai trò hội đồng',
          path: '/danhmuc/vaitro-thamgia',
          icon: <FaCube style ={{color: 'black'}}/>
        }
      ]
    },
    {
      title: 'Quản trị hệ thống',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
      subNav: [
        {
          title: 'Quản lý người dùng',
          path: '/nckh/admin/quanly-nguoidung',
          icon: <FaCube style ={{color: 'black'}}/>
        },
      ]
    }
  ]
 