import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink, useHistory } from "react-router-dom";
//import { UserStoreContext } from "../context/UserContext";

// redux
import { updateProfile } from "../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const history = useHistory();
  // const [profile, setProfile] = useState(null);    //local state เปลี่ยนไปใช้ global

  // const userStore = React.useContext(UserStoreContext);

  // redux
  const profileRedux = useSelector((state) => state.authReducer.profile);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch();

  // const getProfile = () => {
  //   const profileValue = JSON.parse(localStorage.getItem("profile"));
  //   if (profileValue) {
  //     setProfile(profileValue);
  //   }
  // };

  // React.useEffect(() => {
  //   // console.log("use effect navbar");
  //   getProfile();
  // }, []);

  // const getProfile = () => {
  //   const profileValue = JSON.parse(localStorage.getItem("profile"));
  //   if (profileValue) {
  //     userStore.updateProfile(profileValue);
  //   }
  // };

  // React.useEffect(() => {
  //   // console.log("use effect navbar");
  //   getProfile();
  // }, []);

  // Redux
  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"));
    if (profileValue) {
      dispatch(updateProfile(profileValue));
    }
  };

  React.useEffect(() => {
    // console.log("use effect navbar");
    getProfile();
  }, []);

  // Context
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("profile");
  //   history.replace("/");
  //   // history.go(0);
  //   userStore.updateProfile(null);
  // };

  // Redux
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    history.replace("/");
    dispatch(updateProfile(null));
  };

  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Chonburi.biz logo"
          />{" "}
          Chonburi.Biz
        </NavLink>
        {/* <Container fluid> */}
        {/* <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Chonburi.biz logo"
          />{" "}
          Chonburi.biz
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/product"
              activeClassName="active"
            >
              สินค้า
            </NavLink>
            <NavLink className="nav-link" to="/shop" activeClassName="active">
              ร้านอาหาร
            </NavLink>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              เกี่ยวกับเรา
            </NavLink>

            <NavLink className="nav-link" to="/cart" activeClassName="active">
              ตระกร้าสินค้า {total} ชิ้น
            </NavLink>

            <NavDropdown
              title="Workshop (Pagination + CRUD"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital");
                }}
              >
                ข้อมูลสถานพยาบาล (Pagination)
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                onClick={() => {
                  history.replace("/category");
                }}
              >
                หมวดหมู่ข่าว (CRUD)
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/upload" activeClassName="active">
              อัปโหลดไฟล์
            </NavLink>

            <NavLink className="nav-link" to="/member" activeClassName="active">
              เมนูสมาชิก
            </NavLink>
            <NavLink
              className="nav-link"
              to="/chartreport"
              activeClassName="active"
            >
              Chart Report
            </NavLink>
            <NavLink
              className="nav-link"
              to="/payment"
              activeClassName="active"
            >
              Payment
            </NavLink>
          </Nav>

          {/** Redux **/}
          {profileRedux ? (
            <span className="navbar-text text-white">
              ยินดีต้อนรับคุณ {profileRedux.name} role: {profileRedux.role}
              <button className="btn btn-danger ml-2" onClick={logout}>
                {" "}
                Log out{" "}
              </button>
            </span>
          ) : (
            <>
              <Nav>
                <NavLink
                  className="nav-link"
                  to="/register"
                  activeClassName="active"
                >
                  สมัครสมาชิก
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeClassName="active"
                >
                  เข้าสู่ระบบ
                </NavLink>
              </Nav>
            </>
          )}
          {/* {userStore.profile ? (
            <span className="navbar-text text-white">
              ยินดีต้อนรับคุณ {userStore.profile.name} role: {userStore.profile.role} 
             
              {userStore.profile.role}
              <button className="btn btn-danger ml-2" onClick={logout}>
                {" "}
                Log out{" "}
              </button>
            </span>
          ) : (
            <>
              <Nav>
                <NavLink
                  className="nav-link"
                  to="/register"
                  activeClassName="active"
                >
                  สมัครสมาชิก
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeClassName="active"
                >
                  เข้าสู่ระบบ
                </NavLink>
              </Nav>
            </>
          )} */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default NavBar;
