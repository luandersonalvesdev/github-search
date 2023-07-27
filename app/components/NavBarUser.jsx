'use client';

import Link from 'next/link';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function NavBarUser() {
  const { user: { login, avatarUrl } } = useGithubUserContext();

  return (
    <div>
      <Link href={ `/details/${login}` } className="flex items-center">
        <img
          width="60px"
          src={ avatarUrl }
          alt=""
          className="rounded-md"
        />
        <p className="ml-3 font-light">{login}</p>
      </Link>
    </div>
  );
}
