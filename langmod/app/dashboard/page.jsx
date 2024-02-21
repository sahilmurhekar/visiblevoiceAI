"use client"

import React from 'react'
import "../styles/navbar.css"
import { initFirebase } from '../firebase/firebase';

import { signOut } from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation';

const page = () => {
    initFirebase();

    const auth = getAuth();
    const [user, loading] = useAuthState(auth)
    const router = useRouter();


    if (loading) {
        return <div>Loading.....</div>
    }
    if (!user) {
        router.push("/")
        return <div>Please  Sign in</div>
    }


    return (
        <><div className='dashboard'>logged in
            <br />
            <h1>Welcome, {user.displayName}!</h1>
            <p>Email: {user.email}</p>

            <img src={user.photoURL} alt="" /></div>
            <button onClick={() => auth.signOut()}> Sign out</button>
            </>
    )
}


export default page