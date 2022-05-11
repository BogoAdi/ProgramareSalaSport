import { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentLine from './AppointmentLine'

const ShowAppointments = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get('https://localhost:7242/api/Appointments');
          setPosts(res.data);
        };
        
        fetchPosts();
        }, []);
        return (
            <div >
                <h1> Appointments</h1>
                <AppointmentLine posts={posts} />
            </div>
        );
}
export default ShowAppointments;