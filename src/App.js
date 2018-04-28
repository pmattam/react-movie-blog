import React, { Component } from 'react';
import moviesBlogsList from './lib/moviesBlogsList';
import Title from './Title';
import BlogsList from './BlogsList';
import AddMovieButton from './AddMovieButton';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          blogs: moviesBlogsList,
          showForm: null
      }
  }

  render() {
      let { blogs, showForm } = this.state;

      let removeBlog = (rmBlog) => {
        // let id = rmBlog.id;
        let { id } = rmBlog;
        let blogsAfterRemovedBlog = blogs.filter(blogFromBlogs => id !== blogFromBlogs.id);
        this.setState({
          blogs: blogsAfterRemovedBlog
        })
      }

      let setStateForForm = (value) => {
          this.setState({ showForm: value})   
      };

      let saveNewBlog = (newBlog) => {
          if(newBlog.title && newBlog.director && newBlog.plot) {
              blogs.push(newBlog);
          }  
          this.setState({ 
              blogs: blogs,
              showForm: null
           })
      };
      
      return (
          <div>
              <Title />
              <BlogsList 
                  blogs={blogs}
                  removeBlog={removeBlog}
              />
              <AddMovieButton 
                  blogs={blogs}
                  showForm={showForm}
                  setStateForForm={setStateForForm}
                  saveNewBlog={saveNewBlog}
              />     
              <Footer />
          </div>
      )      
  }
}

export default App;
