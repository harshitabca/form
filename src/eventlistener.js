import React from "react";

const Event = (props) => {
  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {});
  }, []);
  return (
    <div className="container">
      <h1>Welcome to the Keydown Listening Component</h1>
    </div>
  );
};
export default Event;
