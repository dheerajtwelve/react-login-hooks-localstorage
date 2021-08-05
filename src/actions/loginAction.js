export const loginAction = (data) => {
    return {
     type: 'LOGIN_ACTION',
     payload: data
    }
   }

   export const logoutAction = () => {
    return {
     type: 'LOGOUT_ACTION',
    }
   }