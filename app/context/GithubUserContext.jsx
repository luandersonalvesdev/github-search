'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const GithubUserContext = createContext();

const defaultProfileAvatar = 'https://i.stack.imgur.com/frlIf.png';

const initialProfileState = {
  login: '',
  avatarUrl: defaultProfileAvatar,
  name: '',
  location: '',
  bio: '',
  publicRepos: 0,
  followers: 0,
  following: 0,
  createdAt: 0,
};

export function GithubUserContextProvider({ children }) {
  const [profile, setProfile] = useState(initialProfileState);

  const values = useMemo(() => ({
    profile, setProfile,
  }), [profile, setProfile]);
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
