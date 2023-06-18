import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableUser from "../../components/table/TableUser"


const List = () => {

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        Datatable from user!!!!!!!
        <DatatableUser />


      </div>
    </div>
  )
}

export default List