import * as yup from 'yup';
const errorMessage ='user lowerCase , Uppercase, Digits ';
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const signupSchema =yup.object().shape({

    name: yup.string().max(30).required('name is required!'),
    username: yup.string().min(5).max(30).required('user name is required!'),
    email: yup.string().email('enter a valid email').required('Email required'),
    password: yup.string().min(8).max(25).matches(passwordPattern,{message:errorMessage}).required('password is required '),
    confirmPassword: yup.string().oneOf([yup.ref('password')] , 'password does not match').required(),



})

export default signupSchema ;