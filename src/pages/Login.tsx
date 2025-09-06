import LoginIcon from '@mui/icons-material/Login';

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
                    <form>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email Address *</label>
                                    <input type="email" className={`form-control`} name="email_address" id="emailAddress" autoComplete="username" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label htmlFor="password">Password *</label>
                                    <input type="password" className={`form-control`} name="password" id="password" autoComplete="current-password" />
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
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login