import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner, CardDeck, Card } from "react-bootstrap";

const MenuPage = () => {
  const { id } = useParams();
  const [menu, setMenu] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://node-express-mongodb-restfuapi.herokuapp.com/shop/" + id,
        {
          cancelToken: cancelToken.current.CancelToken,
          // cancelToken: cancelToken.current.token, //ของอาจารย์เป็นแบบนี้แต่ error
        }
      );
      // console.log(resp.data.data);
      setMenu(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(id);

    // return () => {
    //   // เมื่อออกจากหน้า ให้ยกเลิก request
    //   // console.log("exit product page");
    cancelToken.current.cancel();
    // };
  }, [id]);

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
          <h2>{id}</h2>
          <div className="row">
            <CardDeck>
              {menu.map((d, index) => {
                return (
                  <div className="col-md-4" key={d._id}>
                    <Card className="mb-4 shadow-sm">
                      <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </CardDeck>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
