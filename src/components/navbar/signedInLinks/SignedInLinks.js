import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <>
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/login' className="nav-item">Login</Link>
        </>
    )
}
