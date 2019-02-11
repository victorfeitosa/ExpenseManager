import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expense Manager</h1>
      <p>Have your expenses under control.</p>
      <h3>Login with</h3>
      <button title='Google' className='button button--wide button--secondary' onClick={startLogin}><FaGoogle/></button>
      <button title='GitHub' className='button button--wide button--tertiary' onClick={startLogin}><FaGithub/></button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
