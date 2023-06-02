'use client';

import Link from 'next/link';

export default function NavBarList() {
  const getUserFromLS = localStorage.getItem('githubSearchUser');
  return (
    <ul>
      <li>
        <Link href="/">Página inicial</Link>
      </li>
      <li>
        <Link href="/favorites">Favoritos</Link>
      </li>
      <li>
        <Link href={ `/details/${getUserFromLS}` }>Perfil</Link>
      </li>
    </ul>
  );
}
