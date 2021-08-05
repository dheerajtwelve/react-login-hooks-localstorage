import React, { useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { logoutAction} from '../actions/loginAction';
export default function Profile() {
    // let data = JSON.parse(localStorage.getItem('userData'))
    let loginData = useSelector(state => state.login)
    const history = useHistory();
    const dispatch = useDispatch();
    const setData = () => {
        const data = loginData
        if (!data.isLoggedIn) {
            history.push('/login')
        }
    }
    function logout(e) {
        e.preventDefault();
        dispatch(logoutAction())
        history.push('/login')
    }
    useEffect(() => {
        setData();
    }, [loginData])
    return (
        <div className="container text-center mt-5">
          Welcome  {loginData?.profileData[0]?.name}<br />
          Your Email is {loginData?.profileData[0]?.email}<br />
          Your Phone No is {loginData?.profileData[0]?.phone}
          <br /><br />
          <button onClick={logout} className="btn btn-dark btn-lg btn-block">Logout</button>
        </div>
        
    )
}
