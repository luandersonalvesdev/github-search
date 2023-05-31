'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const CurrentSearchContext = createContext();

const initialCurrSearchState = {
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

export function CurrentSearchContextProvider({ children }) {
  const [currSearch, setCurrSearch] = useState(initialCurrSearchState);

  const values = useMemo(() => ({
    currSearch, setCurrSearch,
  }), [currSearch, setCurrSearch]);
  return (
    <CurrentSearchContext.Provider value={ values }>
      { children }
    </CurrentSearchContext.Provider>
  );
}

export const useCurrentSearch = () => useContext(CurrentSearchContext);

CurrentSearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
