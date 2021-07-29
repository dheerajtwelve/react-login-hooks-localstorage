import { useState } from 'react';
import { useHistory} from 'react-router-dom';
const LoginuseForm = (validate) => {


const [values, setValues] = useState({});
const [errors, setErrors] = useState({});
const [alertMessage, setAlertMessage] = useState({hidden: true, message:''})
const history = useHistory();
const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let ob = values
    let olddata = localStorage.getItem('formData');
    if(olddata==null){
        setAlertMessage({hidden: false, message:'Please verify Email and password once again!'})
        }else {
            let oldArr = JSON.parse(olddata)
            if(oldArr.find(data => data.email === values.email && data.password === values.password )) {
                console.log('login successful');
                let userData = oldArr.filter(data => data.email === values.email && data.password === values.password);
                userData = userData[0];
                userData.isLoggedIn = true;
                localStorage.setItem('profileData', JSON.stringify(userData))
                console.log(userData);
                history.push('/home')
            }else {
                setAlertMessage({hidden: false, message:'Please verify Email and password once again!'})
            }
        }
    }

const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values));
    };

return {
    handleChange,
    handleSubmit,
    values,
    errors,
    alertMessage
    }
};

export default LoginuseForm;