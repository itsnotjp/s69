import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout() {

    const { unsetUser } = useContext(UserContext);


    unsetUser();


    return (
        <Navigate to='/login' />
    )

}