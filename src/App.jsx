import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

// import List from "./pages/list/List";
import Single from "./pages/single/Single";
import SingleProd from "./pages/single/SingleProd";
import New from "./pages/new/New"
import { productInputs, userInputs } from "../formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";
import ListProd from "./pages/list/ListProd";
// import ListTable from "./components/table/Table";
import List from "./pages/list/List";


function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<ListProd />} />
            <Route path=":productId" element={<SingleProd />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          {/* <Route path="categories">
            <Route index element={<ListProd />} />
            <Route path=":categoryId" element={<SingleCategory />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Category" />}
            />
          </Route> */}
          {/* <Route path="/login" element={<Login/>}></Route> */}
        </Route>

      </Routes>



    </div>
  );
}

export default App;

{/* <Routes>
       
<Route path="/" element={<Home />} />
<Route path="login" element={<Login />} />
<Route path="users">
  <Route index element={<List />} />
  <Route path=":userId" element={<Single />} />
  <Route
    path="new"  element={<New />}
    // element={<New inputs={userInputs} title="Add New User" />}
  />
</Route>
{/* <Route path="products">
  <Route index element={<List />} />
  <Route path=":productId" element={<Single />} />
  <Route
    path="new"
    element={<New inputs={productInputs} title="Add New Product" />}
  />
</Route>
*/}
// </Routes> */}