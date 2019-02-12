import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ loginWithGoogle, loginWithGithub }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expense Manager</h1>
      <p>Have your expenses under control.</p>
      <h3>Login with</h3>
      <button title='Google' id='login-google' className='button button--wide button--google' onClick={loginWithGoogle}><FaGoogle/></button>
      <button title='GitHub' id='login-github' className='button button--wide button--github' onClick={loginWithGithub}><FaGithub/></button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: () => dispatch(startLogin('google')),
  loginWithGithub: () => dispatch(startLogin('github'))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
