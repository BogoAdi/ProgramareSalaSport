import { useEffect, useState } from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import ItemCard from './ItemCard';
import Selector from './Selector';


const SportFields = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(4);  

    useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://localhost:44345/api/SportFields');
      setPosts(res.data);
      setLoading(false);
    };
    
    fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

     const paginate = pageNumber => setCurrentPage(pageNumber);
     const itemsPerPage = nr =>setPostsPerPage(nr);
    return (
        <div >
            <h1> SportFields</h1>
            <Selector postsPerPage={itemsPerPage} />
            <ItemCard sportField={currentPosts} loading={loading} />
            <Paginations
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}  
            />
        </div>
    );
};
export default SportFields;