import React from "react";
function Main(props) {
    const {loading} = props;

  return (
    <div id={loading ? "preloader" : "preloader-none"}> </div>
  )
}

export default Main;
