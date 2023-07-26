'use client';

import Link from 'next/link';
import ButtonToFavorite from './ButtonToFavorite';
import { useCurrentSearch } from '../context/CurrentSearchContext';

export default function ProfileCard() {
  const { currSearch: { avatarUrl, login, name } } = useCurrentSearch();

  return (
    <div className="pt-5 relative">
      <Link
        href={ `/details/${login}` }
        className="
          flex
          rounded-md
          bg-white
          relative
          border
          hover:shadow-md
          duration-200
        "
      >
        <img
          src={ avatarUrl }
          alt={ name }
          width="60px"
          height="60px"
          className="rounded-l-md"
        />
        <div
          className="
            w-full
            flex
            flex-col
            justify-center
            items-start
            pl-4
            "
        >
          <p>{name}</p>
          <p className="font-light">{login}</p>
        </div>
      </Link>
      <ButtonToFavorite login={ login } />
    </div>
  );
}
