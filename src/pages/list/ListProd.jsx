import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableProduct from "../../components/datatable/DatatableProduct"

const ListProd = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        
       
        <DatatableProduct />
      </div>
    </div>
  )
}

export default ListProd;