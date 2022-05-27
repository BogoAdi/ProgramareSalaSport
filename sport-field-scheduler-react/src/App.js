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
import Proba from "./components/proba";
import SportFieldForm from "./components/SportFieldForm";
import UpdateUser from "./components/UpdateUser";
import AppointmentsCalendar from "./components/AppointmentsCalendar";


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sport-fields" exact element={<SportFields />} />
        <Route path="/show-all-appointments" exact element={<ShowAppointments />} />
        <Route path="/show-all-users" exact element={<ShowUsers />} />
        <Route path="/show-all-sport-fields" exact element={<ShowAllSportFields />} />
        <Route path="/add-user-form" exact element={<AddUserForm />} />
        <Route path="/select-date/:id" exact element={<Proba />} />
        <Route path="/sport-field-form" exact element={<SportFieldForm />} />
        <Route path="/update-user-form/:id" exact element={<UpdateUser />} />
        <Route path="/appointments-calendar" element={<AppointmentsCalendar/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
