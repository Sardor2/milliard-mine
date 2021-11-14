import React from "react";

const MyComponent = ({ params }) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default MyComponent;
