'use client';

import Link from 'next/link';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function NavBarUser() {
  const { user: { login, avatarUrl } } = useGithubUserContext();

  return (
    <div>
      <Link href={ `/details/${login}` }>
        <img width="100px" src={ avatarUrl } alt="" />
        <p>{login}</p>
      </Link>
    </div>
  );
}
