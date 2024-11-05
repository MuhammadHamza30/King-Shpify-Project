// import './App.css'
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {

//   return (

//     <BrowserRouter>
//     <Routes>
//       <Route index="/" element={<Home />} />
//     </Routes>
//   </BrowserRouter>
//   )
// }

// export default App


// import * as React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./App.css";

// function App(){

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Home/>,
//     },
//   ]);

//   return (

//         <RouterProvider router={router} />

//     )
//   }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home.jsx'
import Shop from '../src/pages/Shop.jsx'
import NewArrivals from "./pages/NewArrivales.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/LogIn.jsx";
import SigUp from "./pages/SingUp.jsx";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SigUp" element={<SigUp />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App