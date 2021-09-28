import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState<Users['email']>('');
    const [password, setPassword] = useState<Users['password']>('');
    
    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password})
            .then(token => {
                localStorage.setItem('token', token),
                history.push("/profile")
            })
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 bg-dark border rounded mt-2">
                    <form className="form-group">
                        <h3 className="text-light text-center">Login</h3>
                        <label  className="text-light">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                        <label  className="text-light">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                        <div className="d-flex justify-content-center mt-2">
                            <button onClick={handleLogin} className="btn btn-light">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;
