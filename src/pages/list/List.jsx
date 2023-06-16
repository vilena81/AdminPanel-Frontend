import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import DatatableUser from "../../components/datatable/DatatableUser"
 import DatatableUser from "../../components/table/TableUser"
//  import { useState,useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";




const List = () => {

  // const [userData, setUserData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   fetch("http://localhost:8000/users")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res.data);
//       setUserData(res.data);
//       // setIsLoading(false);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       // setIsLoading(false);
//     });
// }, []);

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        Datatable from user!!!!!!!
        <DatatableUser />
  {/* <TableUser /> */}

  {/* <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">User name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Password</TableCell>
            <TableCell className="tableCell">Role</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
              {userData.length > 0 ? (
                userData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="tableCell">{user.id}</TableCell>
                    <TableCell className="tableCell">{user.userName}</TableCell>
                    <TableCell className="tableCell">{user.email}</TableCell>
                    <TableCell className="tableCell">{user.password}</TableCell>
                    <TableCell className="tableCell">{user.role}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>No data available</TableCell>
                </TableRow>
              )}
            </TableBody>
      </Table>
    </TableContainer> */}

      </div>
    </div>
  )
}

export default List