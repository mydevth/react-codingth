import React from "react";
import { Table, Image, Spinner } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course",
        {
          cancelToken: cancelToken.current.CancelToken,
        }
      );
      // console.log(resp.data.data);
      setProduct(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    // console.log(cancelToken.current);

    getData();

    return () => {
      // เมื่อออกจากหน้า ให้ยกเลิก request
      // console.log("exit product page");
      cancelToken.current.cancel();
    };
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="grow" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <p>เกิดข้อผิดผลาดจาก Server กรุณาลองใหม่</p>
        <p>{error.code}</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <div>
            <h3>
              <Badge bg="secondary">สินค้า</Badge>
            </h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>ชื่อคอร์ส</th>
                <th>รายละเอียด</th>
                <th>วันที่สร้าง</th>
                <th>views</th>
                <th>รูปภาพ</th>
                <th>เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {product.map((p, index) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.detail}</td>
                    <td>
                      {format(new Date(p.date), "dd/MMM/yyyy", {
                        locale: th,
                      })}
                    </td>
                    <td>
                      <Badge bg="info">{p.view}</Badge>
                    </td>
                    <td>
                      <Image
                        src={p.picture}
                        thumbnail
                        alt={p.title}
                        width={100}
                      />
                    </td>
                    <td>
                      <Link to="/detail">
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

export default ProductPage;
