import React, { useEffect} from 'react'
import { useHistory} from 'react-router-dom';
export default function Profile() {
    let data = JSON.parse(localStorage.getItem('profileData'))
    const history = useHistory();
    const setData = () => {
        const data = JSON.parse(localStorage.getItem('profileData'))
        if (!data) {
            history.push('/login')
        }
    }
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem('profileData')
        history.push('/login')
    }
    useEffect(() => {
        setData();
    }, [data])
    return (
        <div className="container text-center mt-5">
          Welcome  {data?.name}<br />
          Your Email is {data?.email}<br />
          Your Phone No is {data?.phone}
          <br /><br />
          <button onClick={logout} className="btn btn-dark btn-lg btn-block">Logout</button>
        </div>
        
    )
}
