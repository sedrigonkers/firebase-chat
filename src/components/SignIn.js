import React from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SignIn = () => {

    const emailRef = React.createRef()
    const passwordRef = React.createRef()


    async function signInWithEmail() {
        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (!email || !password) return

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
        }
        catch (err) { console.log(err.code) }
    }

    async function signUpWithEmail() {
        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (!email || !password) return

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
        }
        catch (err) { console.log(err.code) }
    }

    async function monitorAuthState() {
        onAuthStateChanged(auth, user => {

        })
    }

    monitorAuthState()

    return (
        <>
            <input ref={emailRef} placeholder='email' /><br />
            <input ref={passwordRef} placeholder='password' /><br />
            <button onClick={signInWithEmail}>Sign in</button><br />
            <button onClick={signUpWithEmail}>Create account and sign in</button><br />
        </>
    )
}

export default SignIn