
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


const DatatableProduct = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const history = useHistory()
  // const handleDelete = (id) => {
  //   setDataProducts(dataProducts.filter((item) => item.id !== id));
  // };

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

  const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8000/product/${id}`,{
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
             Authorization: token,
          },
        }
      );
      if (response.ok) {
        setDataProducts(dataProducts.filter((item) => item.id !== id));
        console.log("Product deleted successfully!");
      } else {
        console.log("Failed to delete product");
      }
     
    } catch (error) {
      console.error("Error deleting product:",error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:8000/product/${id}`,{
            method: "PUT",
            body:JSON.stringify(updatedProduct),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
               Authorization: token,
            },
          }
        );
        if (response.ok) {
          console.log("Product updated successfully!");
        } else {
          console.log("Failed to update product");
        }
       
      } catch (error) {
        console.error("Error updating product:",error);
      }
    };

    const handleSave = (id) => {
      const updatedProduct = dataProducts.find((product) => product.id === id);
      updateProduct(id, updatedProduct);
    };

  const actionColumn = [
    {
      field: "id",
      headerName: "Product Id",
      width: 80,
    },
    {
      field: "name",
      headerName: "Product name",
      width: 200,
    },
    {
      field: "img",
      headerName: "Product ",
      width: 160,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "CategoryId",
      headerName: "Category Id",
      width: 80,
    },
    {
      field: "action",
      headerName: "Action",
      width: 260,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <Link to={`/product/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteProduct(params.row.id)}
            >
              Delete
            </div>
            <div
              className="deleteButton"
              onClick={() => updateProduct(params.row.id)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleSave(params.row.id)}
            >
              Save
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
