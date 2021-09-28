import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState<Users['email']>('');
    const [password, setPassword] = useState<Users['password']>('');
    const [first_name, setFirstName] = useState<Users['name']>('');

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { email, password, name: first_name, role: 'guest' })
            .then(token => {
                localStorage.clear(),
                history.push("/login")
            })
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 bg-dark border rounded mt-2">
                    <form className="form-group">
                        <h3 className="text-light text-center">Register</h3>
                        <label className="text-light">Name</label>
                        <input className="form-control" type="text" value={first_name} onChange={e => setFirstName(e.target.value)} />
                        <label className="text-light">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                        <label className="text-light">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
                        <div className="d-flex justify-content-center mt-2">
                            <button onClick={handleRegister} className="btn btn-light">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Register;
