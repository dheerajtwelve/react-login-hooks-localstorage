import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {saveState , loadState, loadLoginState, saveLoginState} from './localStorage';
let initialState = {
    register: [],
    login: []
}

initialState.register = loadState();
initialState.login = loadLoginState();

// export default function configureStore(initialState) {
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
 );

 store.subscribe(() => {
    saveState(
        store.getState().register
    );
    saveLoginState(
      store.getState().login
    )
  })

 export default  store;
