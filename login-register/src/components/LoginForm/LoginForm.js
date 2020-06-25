import React from 'react';
export default function LoginForm(props) {

    const {
        error,
        values,
        onInputChangeLogin,
        onSubmitLogin
    } = props;

  return(
        <div className="card col-4 col-lg-4 login-card mt-2 hv-center">
            <span className="error">{error}</span>
            <form onSubmit={onSubmitLogin}>
                <div className="form-group text-left">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={values.email}
                    onChange={onInputChangeLogin} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                        value={values.password} onChange={onInputChangeLogin} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}