import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import Pagination from './Pagination';
import Posts from './Posts';
import axios from 'axios';


const SportFields = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);  

    useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://localhost:7242/api/SportFields');
      setPosts(res.data);
      setLoading(false);
    };
    
    fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

     const paginate = pageNumber => setCurrentPage(pageNumber);


/*
    return (
        <div>
            <ItemCard 
            name = "Card Name"
            imgUrl = "https://www.integralturf.com/wp-content/uploads/2018/01/Synthetic-turf-Tennis-Court-Construction.jpg"
            pricePerHour = "200"
            City = " Timisoara "
            />
        </div>

    )
}
*/
    return (
        <div >
            <h1> SportFields</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}  
            />
        </div>
    );
};
export default SportFields;