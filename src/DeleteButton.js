import React from 'react';

let DeleteButton = ({ blog, removeBlog }) => 
    <button className="addDelButton" onClick={() => removeBlog(blog)}>Delete</button>

export default DeleteButton;