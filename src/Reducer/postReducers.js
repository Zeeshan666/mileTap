
import { FETCH_POSTS, NEW_POST ,DEL_POST, UPDATE_POST} from '../ActionCreator/actionType';


const initialState = {
  posts: [],
  post: {},
  postPerPage:10,
   currentPage:1
   
};

export default function(state = initialState, action) {

  console.log(action)
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
         posts :action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        post: action.payload
      };
      case DEL_POST:
      {
        let newPosts = state.posts.filter(post => {
          return post.id !== action.id
        });
        return {
          ...state,
          posts: newPosts
        }
      }

      case UPDATE_POST :

      {
        let todos=state.posts.find(e=>{
          return e.id===action.id
            })
          console.log(todos.body +"ye match")
          let b = prompt('write for title')
          let a =prompt("write for body");
         
             if(a!==""){
            let update={
              title:b,
              body:a,
              id:action.id,
              }      
              let z = state.posts.map((v)=>{
                if(v.id!==action.id){
                  return v}
              else{
               return update
              }
              })
             return{
               ...state,
               posts:z
             }

            }
          }
  
    default:
      return state;
  }
}