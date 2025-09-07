import AppRegistration from '@mui/icons-material/AppRegistration';

import { Formik, Form, ErrorMessage } from 'formik';

import { registrationValidationSchema } from '../common/ValidationSchemes';

function Registration() {
  return (
    <>
        <div className="container">
            <div className="row">
                <h2 className='heading'>
                    <AppRegistration fontSize='large'/>
                    Registration
                </h2>

                <div className="col-md-8 offset-md-3">
                    <Formik
                        initialValues={
                            {
                                first_name: '', 
                                last_name: '', 
                                email_address_reg: '', 
                                password_reg: '', 
                                confirm_password_reg: ''
                            }
                        }
                        validationSchema={registrationValidationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({values, errors, touched, handleChange}) => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name *</label>
                                            <input type="text" value={values.first_name} onChange={handleChange} className={`form-control`} name="first_name" id="firstName" />
                                            <ErrorMessage name="first_name" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name *</label>
                                            <input type="text" value={values.last_name} className={`form-control`} onChange={handleChange} name="last_name" id="lastName" />
                                            <ErrorMessage name="last_name" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label htmlFor="emailAddressReg">Email Address *</label>
                                            <input type="email" value={values.email_address_reg} className={`form-control`} onChange={handleChange} name="email_address_reg" id="emailAddressReg" autoComplete="username" />
                                            <ErrorMessage name="email_address_reg" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="passwordReg">Password *</label>
                                            <input type="password" value={values.password_reg} className={`form-control`} onChange={handleChange} name="password_reg" id="passwordReg" autoComplete="new-password" />
                                            <ErrorMessage name="password_reg" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="confirmPasswordReg">Confirm Password *</label>
                                            <input type="password" value={values.confirm_password_reg} className={`form-control`} onChange={handleChange} name="confirm_password_reg" id="confirmPasswordReg" autoComplete="new-password" />
                                            <ErrorMessage name="confirm_password_reg" component="span" className="text-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-warning">Sign Up</button>
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

export default Registration