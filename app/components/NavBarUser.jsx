'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchUser } from '../service/customFetch';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function NavBarUser() {
  const { profile } = useGithubUserContext();

  const [user, setUser] = useState(profile);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    if (getUserFromLS === '.') { setIsGuest(true); return; }
    (async () => {
      const data = await fetchUser(getUserFromLS);
      const {
        avatar_url: avatarUrl, public_repos: publicRepos, created_at: createdAt } = data;
      setUser({ ...data, avatarUrl, publicRepos, createdAt });
    })();
  }, []);

  return (
    <div>
      {
        isGuest
          ? <img width="100px" src={ user.avatarUrl } alt="" />
          : (
            <Link href={ `/details/${user.login}` }>
              <img width="100px" src={ user.avatarUrl } alt="" />
            </Link>
          )
      }
      <p>{user.login}</p>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <p>{`Repositórios públicos: ${user.publicRepos}`}</p>
      <p>{`Seguidores: ${user.followers}`}</p>
      <p>{`Seguindo: ${user.following}`}</p>
    </div>
  );
}
