
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';


const DatatableCategory = () => {

  const [editingCategory, setEditingCategory] = useState(null)
  const [dataCategories, setDataCategories] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataCategories(res);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  const deleteCategory = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8000/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      }
      );
      if (response.ok) {
        setDataCategories(dataCategories.filter((item) => item.id !== id));
        console.log("Category deleted successfully!");
      } else {
        console.log("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };


  const updateCategory = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8000/category/${id}`, {
        method: "PUT",
        body: JSON.stringify(category),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      });
      if (response.ok) {
        console.log("Category updated successfully!");
        setEditingCategory(null);
      } else {
        console.log("Failed to updated category");
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  
  const handleSave = (category) => {
    updateCategory(category);
  };


  const actionColumn = [
    
    {
      field: "id",
      headerName: "Category Id",
      width: 180,

    },
    {
      field: "name",
      headerName: "Category name",
      width: 280,
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
              onClick={() => deleteCategory(params.row.id)}
            >
              Delete
            </div>
            <div
               className="deleteButton"
               onClick={() => setEditingCategory( params.row)}
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
        All Categories
        <Link to="/category/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataCategories}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default DatatableCategory;