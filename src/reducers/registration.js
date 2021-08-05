import {loadState} from '../localStorage';
const initialState =  loadState();

const registrationReducer =  (state=initialState, action) => {
    const { type, payload } = action;
    console.log(type)
    console.log(payload)
    console.log(state)
    switch (type) {
        case 'REGISTRATION_ACTION': {
            return [...state,  payload ]
        }
        default:
      return state;

    }
}
export default registrationReducer;