import { Link } from '@inertiajs/inertia-react';
import React from 'react'

export default function Dashboard({ auth }) {
    console.log(auth);

    return (
        <>
            <div>Welcome back <strong>{auth.user.username}</strong> you are logged in!</div>
            <Link href={route('logout')}>Logout</Link>
        </>
    )
}
