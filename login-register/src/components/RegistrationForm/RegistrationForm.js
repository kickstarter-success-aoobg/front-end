import React from 'react';
export default function RegistrationForm(props) {

    const {
        error,
        values,
        onInputChange,
        onSubmit
    } = props;

  return(
        <div className="card col-lg-4 login-card mt-2 hv-center">
            <span className="error">{error}</span>
            <form onSubmit={onSubmit}>
                <div className="form-group text-left">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={values.email}
                    onChange={onInputChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                        value={values.password} onChange={onInputChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
                        name="confirmPassword" value={values.confirmPassword} onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}