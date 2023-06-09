'use client';

import Link from 'next/link';
import ButtonToFavorite from './ButtonToFavorite';
import { useCurrentSearch } from '../context/CurrentSearchContext';

export default function ProfileCard() {
  const { currSearch: { avatarUrl, login, name } } = useCurrentSearch();

  return (
    <>
      <Link href={ `/details/${login}` }>
        <img
          src={ avatarUrl }
          alt={ name }
          width="200px"
          height="200px"
        />
        <p>{name}</p>
        <p>{login}</p>
      </Link>
      <ButtonToFavorite login={ login } />
    </>
  );
}
