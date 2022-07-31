import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
//import all reducers

//implement reducers as any name
export default combineReducers({
    theme: themeReducer,

})