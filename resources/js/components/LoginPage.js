import React, { useState } from 'react';
import $ from 'jquery';

import useToken from './useToken';

async function login(credentials) {
    const csrfToken = $('meta[name="csrf-token"]')[0].content;
    return fetch('login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": csrfToken
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const LoginPage = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await login({
          email,
          password
        });

        if (result.token) {
            setToken(result.token);
        }
    }

    const {token} = useToken();

    if (token) {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>
    
                        <div className="card-body">
                            Logged in 
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>
    
                        <div className="card-body">
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
    
                                    <div className="col-md-6">
                                        <input id="email" onChange={e => setEmail(e.target.value)} type="email" className="form-control" name="email" required autoComplete="email" autoFocus />
                                    </div>
                                </div>
    
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Password</label>
    
                                    <div className="col-md-6">
                                        <input id="password" onChange={e => setPassword(e.target.value)} type="password" className="form-control" name="password" required autoComplete="current-password" />
                                    </div>
                                </div>
    
                                <div className="form-group row">
                                    <div className="col-md-6 offset-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />
    
                                            <label className="form-check-label">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;