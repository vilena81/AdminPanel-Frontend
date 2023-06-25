
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';


const DatatableProduct = () => {

  const [editingProduct, setEditingProduct] = useState(null)
  const [dataProducts, setDataProducts] = useState([]);
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [quantity, setQuantity] = useState("")

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
      const response = await fetch(`http://localhost:8000/product/${id}`, {
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
      console.error("Error deleting product:", error);
    }
  };


  const updateProduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8000/product/${id}`, {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      });
      if (response.ok) {
        console.log("Product updated successfully!");
        setEditingProduct(null);
      } else {
        console.log("Failed to updated product");
      }
    } catch (error) {
      console.error("Error updating  product:", error);
    }
  };
 

  const handleSave = (product) => {
    updateProduct(product);
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
      width: 180,
      renderCell: (params) => {
        return (
          <input
            value={params.row.name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
    },
    {
      field: "img",
      headerName: "Product Image",
      width: 180,
      renderCell: (params) => {
        return (
          <input
            value={params.row.img}
            onChange={(e) => setImg(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.img}
            onChange={(e) => setImg(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
      renderCell: (params) => {
        return (
          <input
            value={params.row.description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return (
          <input
            value={params.row.price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
      renderCell: (params) => {
        return (
          <input
            value={params.row.quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
    },
    {
      field: "CategoryId",
      headerName: "CategoryId",
      width: 100,
      renderCell: (params) => {
        return (
          <input
            value={params.row.CategoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            style={{ width: "100%", border: "none" }}
          />
        );
      },
      renderEditCell: (params) => {
        return (
          <input
            value={params.row.price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%" }}
          />
        );
      },
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
               onClick={() => setEditingProduct( params.row)}
             >
              <EditIcon />
             </div>
            <div className="deleteButton" onClick={() => handleSave(params.row.id)}>
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
        All Products
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