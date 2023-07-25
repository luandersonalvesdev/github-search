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
    <ul className="flex justify-evenly w-1/2 font-light text-lg">
      <li>
        <Link href="/timeline" className="p-2">Página inicial</Link>
      </li>
      <li>
        <Link href="/favorites" className="p-2">Favoritos</Link>
      </li>
      <li>
        <Link href={ `/details/${user}` } className="p-2">Perfil</Link>
      </li>
    </ul>
  );
}
