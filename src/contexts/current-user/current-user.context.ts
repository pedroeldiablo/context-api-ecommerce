import { createContext } from 'react';

type UserProfile = { displayName: String; email: String; password: String };

const defaultValue: UserProfile = {
  displayName: '',
  email: '',
  password: '',
};

export const CurrentUserContext = createContext(defaultValue);

export default CurrentUserContext;
