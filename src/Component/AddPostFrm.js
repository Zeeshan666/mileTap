import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost } from '../ActionCreator/postaction' 
 

 class AddPostFrm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''    
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
           body: this.state.body
          };         
          this.props.createPost(post)

          this.setState({
            title:"",
            body:""
          })
       
        }
        componentWillReceiveProps(nextProps) {
          if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
          }

        }
    render() {
        return (
             <div className="container">
        <form className="white" onSubmit={this.handleSubmit}  >
          <h5 className="grey-text text-darken-3">ADD NEW BOOKS</h5>
          <div className="input-field">
            <label htmlFor=" NAME"> NAME</label>
            <input  type="text" id="title"  value={this.state.title} onChange={this.handleChange}  />
          </div>
          <div className="input-field">
            <label htmlFor="discription"> Discription</label>
            <input  type="text" id="body"  value={this.state.body} onChange={this.handleChange}  />
          </div>
          <div className="input-field">
            <button className="btn BLUE lighten-1 z-depth-0"> ADD </button>
          </div>
        </form>
        
      </div>
        )
    }
}



export default connect(null,{createPost})(AddPostFrm)