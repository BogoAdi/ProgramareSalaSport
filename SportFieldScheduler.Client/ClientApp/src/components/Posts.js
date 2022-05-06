import React from 'react'

const Posts = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return  (
        <ul> { posts.map(post =>(
            <li key={post.id} > 
            {post.id}
            </li>
        ))}
        </ul>
    )
}
export default Posts;