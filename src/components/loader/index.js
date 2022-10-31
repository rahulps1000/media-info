import React from "react";
import "./index.css";

function Loader({ display }) {
  if (display) {
    return (
      <div className="loader">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return null;
}

export default Loader;
