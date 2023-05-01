import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import fireDb from "../Firebase/firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Info.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Info() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //push data to firebase after rendering it
  useEffect(() => {
    fireDb.child("Info").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    //clean up function
    return () => {
      setData({});
    };
  }, []);

  //delete function
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      fireDb.child(`Info/${id}`).remove((err) => {
        if (err) {
          toast.err(err);
        } else {
          toast.success("item deleted successfully");
        }
      });
    }
  };

  //creating a handle submit function for my search bar
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  };
  return (
    //creating search input field to search for data from my table
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputfield"
          placeholder="Search Name..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      {/*creating the table */}
      <div className="overflow-x auto !important">
        <div className="table-responsive">
          <Table striped bordered hover className="styled-table">
            <thead clasName="styled-table thead tr">
              <tr className="styled-table th styled-table td styled-table th">
                <th style={{ textAlign: "center" }}>No.</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>CARD ID</th>
                <th style={{ textAlign: "center" }}>Type of Appointment</th>
                <th style={{ textAlign: "center" }}>Doctor </th>
                <th style={{ textAlign: "center" }}>Next Appointment</th>
                <th style={{ textAlign: "center" }}>Action</th>
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
                      <td>
                        <Link
                          to={`/update/${id}`}
                          style={{ textDecorationLine: "none" }}
                        >
                          <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button
                          onClick={() => onDelete(id)}
                          className="btn btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Info;
