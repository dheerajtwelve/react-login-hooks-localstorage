import { loadState } from '../localStorage';
const initialState = {};
const registerData = loadState();
const loginReducer =  (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN_ACTION': {
            // const registerData = state.register;
            if(registerData.find(data => data.email === payload.email && data.password === payload.password )) {
                let userData = registerData.filter(data => data.email === payload.email && data.password === payload.password);
                userData.save = true
                return userData
            }
            return {save: false}
        }

        case 'LOGOUT_ACTION': {
            return {save: false}
        }
        default:
      return state;
    }

}
export default loginReducer;