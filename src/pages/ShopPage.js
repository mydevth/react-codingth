import React from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { Table, Image, Spinner } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [shop, setShop] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://node-express-mongodb-restfuapi.herokuapp.com/shop",
        {
          cancelToken: cancelToken.current.CancelToken,
          // cancelToken: cancelToken.current.token, //ของอาจารย์เป็นแบบนี้แต่ error
        }
      );
      // console.log(resp.data.data);
      setShop(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();

    // return () => {
    //   // เมื่อออกจากหน้า ให้ยกเลิก request
    //   // console.log("exit product page");
    cancelToken.current.cancel();
    // };
  }, []);
  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <p>เกิดข้อผิดผลาดจาก Server กรุณาลองใหม่</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>ร้านอาหาร</h2>
          <div>
            <Link
              to={{ pathname: "https://github.com/vinothsmart/" }}
              target="_blank"
            >
              xxx
            </Link>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>ชื่อร้าน</th>
                <th>รูปภาพ</th>

                <th>ตำแหน่งร้าน</th>
                <th>เมนู</th>
              </tr>
            </thead>
            <tbody>
              {shop.map((s, index) => {
                return (
                  <tr key={s.id}>
                    <td>{index + 1}</td>
                    <td>{s.name}</td>
                    <td>
                      <Image src={s.photo} thumbnail alt={s.name} width={100} />
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: `https://${s.location.lat},${s.location.lgn}`,
                        }}
                        target="_blank"
                      >
                        <Badge variant="success">{`${s.location.lat},${s.location.lgn}`}</Badge>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/menu/${s.id}`}>
                        <BsEyeFill />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
