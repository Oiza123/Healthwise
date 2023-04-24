import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import fireDb from "../Firebase/firebase";
import "./Search.css";

function Search() {
  const [data, setData] = useState("");
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery;
  let search = `query.get("name")`;

  useEffect(() => {
    searchData();
  }, [search]);
  const searchData = () => {
    fireDb
      .child("Info")
      .orderByChild("name")
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };

  return (
    <div>
      <table className="styled-table" style={{ overflowX: "hidden" }}>
        <thead clasName="styled-table thead tr">
          <tr className="styled-table th styled-table td styled-table th">
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>CARD ID</th>
            <th style={{ textAlign: "center" }}>Type of Appointment</th>
            <th style={{ textAlign: "center" }}>Doctor </th>
            <th style={{ textAlign: "center" }}>Next Appointment</th>
          </tr>
        </thead>
        <tbody>
          {
            //mapping over the data in the table body

            Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].ID}</td>
                  <td>{data[id].typeofAppointment}</td>
                  <td>{data[id].doctor}</td>
                  <td>{data[id].nextAppointment}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Search;
