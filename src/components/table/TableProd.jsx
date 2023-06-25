// import "./table.scss"
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const ListProd = () => {

//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>TableProd!!!!!!!!!!!!!!!!!!jsx
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Product name</TableCell>
//             <TableCell className="tableCell">Image</TableCell>
//             <TableCell className="tableCell">Description</TableCell>
//             <TableCell className="tableCell">Price</TableCell>
//             <TableCell className="tableCell">Quantity</TableCell>
//             <TableCell className="tableCell">Category Id</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   {row.name}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">               
//                   <img src={row.img} alt="" className="image" />
//                 </div>
//               </TableCell>             
//               <TableCell className="tableCell">{row.description}</TableCell>
//               <TableCell className="tableCell">{row.price}</TableCell>
//               <TableCell className="tableCell">{row.quantity}</TableCell>
//               <TableCell className="tableCell">{row.CategoryId}</TableCell>
//               {/* <TableCell className="tableCell">{row.method}</TableCell> */}

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ListProd;


// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import "./table.scss";

// const TableProd = () => {
  
//   const [dataProducts, setDataProducts] = useState([]);
//   const [product, setProduct] = useState([]);
//   const [name,setName] = useState("");
//   const [price,setPrice] = useState("");
//   const [description,setDescription] = useState("");
//   const [img,setImg] = useState("");
//   const [categoryId,setCategoryId] = useState("");
//   const [quantity,setQuantity] = useState("");
//   const [del,setDel] = useState(false);
//   const [open,setOpen] = useState(false);
//   const [updated,setUpdated] = useState(false);
//   const [category, setCategory] = useState([]);
//   const [defineId,setDefineId] = useState(null);


//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:8000/products");
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setDataProducts(data);
//   //     } else {
//   //       console.error("Error fetching products:", response.status);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching products:", error);
//   //   }
//   // };
//   useEffect(() => {
//     fetch("http://localhost:8000/products")
//         .then((res) => res.json())
//         .then((res) => {
//           console.log(res);
//           setProduct(res);
//         });
//     }, [del,updated]);
//     console.log(product)

    
//     const updateProduct = async (id) => {
//       const token = localStorage.getItem('token');
//       console.log(id,'update');
//         try {
//           const response = await fetch(
//             `http://localhost:8000/product/${id}`,
//             {
//               method: "PUT",
//               body: JSON.stringify({
//                 name,
//                 img,
//                 description,
//                 price,
//                 quantity,
//                 categoryId,
  
//               }),
//               headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//                 Authorization: token,
//               },
//             }
//           );
//           const data = await response.json();
//           if(data.message !== "Updated"){
//             console.log(data.status);
//             navigate('/products');
//           }
//         } catch (err) {
//           console.log(err);
//         }
//         setUpdated(!updated)
  
//           setName("");
//           setImg("");
//           setDescription("");
//           setPrice("");
//           setQuantity("");
//           setCategoryId("");
  
//       };

//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell" width={100} >Tracking ID</TableCell>
//             <TableCell className="tableCell" width={100} >Product name</TableCell>
//             <TableCell className="tableCell" width={100} >Image</TableCell>
//             <TableCell className="tableCell" width={100} >Description</TableCell>
//             <TableCell className="tableCell" width={100} >Price</TableCell>
//             <TableCell className="tableCell" width={100} >Quantity</TableCell>
//             <TableCell className="tableCell" width={100} >Category Id</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {product.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell" value={name} onChange={(e) => setName(e.target.value)}>{row.name}</TableCell>
//               <TableCell className="tableCell">
//                 <img src={row.img} width={"40px"} alt="" className="image" />
//               </TableCell>
//               <TableCell className="tableCell" value={description} onChange={(e) => setDescription(e.target.value)}>{row.description}</TableCell>
//               <TableCell className="tableCell" value={price} onChange={(e) => setPrice(e.target.value)}>{row.price}</TableCell>
//               <TableCell className="tableCell" value={quantity} onChange={(e) => setQuantity(e.target.value)}>{row.quantity}</TableCell>
//               <TableCell className="tableCell" value={category} onChange={(e) => setCategory(e.target.value)}>{row.CategoryId}</TableCell>
//               <TableCell>
//                 <button> delete</button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default TableProd ;














import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
// import Button from "@mui/material/Button";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Input from '@mui/material/Input';
import { Input } from '@mui/icons-material';

function TableProd() {

  const [data, setdata]=useState([]);
  const [state, setState]=useState(false)
  const [name, setName]=useState('')
  const [price, setPrice]=useState('')
  const [img, setImg]=useState('')
  const [quantity, setquantity]=useState('')
  const [categoryId, setCategoryId]=useState('')



  useEffect(()=>{
   
    fetch("http://localhost:8000/products")
    .then(res=> res.json())
    .then(res=>setdata(res))
  },[state])

  async function deleteProduct(id){
console.log(id)
const token = localStorage.getItem("token");
      try {
        await fetch("http://localhost:8000/product", {
          method: "DELETE",
          body: JSON.stringify({
            id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token
          },
        });
        setState(!state)
      } catch (err) {
        console.log(err);
      }
}
async function updateProduct(id){
    console.log(id)
    const token = localStorage.getItem("token");

    
          try {
            await fetch("http://localhost:8000/product", {
              method: "PUT",
              body: JSON.stringify({
                id,
                name,
                price,
                img,
                quantity,
                categoryId
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
              },
            });
            setState(!state)
          } catch (err) {
            console.log(err);
          }
    }

async function addProduct(){
  const token = localStorage.getItem("token");

  try {
    await fetch("http://localhost:8000/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        quantity,
        img,
        categoryId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": token
      },
    });
    setState(!state)
  } catch (err) {
    console.log(err);
  }
}

return (
<div>
<TableContainer component={Paper}>
  <Table padding='checkbox' sx={{ minWidth: 650 }} aria-label="simple table">
  <TableRow>
    <TableCell align="left">img</TableCell>
    <TableCell align="left">name</TableCell>
    <TableCell align="left">price</TableCell>
    <TableCell align="left">quantity</TableCell>
    <TableCell align="left">category</TableCell>
    <TableCell align="left">CRUD</TableCell>
  </TableRow>
  </Table>

  <Table padding='checkbox' sx={{ minWidth: 650 }} aria-label="simple table">
  <TableRow>
    <TableCell>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Add Product
          </AccordionSummary>
          <AccordionDetails>
        
          <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center">Img<Input onChange={(e)=> setImg(e.target.value)} /></TableCell>
        <TableCell align="center">Name<Input onChange={(e)=> setName(e.target.value)} /></TableCell>
        <TableCell align="center">Price<Input onChange={(e)=> setPrice(e.target.value)} /></TableCell>
        <TableCell align="center">Quantity<Input onChange={(e)=> setquantity(e.target.value)} /></TableCell>
        <TableCell align="center">CategoryId<Input onChange={(e)=> setCategoryId(e.target.value)} /></TableCell>
        <TableCell align="center">
            <Button variant="outlined" onClick={addProduct}>
                Add
            </Button>
        </TableCell>
      </TableRow>
      </Table>.
          
          </AccordionDetails>
        </Accordion>
      </div>
    </TableCell>
  </TableRow>
  </Table>


  {data.map((row) => (
    <Accordion key={row.id}>
      <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
      >
        <Table padding='checkbox' aria-label="simple table">
        <TableRow className='tablepadding'>
          <TableCell align="center">{row.img}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.price}</TableCell>
          <TableCell align="center">{row.quantity}</TableCell>
          <TableCell align="center">{row.Category?.name}</TableCell>
          <TableCell align="center">
            <button  onClick={()=>deleteProduct(row.id)}>
                Delite
            </button>
          </TableCell>
        </TableRow>
        </Table>
      </AccordionSummary>
      <AccordionDetails>
      <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Img" defaultValue={row.img} onChange={(e)=> setImg(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Name" defaultValue={row.name} onChange={(e)=> setName(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Price" defaultValue={row.price} onChange={(e)=> setPrice(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Quantity" defaultValue={row.quantity} onChange={(e)=> setquantity(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Category id"  onChange={(e)=> setCategoryId(e.target.value)} /></TableCell>
        <TableCell align="center">
            <Button variant="outlined" onClick={()=>updateProduct(row.id)}>
                Update
            </Button>
        </TableCell>
      </TableRow>
      </Table>
      </AccordionDetails>
    </Accordion>
  ))}  
  </TableContainer>    
</div>
);
}


export default TableProd;