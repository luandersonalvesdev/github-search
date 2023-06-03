'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBarList() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUserFromLS = localStorage.getItem('githubSearchUser');
    setUser(getUserFromLS);
  }, []);
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
