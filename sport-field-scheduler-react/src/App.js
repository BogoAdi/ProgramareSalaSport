import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./components/Home";
import SportFields from "./components/SportFields";
import ShowAppointments from "./components/ShowAppointments";
import ShowUsers from "./components/ShowUsers";
import ShowAllSportFields from "./components/ShowAllSportFields";
import AddUserForm from "./components/AddUserForm";
import "./custom.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route path="/sport-fields" exact element={<SportFields />} />
        <Route path="/show-all-appointments" exact element={<ShowAppointments />} />
        <Route path="/show-all-users" exact element={<ShowUsers />} />
        <Route path="/show-all-sport-fields" exact element={<ShowAllSportFields />} />
        <Route path="/add-user-form" exact element={<AddUserForm />} />
      </Routes>
    </Layout>
  );
}

export default App;
