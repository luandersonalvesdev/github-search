'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo, fetchUser } from '../service/customFetch';

const GithubUserContext = createContext();

const defaultUserAvatar = 'https://i.stack.imgur.com/frlIf.png';

const initialUserState = {
  login: '',
  avatarUrl: defaultUserAvatar,
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

  useEffect(() => {
    (async () => {
      const userFromLS = localStorage.getItem('githubSearchUser');
      const dataUser = await fetchUser(userFromLS);
      const dataRepos = await fetchRepo(userFromLS);
      setUser(dataUser);
      setUserRepos(dataRepos);
    })();
  }, []);

  const values = useMemo(() => ({
    user, setUser, userRepos, setUserRepos,
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
