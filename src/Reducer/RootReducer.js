import { combineReducers } from 'redux';
import postReducer from './postReducers'


const rootReducer = combineReducers({
    postReducer:postReducer
  });
  
  export default rootReducer