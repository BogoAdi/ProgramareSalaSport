import MaterialTable from "material-table";
import React, { Component } from 'react';

const data = [
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Surname", field: "surname" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
];

 const ShowAllSportFields = () => {
  return (
    <MaterialTable  columns={columns} data={data} title="Basic Table"/>
  );
}
export default ShowAllSportFields;/*  <MaterialTable title="Basic Table" columns={columns} data={data} />*/