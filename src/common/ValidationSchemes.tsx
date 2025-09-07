import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
    email_address: Yup.string().email('Invalid email address').required('Email address is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const registrationValidationSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'First Name must be at least 2 characters').required('First Name is required'),
    last_name: Yup.string().min(2, 'Last Name must be at least 2 characters').required('Last Name is required'),
    email_address_reg: Yup.string().email('Invalid email address').required('Email Address is required'),   
    password_reg: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirm_password_reg: Yup.string()
        .oneOf([Yup.ref('password_reg')], 'Passwords must match')
        .required('Confirm Password is required'),
});

export { loginValidationSchema, registrationValidationSchema };