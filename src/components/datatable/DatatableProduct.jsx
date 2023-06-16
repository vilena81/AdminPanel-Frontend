// import './datatable.scss'
// import { DataGrid } from '@mui/x-data-grid';
// import { productColumns, productRows } from '../../../datatablesourceProd'
// import { Link } from "react-router-dom";
// import { useState, useEffect} from "react";

// const DatatableProduct = () => {

//   const [data, setData] = useState(productRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
  

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/products/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New Product
//         <Link to="/products/new" className="link">
//           Add New
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={productColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default DatatableProduct;

import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DatatableProduct = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  // }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
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
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableProduct;
