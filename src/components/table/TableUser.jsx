import "./table.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PreviewIcon from '@mui/icons-material/Preview';


const TableUser = () => {

  const [userData, setUserData] = useState([]);

  const handleDelete = (id) => {
    setUserData(userData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res);

      })
      .catch((error) => {
        console.error("Error fetching users:", error);

      });
  }, []);


  // useEffect(() => {
  //   fetch(`http://localhost:8000/user/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       setUserData(res);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching user:', error);
  //       setError('Error fetching user. Please try again later.');
  //     });
  // }, [id]);
  // if (error) {
  //   return <div>Error:{error}</div>
  // }
  // if (!userData) {
  //   return <div>Loading...</div>;
  // }


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">User name</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Password</TableCell>
              <TableCell className="tableCell">Role</TableCell>
              <TableCell className="tableCell">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="tableCell">{user.id}</TableCell>
                <TableCell className="tableCell">{user.userName}</TableCell>
                <TableCell className="tableCell">{user.email}</TableCell>
                <TableCell className="tableCell">{user.password}</TableCell>
                <TableCell className="tableCell">{user.role}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellAction">

                    <Link to="/users/test " style={{ textDecoration: "none" }}>
                      <PreviewIcon className="viewButton" titleAccess="View" />
                    </Link>
                    <EditIcon className="viewButton" titleAccess="Edit"/>
                    <DeleteOutlineIcon className="deleteButton" onClick={() => handleDelete(params.row.id)} titleAccess="Delete" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
};

export default TableUser;

