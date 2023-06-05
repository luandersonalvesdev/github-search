'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function NavBarList() {
  const [user, setUser] = useState();
  const { user: { login } } = useGithubUserContext();

  useEffect(() => {
    setUser(login);
  }, [login, user]);
  return (
    <ul>
      <li>
        <Link href="/">Página inicial</Link>
      </li>
      <li>
        <Link href="/favorites">Favoritos</Link>
      </li>
      <li>
        <Link href={ `/details/${user}` }>Perfil</Link>
      </li>
    </ul>
  );
}
