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
      path: '/detai/dotdangky',
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
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>,
          cName: 'sub-nav'
        },
        {
          title: 'Đề tài đã gửi duyệt',
          path: '/detai-canbo/tat-ca-de-tai',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>,
          cName: 'sub-nav'
        },
        {
          title: 'Đề tài chờ duyệt cấp khoa',
          path: '/detai-canbo/cho-duyet-cap-khoa',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>,
          cName: 'sub-nav'
        },
        {
          title: 'Nhập kết quả đánh giá đề tài',
          path: '/detai-canbo/nhap-ket-qua-danh-gia',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Đề tài chờ duyệt cấp trường',
          path: '/detai-canbo/cho-duyet-cap-truong',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Đề tài chờ duyệt nghiệm thu  ',
          path: '/detai-canbo/duyet-nghiem-thu',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Nhập kết quả nghiệm thu',
          path: '/detai-canbo/nhap-ket-qua-nghiem-thu',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Đề tài gia hạn ',
          path: '/detai-canbo/duyet-gia-han',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Thanh lý đề tài',
          path: '/detai-canbo/duyet-thanh-ly',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
       
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
          path: '/detai-sinhvien/dangky',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Phân công GV hướng dẫn',
          path: '/detai-sinhvien/cho-xac-nhan',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Đề tài chờ duyệt',
          path: '/detai-sinhvien/cho-duyet',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        }, 
        {
          title: 'Tiểu ban nghiệm thu',
          path: '/detai-sinhvien/tieuban-nghiemthu',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        }
      ]
    },
    {
      title: 'Đợt kiểm tra tiến độ thực hiện  ',
      path: '/detai-canbo/dot-kiem-tra-tien-do',
      icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
    },
    {
      title: 'Duyệt báo cáo tiến độ',
      path: '/detai-canbo/duyet-bao-cao-tien-do',
      icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
    },
    {
      title: 'Quản lý hội đồng khoa học',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
      subNav: [
        {
          title: 'Cấu hình hội đồng',
          path: '/quanly/cau-hinh-hoi-dong',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Danh sách hội đồng khoa học',
          path: '/quanly/hoidong',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
      ]
    },
    {
      title: 'Quản lý thông báo',
      path: '/nckh/quanly-thongbao',
      icon: <FaCube style ={{color: 'black'}}/>,
    },
    {
      title: 'Quản lý danh mục NCKH',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
  
      subNav: [
        {
          title: 'Loại đề tài',
          path: '/danhmuc/loaidetai',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Cấp đề tài',
          path: '/danhmuc/capdetai',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Lĩnh vực nghiên cứu',
          path: '/danhmuc/linhvuc',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Vai trò tham gia',
          path: '/danhmuc/vaitro-thamgia',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Loại sản phẩm ứng dụng',
          path: '/danhmuc/loai-san-pham-ung-dung',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
        {
          title: 'Loại sản phẩm NCKH',
          path: '/danhmuc/loai-san-pham-NCKH',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        }
      ]
    },
    {
      title: 'Quản lý biểu mẫu',
      path: '',
      icon: <FaCube style ={{color: 'black'}}/>,
      iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
      iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,
  
      subNav: [
        {
          title: 'Biểu mẫu word',
          path: '/quanly/bieumau/bookarks',
          icon: <FaCube style ={{color: 'black',height: '14px', width: '14px'}}/>
        },
        {
          title: 'Biểu mẫu Excel',
          path: '/quanly/bieumau/excel-template',
          icon: <FaCube style ={{color: 'black',height: '14px', width: '14px'}}/>
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
          path: '/user',
          icon: <FaCube style ={{color: 'black', height: '14px', width: '14px'}}/>
        },
      ]
    }
  ]
 