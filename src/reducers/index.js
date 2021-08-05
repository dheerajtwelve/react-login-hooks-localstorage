import { combineReducers } from "redux";
import registrationReducer from "./registration";
import loginReducer from './login'
export default combineReducers({
    register: registrationReducer,
    login:loginReducer
});