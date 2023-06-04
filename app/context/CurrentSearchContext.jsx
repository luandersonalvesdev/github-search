'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const defaultUserAvatar = 'https://i.stack.imgur.com/frlIf.png';

const CurrentSearchContext = createContext();

export const initialCurrSearchState = {
  avatarUrl: defaultUserAvatar,
  name: '',
  login: '...',
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
