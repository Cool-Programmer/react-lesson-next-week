import AppRegistration from '@mui/icons-material/AppRegistration';

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
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" className={`form-control`} name="first_name" id="firstName" />
                                </div>
                            </div>
                        
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name *</label>
                                    <input type="text" className={`form-control`} name="last_name" id="lastName" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label htmlFor="emailAddressReg">Email Address *</label>
                                    <input type="email" className={`form-control`} name="email_address_reg" id="emailAddressReg" autoComplete="username" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="passwordReg">Password *</label>
                                    <input type="password" className={`form-control`} name="password_reg" id="passwordReg" autoComplete="new-password" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="confirmPasswordReg">Confirm Password *</label>
                                    <input type="password" className={`form-control`} name="confirm_password_reg" id="confirmPasswordReg" autoComplete="new-password" />
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
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration