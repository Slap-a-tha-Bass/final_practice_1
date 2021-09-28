import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState<Users['id']>(null);
    
    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }

    useEffect(() => {
        apiService('/api/users')
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h2 className="text-center">{user}</h2>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <button onClick={handleSignOut} className="btn btn-dark mx-2">Sign out</button>
            </div>
        </div>
    )
}

export default Profile;
