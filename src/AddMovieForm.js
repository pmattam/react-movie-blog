import React from 'react';
import { createNewBlogTitle, createNewBlogDirector, createNewBlogPlot } from './lib/createNewBlog';

let AddMovieForm = ({ blogs, showForm, setStateForForm, saveNewBlog }) => {
    let newBlog = {id: `${blogs.length+1} `};
    return (
        <div className="movie-form">
            <form>
                <input className="title" placeholder="title" onChange={(event) => createNewBlogTitle(newBlog, event.target.value)}/>
                <input className="director" placeholder="director" onChange={(event) => createNewBlogDirector(newBlog, event.target.value)}/>
                <input className="plot" placeholder="plot" onChange={(event) => createNewBlogPlot(newBlog, event.target.value)}/>
                <button className="save-btn" onClick={() => saveNewBlog(newBlog)}>Submit</button>
            </form>
        </div>
    );
};

export default AddMovieForm;