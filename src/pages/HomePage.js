import React from "react";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

const Homepage = () => {
  // const { isLoading, error, data, isFetching } = useQuery(["getData"], () =>
  //   fetch(
  //     "https://api.codingthailand.com/api/news?page=1&per_page=3"
  //   ).then((res) => res.json())
  // );

  const query = useQuery(["getData"], () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const promise = fetch(
      "https://api.codingthailand.com/api/news?page=1&per_page=3",
      {
        method: "get",
        signal: signal,
      }
    ).then((res) => res.json());

    // cancel request
    promise.cancel = () => controller.abort();

    return promise;
  });

  const { isLoading, error, data, isFetching } = query;

  if (isLoading === true) {
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
        <p>{JSON.stringify(error)}</p>
        {/* <p>{error.response.data.message}</p> */}
      </div>
    );
  }

  return (
    <>
      <div>
        <main role="main">
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">ยินดีต้อนรับทุกคน!</h1>
              <p>
                เว็บนี้พัฒนาด้วย React เป็นคอร์สเรียนวิดีโอจาก
                Codingthailand.com By โค๊ชเอก{" "}
                <BsFillChatSquareDotsFill color="red" size="2em" />
              </p>
              <p>
                <Link
                  className="btn btn-primary btn-lg"
                  to="/product"
                  role="button"
                >
                  สินค้าทั้งหมด »
                </Link>
              </p>
            </div>
          </div>
          <div className="container">
            {/* Example row of columns */}
            <div className="row">
              <div className="mx-auto">
                {isFetching ? "กำลังอัพเดท..." : null}
              </div>

              {data.data.map((news, index) => {
                return (
                  <div className="col-md-4" key={news.id}>
                    <h2>{news.topic}</h2>
                    <p>{news.detail}</p>
                    <p>หมวดหมู่ข่าว {news.name}</p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
      </div>
    </>
  );
};

export default Homepage;
