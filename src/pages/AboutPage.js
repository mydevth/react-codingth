import React from "react";

import axios from "axios";

const AboutPage = () => {
  const [version, setVersion] = React.useState("");
  const [staff, setStaff] = React.useState("");

  const getData = async () => {
    const resp = await axios.get("https://api.codingthailand.com/api/version");
    // console.log(resp.data.data.version);
    setVersion(resp.data.data.version);
  };

  const getStaff = async () => {
    const resp = await axios.get(
      "https://node-express-mongodb-restfuapi.herokuapp.com/staff/62e111dadec830ba90805162"
    );
    // console.log(resp.data);
    setStaff(resp.data.data.name);
  };

  React.useEffect(() => {
    // async function getData() {
    //   const resp = await axios.get(
    //     "https://api.codingthailand.com/api/version"
    //   );
    //   // console.log(resp.data.data.version);
    //   setVersion(resp.data.data.version);
    // }

    getData();
    getStaff();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>เกี่ยวกับเรา</h2>
          {/* ดึงค่า version ได้แล้วถึงแสดง */}
          {version && <p>Backend API Version: {version}</p>}
          {staff && <p>Staff: {staff}</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
