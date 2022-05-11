import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const DeleteObject =(props) =>{
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const fetchInfo = async () => {
          const res = await axios.get(`https://localhost:7242/api/Users/${props.id}`);
          setInfo(res.data);
        };
  fetchInfo();
}, []);

return (
    <div>
        {props.name}
        </div>
)

}


export default DeleteObject;