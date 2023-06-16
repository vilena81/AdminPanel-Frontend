

import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const DatatableUser = () => {


  const [userData, setUserData] = useState([]);

  const handleDelete = (id) => {
    setUserData(userData.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const columns = userData.length > 0 ? Object.keys(userData[0]).map((key) => ({
    field: key,
    headerName: key,
    width: 200,
  })) : [];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userData}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableUser;
