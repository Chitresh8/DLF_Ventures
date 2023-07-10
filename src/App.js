import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Pages/Header/Header";
import { HomeData } from "./components/Pages/HomeData/HomeData";
import Login from "./components/Pages/Login/Login";
import { UpdateUser } from "./components/Pages/UpdateUser/UpdateUser";
import { History } from "./components/Pages/History/History";
import { Logout } from "./components/Pages/Logout/Logout";
import { AddPage } from "./components/Pages/HomeData/AddPage/AddPage";
import { ExportPage } from "./components/Pages/HomeData/ExportPage/ExportPage";
import { ImportPage } from "./components/Pages/HomeData/ImportPage/ImportPage";
import { Master } from "./components/Pages/HomeData/Master/Master";
import { LearnMorePage } from "./components/Pages/Login/LearnMorePage";
// import Box from "@mui/material/Box";
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="homedata"
              element={<HomeData />}
            />
            <Route
              path="/homedata/updateuser"
              element={<UpdateUser />}
            />
            <Route
              path="/homedata/history"
              element={<History />}
            />
            <Route
              path="/logout"
              element={<Logout />}
            />
            <Route
              path="/add"
              element={<AddPage />}
            />
            <Route
              path="/export"
              element={<ExportPage />}
            />
            <Route
              path="/import"
              element={<ImportPage />}
            />
            <Route
              path="/master"
              element={<Master />}
            />
            <Route
              path="/learnmore"
              element={<LearnMorePage />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
