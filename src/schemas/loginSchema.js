
import * as yup from 'yup';
const errorMessage ='user lowerCase , Uppercase, Digits ';
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const loginSchema =yup.object().shape({


    username: yup.string().min(5).max(30).required('user name is required!'),
    password: yup.string().min(8).max(30).matches(passwordPattern,{message:errorMessage}).required(),

})

export default loginSchema;