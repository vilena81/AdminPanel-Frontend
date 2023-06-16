import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListProd = () => {
  const rows = [
    {
      id: 1,
        name: "iPhone 11",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        description: "activecfj gddddddn",
        price: 5555555,
        quantity: 35,
        CategoryId: 1,
    },
    {
      id: 2,
      name: "iPhone 11",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description: "activecfj gddddddn",
      price: 5555555,
      quantity: 35,
      CategoryId: 1,
    },
    {
      id: 3,
      name: "iPhone 11",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description: "activecfj gddddddn",
      price: 5555555,
      quantity: 35,
      CategoryId: 1,
    },
    {
      id: 4,
      name: "iPhone 11",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description: "activecfj gddddddn",
      price: 5555555,
      quantity: 35,
      CategoryId: 1,
    },
    {
      id: 5,
      name: "iPhone 11",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description: "activecfj gddddddn",
      price: 5555555,
      quantity: 35,
      CategoryId: 1,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>TableProd!!!!!!!!!!!!!!!!!!jsx
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product name</TableCell>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Category Id</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">               
                  <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>             
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">{row.CategoryId}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListProd;