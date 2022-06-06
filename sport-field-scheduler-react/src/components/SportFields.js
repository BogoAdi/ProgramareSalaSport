import { useEffect, useState } from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import ItemCard from './ItemCard';
import Selector from './Selector';
import SearchBar from './SearchBar';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const SportFields = () => {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [categories, setCategories] = useState([]);
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


    useEffect(() => {
        const getAllCategories = () => {
            let array = [];
            posts.forEach(element => {
                const t = array.find(data => data === element.category);
                if (t === undefined)
                    array.push(element.category);

            });
            // console.log(array);
            setCategories(array);
        }
        getAllCategories();
    }, [posts]);

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
            <Box>
                <Button onClick={() => setFilterPosts(posts)}>All
                </Button>
                {categories.map((item, index) => (
                    <Button key={index}
                        onClick={() => setFilterPosts(posts.filter(element => element.category === item))}
                    >
                        {item}

                    </Button>
                ))
                }
            </Box>
            <Paginations
                postsPerPage={postsPerPage}
                totalPosts={filterPosts.length}
                paginate={paginate}
            />
        </div>
    );
};
export default SportFields;