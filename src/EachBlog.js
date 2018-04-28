import React from 'react';
import DeleteButton from './DeleteButton';

let EachBlog = ({ blog, removeBlog }) => 
    <div className="aMovieVdom">
        <h2>{blog.title}</h2>
        <h4>{blog.director}</h4>
        <p>{blog.plot}</p>
        <DeleteButton 
            blog={blog}
            removeBlog={removeBlog}
        />
        <EditButton
        />
    </div>

export default EachBlog;