import MaterialTable from "material-table";
import {useEffect,useState} from 'react';
import axios from 'axios';

 const ShowAllSportFields = () => {

  const [data, setData]=useState([]);

  const columns = [
    {title:"Id", field:""},
    { title: "Name", field: "name" },
    { title: "",  field:"img",render: item => <img src={item.img} alt="image" border="3" height="100" width="100" />},
    {title : "Address", field: "address"},
    { title: "City", field: "city" },
    {title: "Category", field: "category"},
    { title: "PricePerHour", field: "pricePerHour" },
    {title: "Description", field: "description"}
  ];

  useEffect(() => {
    const fetchGets = async () => {
      const res = await axios.get('https://localhost:7242/api/SportFields');
      setData(res.data);
      
    };
    
    fetchGets();
    }, []);


  return (
    <>
    <MaterialTable  columns={columns} data={data} title="SportFields"/>
    </> 
  );
}
export default ShowAllSportFields;/*  <MaterialTable title="Basic Table" columns={columns} data={data} />*/