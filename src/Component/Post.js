import React, { Component } from 'react'
 import {connect} from  'react-redux';
 import Swal from 'sweetalert2'
 import {deletePost, update} from '../ActionCreator/postaction'
 class Post extends Component {
    clickHandler=()=>{
       this.props.history.push('/home')
    }
          
updateHandler=()=>{
  this.props.update(this.props.singlePost.id)
}

delHandler=()=>{
 this.props.deletePost(this.props.singlePost.id);
 this.props.history.push('/home')
 Swal.fire({
  type: 'error',
  title: 'delete',
  text: 'item remove successfully!',

})
}
  render() {
      console.log(this.props)
        const mainpost = this.props.singlePost ? (
      <div className="App card post " key={this.props.singlePost.id}>
       <div className="card-content center">
          <span className=" orange-text uppercase ">{this.props.singlePost.title}</span>     
          <h5 className="purple-text ">{this.props.singlePost.body}</h5>
          <button className=" btn  purple" onClick={this.clickHandler}> back to  home</button> 
          <button className=" btn red" onClick={this.delHandler}> delete post</button>
           <button className=" btn green" onClick={this.updateHandler}> update</button>  
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
const mapDispatchToProps = (dispatch)=>{
  return{
   deletePost : (id)=>dispatch(deletePost(id)),
    update: (id)=>dispatch(update(id))

}
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);