import LoginIcon from '@mui/icons-material/Login';

import { Formik, Form, ErrorMessage } from 'formik';
import { loginValidationSchema } from '../common/ValidationSchemes';

function Login() {
  return (
    <>
        <div className="container">
            <h2 className='heading'>
                <LoginIcon fontSize='large'/>
                Login
            </h2>

            <div className="row">
                <div className="col-md-6 offset-md-4">
                    <Formik
                        initialValues={{ email_address: '', password: '' }}
                        validationSchema={loginValidationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({values, errors, touched, handleChange}) => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label htmlFor="emailAddress">Email Address *</label>
                                            <input type="email" value={values.email_address} className={`form-control`} onChange={handleChange} name="email_address" id="emailAddress" autoComplete="username" />
                                            <ErrorMessage name="email_address" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label htmlFor="password">Password *</label>
                                            <input type="password" value={values.password} className={`form-control`} onChange={handleChange} name="password" id="password" autoComplete="current-password" />
                                            <ErrorMessage name="password" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-warning">Log In</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login