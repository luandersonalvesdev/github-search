'use client';

import { useCurrentSearch } from '../context/CurrentSearchContext';

export default function UsernameProfile() {
  const { currSearch: { login } } = useCurrentSearch();
  return <p>{login}</p>;
}
