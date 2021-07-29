
import { useState } from 'react';

const useForm = (validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState({hidden: true, message:''})
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  // const handleSubmit = (event) => {
  //   if (event) event.preventDefault();
  //   // setIsSubmitting(true);

  // };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let ob = values
    let olddata = localStorage.getItem('formData');
    if(olddata==null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formData', JSON.stringify(olddata));
      setAlertMessage({hidden: false, message:'Registeration Successfully, Please login'})
      clearForm();
    }else{
      let oldArr = JSON.parse(olddata)
      if(oldArr.find(data => data.email === values.email)) {
        setAlertMessage({hidden: false, message:'Email address already exist'})
      }
      else {
        oldArr.push(ob)
        localStorage.setItem("formData", JSON.stringify(oldArr));
        setAlertMessage({hidden: false, message:'Registeration Successfully, Please Login'})
        clearForm();
      }
    }
  }

  const clearForm = () => {
    setValues({})
    setErrors({})
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

export default useForm;