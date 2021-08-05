export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('formData');
      if (serializedState === null) {
        localStorage.setItem('formData', []);
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
    }
  };

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('formData', serializedState);
    } catch {
        console.log('not written in db')
    }
  };


  export const loadLoginState = () => {
    try {
      const serializedState = localStorage.getItem('userData');
      if (serializedState === null) {
        const initialState = {
          isLoggedIn: false,
          profileData: {}
        }
        localStorage.setItem('userData', JSON.stringify(initialState));
        return initialState;
      }
      return JSON.parse(serializedState);
    } catch (err) {
    }
  };

  export const saveLoginState = (state) => {
    try {
      let initialState = {
        isLoggedIn: true,
        profileData: state
      }
      if(state.save){
        const serializedState = JSON.stringify(initialState);
        localStorage.setItem('userData', serializedState);
      } else {
          const initialState1 = {
            isLoggedIn: false,
            profileData: {}
          }
          localStorage.setItem('userData', JSON.stringify(initialState1));
      }
    } catch {
        console.log('not written in db')
    }
  };

