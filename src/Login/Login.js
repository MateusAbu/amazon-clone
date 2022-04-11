import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './Login.css'

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //Firebase Login
    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    //Firebase Register
    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='Amazon Logo'

                />
            </Link>

            <div className='login_container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />

                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />

                    <button onClick={signIn} type='submit' className='login_signInButton'>Sign In</button>
                </form>

                <p>By signing in you agree to Amazon's Clone Conditions od Use & Sale.
                    Please see our Provacy Notice, our Cookies Notice and our Interest-Based Ads.</p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>


            </div>

        </div>
    )
}

export default Login