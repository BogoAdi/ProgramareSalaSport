import { useEffect, useState } from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import ItemCard from './ItemCard';
import Selector from './Selector';
import SearchBar from './SearchBar';

const SportFields = () => {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [searchLength, setSearchLength] = useState(0);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://localhost:44360/api/SportFields');
            setPosts(res.data);
            setFilterPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
       
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPosts.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);
    const itemsPerPage = nr => setPostsPerPage(nr);
    const handleChanges = (value) => {
        console.log(value);  
        setFilterPosts(posts.filter(fields => fields.name.includes(value)));
    }
    return (
        <div >

            <h1> SportFields</h1>
            <SearchBar placeholder="search..." onChange={(event) => handleChanges(event.target.value)} />
            <Selector postsPerPage={itemsPerPage} />
            <ItemCard sportField={currentPosts} loading={loading} />
            <Paginations
                postsPerPage={postsPerPage}
                totalPosts={filterPosts.length}
                paginate={paginate}
            />
        </div>
    );
};
export default SportFields;