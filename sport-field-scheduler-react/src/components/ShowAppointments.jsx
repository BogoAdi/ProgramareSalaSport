import { useEffect, useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const ShowAppointments = () => {
  const [data, setDatas] = useState([]);
  const [tableData, setTableData] = useState([]);
  const columns = [
    { title: "Id", field: "id" },
    { title: "SportFieldId", field: "sportFieldId" },
    { title: "UserId", field: "userId" },
    { title: "TotalPrice", field: "totalPrice", type: "currency" },
    { title: "Hours", field: "hours" },
    { title: "Date And Starting Hour", field: "date", type: "datetime" }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://localhost:44345/api/Appointments');
      setDatas(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <MaterialTable columns={columns} data={data} title="All Appointments" />
    </>
  );
}

export default ShowAppointments;