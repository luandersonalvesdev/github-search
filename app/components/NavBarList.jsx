'use client';

import Link from 'next/link';

export default function NavBarList() {
  return (
    <ul>
      <li>
        <Link href="/favorites">Favoritos</Link>
      </li>
      <li>
        <Link href="/profile">Perfil</Link>
      </li>
    </ul>
  );
}
