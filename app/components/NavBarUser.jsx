'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGithubUserContext } from '../context/GithubUserContext';
import { initialCurrSearchState } from '../context/CurrentSearchContext';

export default function NavBarUser() {
  const { user } = useGithubUserContext();

  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    if (getUserFromLS === '.') { setIsGuest(true); }
  }, []);

  return (
    <div>
      {
        isGuest
          ? (
            <>
              <img width="100px" src={ initialCurrSearchState.avatarUrl } alt="" />
              <p>{initialCurrSearchState.login}</p>
            </>
          )
          : (
            <Link href={ `/details/${user.login}` }>
              <img width="100px" src={ user.avatarUrl } alt="" />
              <p>{user.login}</p>
            </Link>
          )
      }
    </div>
  );
}
