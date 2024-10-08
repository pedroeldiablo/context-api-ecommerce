import React from 'react';

// import { SignIn } from '../../components/sign-in/sign-in.component';
// import { SignUp } from '../../components/sign-up/sign-up.component';
import { SignIn } from '../../components/sign-in/signIn.component';
import { SignUp } from '../../components/sign-up/signUp.component';

import './sign-in-and-sign-up.styles.scss';

export const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
