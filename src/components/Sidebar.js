import React from "react";

const Sidebar = () => {
  // let fullname = "John";
  const [fullname, setFullname] = React.useState("John"); //ตัวแปร useState แบบย่อ เป็น array
  const [isShow, setIsShow] = React.useState(true);

  const changeName = () => {
    // fullname = "Mary";
    setFullname("Mary");
    setIsShow(!isShow); //ทำสลับค่า toggle
  };

  React.useEffect(() => {
    console.log("sidebar useEffect");
  });

  React.useEffect(() => {
    console.log("sidebar useEffect One Time Only");
  }, []); // ใส่ array เปล่าเพื่อให้ ทำงานแค่รอบเดียว   (ใช่ดึงข้อมูล DB ครั้งแรก)

  React.useEffect(() => {
    console.log("sidebar useEffect => " + fullname);
  }, [fullname]); //ทำเมื่อ fullname มีการเปลี่ยนค่าเท่านั้น

  return (
    <>
      <h3> Sidebar </h3>
      {isShow ? <p>Hello</p> : <p>World</p>}
      <p>สวัสดี {fullname}</p>
      <button onClick={changeName}>เปลี่ยนชื่อ</button>
    </>
  );
};

export default Sidebar;
