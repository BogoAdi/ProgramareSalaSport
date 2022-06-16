import { useEffect, useState } from 'react';
import Paginations from './Paginations';
import axios from 'axios';
import ItemCard from './ItemCard';
import Selector from './Selector';
import SearchBar from './SearchBar';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const SportFields = () => {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [categories, setCategories] = useState([]);
    const [searchMessage, setSearchMessage] = useState("");
    const [categorySelected, setCategorySelected] = useState("All");

    const [selectedChip, setSelectedChip] = useState("all");
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
    // const filterAndSearch = (value, category) => {

    //     setCategorySelected(category);
    //     setSearchMessage(value);
    //     console.log(filterPosts);
    // }
    const handleChanges = (value) => {
        console.log(value);
        setSearchMessage(value);
    }

    useEffect(() => {
        console.log(selectedChip)
    }, [selectedChip])
    useEffect(() => {
        if (categorySelected !== "All") {
            setFilterPosts(posts.filter(element => element.name.includes(searchMessage) && element.category === categorySelected));
        } else {
            setFilterPosts(posts.filter(fields => fields.name.includes(searchMessage)));
        }
    }, [searchMessage, categorySelected])



    return (
        <div >
            <div>
                <h1 text-align="center" > SportFields</h1>
            </div>
            <SearchBar placeholder="search..." onChange={(event) => handleChanges(event.target.value)} />
            <Box sx={{ mt: "10px", mb: "10px" }}>
                <Chip label="All" sx={{ mr: "10px" }} variant="outlined" onClick={() => setCategorySelected('All')} />
                {categories.map((item, index) => (
                    selectedChip === item ?
                        (
                            <Chip label={item} key={item} sx={{ mr: "10px",  }}
                                onClick={() => {
                                    setCategorySelected(item);
                                    setSelectedChip(item);
                                    // sx={{bgcolor: 'primary'}};
                                }
                                }
                            />
                        )
                        :
                        (
                            <Chip label={item} key={item} sx={{ mr: "10px" }}
                                onClick={() => {
                                    setCategorySelected(item);
                                    setSelectedChip(item);
                                    // sx={{bgcolor: 'primary'}};
                                }
                                }
                            />
                        )

                ))
                }
            </Box>
            {filterPosts.length !== 0 &&
                <>
                    <Selector postsPerPage={itemsPerPage} />
                    <ItemCard sportField={currentPosts} loading={loading} />

                    <Paginations
                        postsPerPage={postsPerPage}
                        totalPosts={filterPosts.length}
                        paginate={paginate}
                    />
                </>
            }
            {filterPosts.length === 0 &&
                <>
                    <h3> No search results </h3>
                </>

            }
        </div>
    );
};
export default SportFields;