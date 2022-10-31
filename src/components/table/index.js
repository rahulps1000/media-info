import React from "react";
import "./index.css";

function JsonDataTable(data) {
  if (data.data == null) {
    return null;
  }
  return (
    <div className="table_container">
      <div className="table">
        {data.data.map((item, key1) => {
          return (
            <div className="Group" key={key1}>
              <h1>{item["@type"]}</h1>
              <table>
                {Object.keys(item).map((key, index) => {
                  if (key === "@type" || item[key] instanceof Object) {
                    return null;
                  }
                  return (
                    <tr key={index}>
                      <td>{key}</td>
                      <td>{item[key]}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JsonDataTable;
