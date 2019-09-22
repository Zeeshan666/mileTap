
import { FETCH_POSTS, NEW_POST ,DEL_POST} from '../ActionCreator/actionType';


const initialState = {
  posts: [],
  post: {},
  postPerPage:10,
   currentPage:1
   
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}