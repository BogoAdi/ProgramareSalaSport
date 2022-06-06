import React from 'react'

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const afffectedByChange = (event, value) => {
        paginate(value);
    }
    return (
        <>
            <Box display="flex" alignItems="center" sx={{mb: 2}}>
                <Stack spacing={1}>
                    <Pagination count={pageNumbers.length} size="large" color="primary" onChange={afffectedByChange} />
                </Stack>
            </Box>

        </>
    )
};
export default Paginations;