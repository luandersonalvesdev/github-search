'use client';

import { useCurrentSearch } from '../context/CurrentSearchContext';

export default function UsernameProfile() {
  const { currSearch: { login } } = useCurrentSearch();
  return <p className="text-xl">{login}</p>;
}
