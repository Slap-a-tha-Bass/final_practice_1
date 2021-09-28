import React from 'react';
import { Redirect, Route } from 'react-router';
import Swal from 'sweetalert2';

const Private = ({ children, ...rest }: PrivateProps) => {
    const TOKEN = localStorage.getItem('token');

    if (!TOKEN) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please login to continue',
            icon: 'warning',
            confirmButtonText: 'Understood'
        })
        return <Redirect to="/login" />
    } else {
        return <Route {...rest}>{children}</Route>
    }
}
interface PrivateProps {
    path: string,
    exact?: boolean,
    children: React.ReactNode
}
export default Private;
