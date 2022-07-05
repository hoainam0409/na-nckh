import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { UserContext } from "../../../contexts/UserContext";
import SideBar from "../../sidebar/SideBar";
import ThemUser from "./ThemUser";
import SuaUser from "./SuaUser";

const Users = () => {

  const {
    userState: { user, users, usersLoading },
    getUsers,
    setShowThemUser,
    showToast: { show, message, type },
    setShowToast,
    deleteUser,
    findUser,
    setShowSuaUser,
  } = useContext(UserContext);

  // Start: Get all
  useEffect(() => getUsers(), []);

  const chooseUser = (userId) => {
    findUser(userId);
    setShowSuaUser(true);
  };
  return (
    <div>
      <SideBar />
      <div style={{ margin: "10px 20px 20px 330px" }}>
        <h1
          style={{
            fontSize: "24px",
          }}
        >
          Danh sách cán bộ
        </h1>
        <Toast
          show={show}
          style={{ position: "fixed", right: "10px" }}
          className={`bg-${type} text-white`}
          onClose={setShowToast.bind(this, {
            show: false,
            message: "",
            type: null,
          })}
          delay={3000}
          autohide
        >
          <Toast.Body>
            <strong>{message}</strong>
          </Toast.Body>
        </Toast>
        <Button
          style={{
            marginTop: "70px",
            marginBottom: "20px",
            backgroundColor: "#337AB7",
            borderColor: "#2d6da3",
          }}
          onClick={setShowThemUser.bind(this, true)}
        >
          Thêm mới
        </Button>
        <ThemUser />
        {user !== null && <SuaUser/>}

        <Table borderless bordered hover style={{ cursor: "pointer" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center", color: "#495057" }}>Tài khoản</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Họ và tên</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Khoa/Phòng ban</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Chức vụ</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Học Hàm</th>
              <th style={{ textAlign: "center", color: "#495057" }}>Học vị</th>

              <th style={{ textAlign: "center", color: "#495057" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.hovaten} </td>
                <td>{user.phongban} </td>
                <td>{user.chucvu} </td>
                <td>{user.hocham} </td>
                <td>{user.hocvi} </td>

                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      backgroundColor: "#337AB7",
                      borderColor: "#2d6da3",
                    }}
                    onClick={chooseUser.bind(this, user._id)}
                  >
                    Xem
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#5bc0de",
                      borderColor: "#269abc",
                    }}
                    onClick={chooseUser.bind(this, user._id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#c9302c",
                      borderColor: "#ac2925",
                    }}
                    onClick={() => deleteUser(user._id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
