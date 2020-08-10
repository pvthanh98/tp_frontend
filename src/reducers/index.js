import { combineReducers } from 'redux';
import messages from './chat/message';
import user from './user';
const myReducer = combineReducers({
    user,
    messages: messages
})
export default myReducer;