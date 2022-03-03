import React from "react";
function Header({ number, data, increment }) {
  console.log("Header rendered");
  return (
    <>
      <div>Header {number}</div>
      <br />
      <br />
      <code>{JSON.stringify(data)}</code>

      <button onClick={increment}>Number + 1</button>
    </>
  );
}

export default React.memo(Header);
