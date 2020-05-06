import React, {useState } from 'react';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword ] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match. Try again");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

      await createUserProfileDocument(user, { displayName });
   
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up'>
    <h2 className='title'>I do not have a account yet</h2>
    <span>Sign up with your email and password</span>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        label='Display Name'
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label='Email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label='Confirm Password'
        required
      />
      <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
  </div>
  )
}


// export class SignUp extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       displayName: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     };
//   }
