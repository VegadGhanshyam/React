import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataTable, setDataTable] = useState([]);
  const [ussername, setusername] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setDataTable(res.data);
        // console.log(res.data);

        const columnName = Object.keys(res.data[0]);
        console.log("columnName===111", columnName);

        setusername(columnName);
      })
      .catch((err) => console.log(err));
  }, []);

  const ThData = () => {
    // console.log("columnName ==",typeof columnName);
    return ussername && ussername.length > 0 ? (
      ussername.map((dataa) => {
        return <th key={dataa}>{dataa}</th>;
      })
    ) : (
      <></>
    );
  };

  const tdData = () => {
    return (
      dataTable &&
      dataTable.length > 0 &&
      dataTable.map((dataa) => {
        return (
          <tr>
            {ussername &&
              ussername.length > 0 &&
              ussername.map((v) => {
                return <td key={v}>{dataa[v]}</td>;
              })}
          </tr>
        );
      })
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
}

export default App;
