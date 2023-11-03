import { useState } from "react";
import styles from "./signup.module.css";
import TextInput from "../../components/textinput/textinput";
import signupSchema from "../../schemas/signupSchema";
import { useFormik } from "formik";
import {signup } from "../../api/internal";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Signup() {


const navigate= useNavigate();

const  dispatch = useDispatch();

const [error,setError]=useState('');


  const handleSignup = async () => {
    const data = {

      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    const response = await signup(data);
if (response.status===201) {
// set user 
const user = {
_id :response.data.user._id,
email :response.data.user.email,
username:response.data.user.username,
auth :response.data.auth,
}
 
dispatch (setUser(user)); 
navigate ('/')
}
else if(response.code=== 'ERR_BAD_REQUEST'){
setError(response.response.data.errorMessage)
   
}

  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name:'',  
      username: "",
      email: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: signupSchema,
  });

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupHeader}> Create an account</div>

      <TextInput
        type="text"
        value={values.name}
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="name"
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
      />


      <TextInput
        type="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />


<TextInput
        type="text"
        value={values.email}
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="email"
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
      />



      <TextInput
        type="password"
        value={values.password}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="password"
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />

<TextInput
        type="password"
        value={values.confirmPassword}
        name="confirmPassword"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="confirmPassword"
        error={errors.confirmPassword&& touched.confirmPassword ? 1 : undefined}
        errormessage={errors.confirmPassword}
      />


      <button className={styles.signupButton} onClick={handleSignup}
        disabled={
         !values .username  ||
         !values.password ||
         !values.name ||
         !values.confirmPassword ||
         !values.email ||
          errors.username || 
          errors.name || 
          errors.confirmPassword ||
          errors.email ||
          errors.password}>
        Sign up
      </button>
      <span>
       Already have an account ?{" "}
        <button className={styles.login} onClick={()=> navigate('/login')}>Log in</button>
      </span>

{error != '' ? <p className={styles.message}>{error}</p> : ''}

    </div>
  );
}

export default Signup;
