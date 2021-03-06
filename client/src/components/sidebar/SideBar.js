import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import {
  BsFillGridFill,
  BsPersonCircle,
  BsFillQuestionCircleFill,
  BsBell,
  BsGridFill,
  BsSearch,
  BsBoxArrowRight,
  BsPersonLinesFill,
} from "react-icons/bs";
// import TopLogo from "../../assets/images/logo/logo.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { AuthContext } from "../../contexts/AuthContext";

const Nav = styled.div`
  background: #337ab7;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavLogo = styled.div`
  margin-left: 10px;
`;
const NavTitle = styled.div`
  margin-left: 10px;
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;
const NavIcon = styled.div`
  font-weight: 700;
  align-items: center;
  color: #337ab7;
  text-transform: uppercase;
  word-spacing: 1px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  font-size: 18px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;
const TopBarRight1 = styled.div`
  width: 55%;
`;
const TopBarRight2 = styled.div`
  float: right;
  align-items: center;
  display: flex;
  width: 45%;
`;
const NavSearch = styled.div`
  list-style-type: none;
  height: 35px;
  display: flex;
`;
const InputSearch = styled.input`
  font-size: 15px;
  width: 300px;
`;
const ButtonSearch = styled.div`
  width: 35px;
  background-color: #ffff;
  margin: 1px 0 1px 0;
`;
const NavProfile = styled.div`
  height: 46px;
  align-items: center;
  float: right;
  right: 0;
  display: flex;
`;
const NavName = styled.div`
  color: #ffff;
`;
const NavAvatar = styled.div`
  width: 24px;
  height: 24px;
`;
const SidebarNav = styled.div`
  background: #ffff;
  width: 330px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  overflow-y: scroll;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const hiddenSidebar = () => setSidebar(!sidebar);
  const {
    authState: {
      user: { hovaten },
    },
    logoutUser,
  } = useContext(AuthContext);
  const logout = () => logoutUser();


  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <Nav>
          <TopBarLeft>
            <NavIcon to="#">
              <FaIcons.FaBars
                style={{ height: "30px", width: "30px" }}
                onClick={hiddenSidebar}
              />
            </NavIcon>
            {/* <NavLogo to="">
              <img
                src={TopLogo}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
            </NavLogo> */}
            <NavTitle>H??? th???ng ?????i h???c th??ng minh</NavTitle>
          </TopBarLeft>
          <TopBarRight1 />
          <TopBarRight2>
            <NavSearch>
              <InputSearch placeholder="Nh???p t??? khoa t??m ki???m" />
              <ButtonSearch>
                <BsSearch
                  style={{
                    color: "#000",
                    height: "20px",
                    width: "20px",
                    marginLeft: "8px",
                  }}
                />
              </ButtonSearch>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "white",
                    color: "#000",
                    margin: "0",
                    borderRadius: "0",
                    height: "35px",
                  }}
                  id="dropdown-basic"
                >
                  T??m ki???m n??ng cao
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Form.Group className="mb-3">
                    <Form.Control />
                  </Form.Group>
                </Dropdown.Menu>
              </Dropdown>
            </NavSearch>
            <BsGridFill
              style={{ width: "24px", height: "24px", margin: "10px" }}
            />
            <BsBell style={{ width: "24px", height: "24px", margin: "10px" }} />
            <BsFillQuestionCircleFill
              style={{ width: "24px", height: "24px", margin: "10px" }}
            />
            <NavProfile>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "#337ab7",
                    borderShadow: "0",
                    display: "inline-flex",
                  }}
                >
                  <NavName>{hovaten}</NavName>
                  <NavAvatar>
                    <BsPersonCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "15px",
                      }}
                    />
                  </NavAvatar>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/nckh/thongtin-canhan">
                    <span>
                      <BsPersonLinesFill style={{ color: "black" }} />
                    </span>
                    Th??ng tin c?? nh??n
                  </Dropdown.Item>
                  <Dropdown.Item href="/login" onClick={logout}>
                    <span>
                      <BsBoxArrowRight style={{ color: "black" }} />
                    </span>
                    ????ng xu???t
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </NavProfile>
          </TopBarRight2>
        </Nav>
        <SidebarNav sidebar={sidebar} id="style-nav">
          <SidebarWrap>
          <NavIcon>
            <BsFillGridFill style={{ color: "#337ab7 ", marginLeft: "10px" }} />
            <span style={{ marginLeft: "10px" }}>Qu???n l?? ????? t??i NCKH</span>
            <AiIcons.AiOutlineClose onClick={hiddenSidebar} />
          </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
