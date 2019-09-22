import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Addbookfrm from './AddPostFrm'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import {fetchPosts ,deletePost} from '../ActionCreator/postaction'
import Pagination from './Pagination'
class Home extends Component{

state={
  currentPage:1
}
componentWillMount(){
  this.props.fetchPosts();
}   


paginate=( pageNumber)=>{   
this.setState({
  currentPage:pageNumber
})
}
       

clickHandler=()=>{
 this.props.deletePost(this.props.posts[0].id);
 Swal.fire({
  type: 'error',
  title: 'delete',
  text: 'item remove successfully!',

})

}

componentWillReceiveProps(nextProps) {
  if (nextProps.newPost) {
    this.props.posts.unshift(nextProps.newPost);
  }
}

render(){
  const indexOfLastPost = this.state.currentPage * this.props.postPerPage;
  console.log(indexOfLastPost)
  const indexOfFirstPost = indexOfLastPost - this.props.postPerPage;
  const maping  = this.props.posts.slice(indexOfFirstPost,indexOfLastPost)
  console.log(this.props.posts.length)
  const postlist =maping.map(post=>{
    return (
      <div className="App card post " key={post.id}>
       <div className="card-content center">
         <Link  to={'/' + post.id}>
          <span className=" orange-text uppercase ">{post.title}</span>
          <h5 className="purple-text ">{post.body}</h5>
          <button className=" btn orange" > read </button>
           </Link>
           <button className=" btn red" onClick={this.clickHandler}> delete post</button>
        </div>
      </div>
    )
  })

  return (
    <div className="container home center">
      <Addbookfrm/>
      <br/>
      <hr/>
        {postlist}
        
        <Pagination
        postsPerPage={this.props.postPerPage}
         totalPosts={this.props.posts.length}
        paginate={this.paginate}
        />
    </div>

  )
}

}

const mapStateToProps =(state)=>{
  return{
    posts:state.postReducer.posts,
    newPost: state.postReducer.post,
    postPerPage:state.postReducer.postPerPage,
    currentPage:state.postReducer.currentPage,
  }

}
const mapDispatchToProps = (dispatch)=>{
  return{
    fetchPosts : ()=>dispatch(fetchPosts()),
   deletePost : (id)=>dispatch(deletePost(id))
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Home)

