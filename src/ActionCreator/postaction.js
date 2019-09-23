    
import { FETCH_POSTS, NEW_POST,DEL_POST ,UPDATE_POST} from '../ActionCreator/actionType';


//del
export const deletePost =(id)=>{
    return {
        type:DEL_POST,
        id,
    }}
 export const update =(id)=>{
  return {
    type:UPDATE_POST,
    id,
}
 }
//fetch post
export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };

//createppost method
  export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post
        })
      );
  };