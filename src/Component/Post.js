import React, { Component } from 'react'
 import {connect} from  'react-redux';
 
 class Post extends Component {
    clickHandler=()=>{
       this.props.history.push('/home')
    }
  render() {
      console.log(this.props)
        const mainpost = this.props.singlePost ? (
      <div className="App card post " key={this.props.singlePost.id}>
       <div className="card-content center">
          <span className=" orange-text uppercase ">{this.props.singlePost.title}</span>     
          <h5 className="purple-text ">{this.props.singlePost.body}</h5>
          <button className=" btn btn-large purple" onClick={this.clickHandler}> back to  home</button>   
        </div>
      </div>

): ( <div className="center">
    <p>waiting for new post...</p>
   </div>   
)
  return (
      <div className="container">
        {mainpost}
      </div>
    )
  }
}
const mapStateToProps =(state,ownProps)=>{
   
    let id = ownProps.match.params.post_id;
 let mypro =state.postReducer.posts.find(post=>post.id ==id)
 console.log(mypro)
    return{

        singlePost :mypro
    }  
}



export default connect(mapStateToProps)(Post);