
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DatatableProduct = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const handleDelete = (id) => {
    setDataProducts(dataProducts.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching productss:", error);

      });
  }, []);

  const actionColumn = [
    {
      field: "id",
      headerName: "Product Id",
      width: 100,
    },
    {
      field: "name",
      headerName: "Product name",
      width: 150,
    },
    {
      field: "img",
      headerName: "Product ",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
    {
      field: "price",
      headerName: "Product price",
      width: 150,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
    },
    {
      field: "CategoryId",
      headerName: "Category Id",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <Link to={`/product/${params.id}`} style={{ textDecoration: "none" }}>
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

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/product/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataProducts}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableProduct;
