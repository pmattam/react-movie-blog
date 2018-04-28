import React from 'react';
import AddMovieForm from './AddMovieForm';

let AddMovieButton = ({ blogs, showForm, setStateForForm, saveNewBlog }) => 
    <div className="add-div">
        <button className="addMovieButton" onClick={() => setStateForForm(true)}>Add Movie</button>
        { showForm && 
                <AddMovieForm
                    blogs={blogs} 
                    showForm={showForm}
                    setStateForForm={setStateForForm} 
                    saveNewBlog={saveNewBlog}
                />
        }
    </div>

export default AddMovieButton;