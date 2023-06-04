'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo, fetchUser } from '../service/customFetch';

const GithubUserContext = createContext();

const initialUserState = {
  login: '',
  avatarUrl: '',
  name: '',
  location: '',
  bio: '',
  publicRepos: 0,
  followers: 0,
  following: 0,
  createdAt: 0,
};

const initialUserReposState = [{}];

export function GithubUserContextProvider({ children }) {
  const [user, setUser] = useState(initialUserState);
  const [userRepos, setUserRepos] = useState(initialUserReposState);

  const successfulLogin = async () => {
    const userFromLS = localStorage.getItem('githubSearchUser');
    if (!userFromLS || userFromLS === '.') { return; }
    const dataUser = await fetchUser(userFromLS);
    delete Object.assign(dataUser, { avatarUrl: dataUser.avatar_url }).avatar_url;
    const dataRepos = await fetchRepo(userFromLS);
    setUser(dataUser);
    setUserRepos(dataRepos);
  };

  const values = useMemo(() => ({
    user, setUser, userRepos, setUserRepos, successfulLogin,
  }), [user, userRepos]);
  return (
    <GithubUserContext.Provider value={ values }>
      { children }
    </GithubUserContext.Provider>
  );
}

export const useGithubUserContext = () => useContext(GithubUserContext);

GithubUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
