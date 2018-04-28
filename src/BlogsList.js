import React from 'react';
import EachBlog from './EachBlog';

let BlogsList = ({ blogs, removeBlog }) => 
    <div className="allMoviesVdom"> 
        {
            blogs.map(blog =>
                <EachBlog 
                    blog={blog}
                    removeBlog={removeBlog}
                />)   
        }
    </div>

export default BlogsList;