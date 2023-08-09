import React, { UseState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';




function Login() {
  const [email, Setemail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='login'>
      <Link to='/'>
      <img 
      className='login__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
      </Link>

      <div className='login__container'>
        <h1>Sign-In</h1>

        <form className='login__form'>
          <h5>e-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign In</button>
        </form>

        <p> 
          By signing in, you agree to this FAKE Amazon's Conditions of Use & Sale.
          Please see our non-existent Privacy Notice, our Cookies Notice and our Uninterested-Based Ads
          Notice.
        </p>

        <button className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login