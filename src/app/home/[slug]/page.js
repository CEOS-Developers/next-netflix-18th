import React from "react";
function page({ params }) {
  return <div style={{ color: "red" }}>{params.slug}</div>;
}

export default page;
